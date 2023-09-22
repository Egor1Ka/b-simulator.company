---
date: '2015-09-17'
url: 'how-to-optimize-the-performance-of-online-stores-pt-1'
next: 'pumb-begunov'
title: 'How to optimize the performance of online stores. Automatic dial-ups on incoming leads.'
description: 'The solution is binding APIs of multiple services via Corezoid.com, namely: Bitrix24 (CRM system) + VoxImplant (callback service) + Telegram (messenger).'
image: '/images/send-message-via-telegram.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Small and medium business'
tags:
    - 'ecommerce'
    - 'automation'
    - 'workflow'
    - 'integration'
lang: 'en'
---

An online watch store came to me for advice a week after my previous article, in which I described assembling a Telegram bot, was released. By that time they had already constructed some of the processes for their needs. With the growth of the business, they faced the problem of processing large amounts of incoming orders. Instant responses to requests can make the difference whether a customer will buy a product or not.

Here I will describe a case study on optimizing an online store using Corezoid.com and give open access to a link for the template process, that is given below.

**To Be Done:**

1. Add the lead in the CRM (in this case it is Bitrix24) filling in all required additional fields.
2. Notify vendors about the incoming lead or an error.
3. Notify the customer about the successful receipt of his order, as well as tell him about any additional advertising campaign (trying to œwarm the customer up and to increase the average check value).

**At the start we have:**

1. A name and a telephone number of a customer who is interested in our product.
2. A customers city that was determined by his/her IP-address.
3. A customers time zone.
4. A partners ID (ref-link in cookies) from which an order arrived.

The solution is binding APIs of multiple services via Corezoid.com, namely: Bitrix24 (CRM system) + VoxImplant (callback service) + Telegram (messenger).

To send a lead in Corezoid an API request should be made from a php-script that receives data from the sites web form. In their case it looks like:

```
$data = (object) array('server'=>$_SERVER,'cookies'=>$_COOKIE,'post'=>$_POST );
$full = (object) array('ops'=> array( (object) array( 'ref'=>$ip,'type'=>'create','obj'=>'task','conv_id'=>'31754','data'=> $data)) );

$cmd = ( json_encode( $full ) );
$str = "curl 'https://www.corezoid.com/api/1/json/public/31754/e4203ff8f55f17595a46549d35dbd00d51d0879d' -H 'Accept: application/json, text/javascript, */*; q=0.01' --data '".$cmd."' --compressed";

$res = shell_exec($str);
            
$data is formed from the data that should be transferred for processing by Corezoid.

$ops object includes setting ref (reference) - a unique ID, by which the order is fixed in Corezoid. If at the moment an order with the same ref is already being processed, then the next order will not be added. In this case, they use a customers IP-address as ref.
```
Parameter conv_id determines task creation in a particular process (ID Process).

A URL, to which we will send data and a process conv_id, should be taken from the administrators panel:

| ![img](/images/corezoid-process-diagram.png) |
| --- |

## Order processing

First of all, the order comes to the start node. It is painted green. You can view this order and see the data that has been received at the input.

| ![img](/images/corezoid-test-process.png) |
| --- |

Since the watch store actively uses a strategy of partnership sales, they need to determine from what partner an order has arrived.

Via API Bitrix24 we can get the ID and data of the partner. In order to authorize the API, we should insert in the "auth" parameter the code that allows us to dynamically receive the access_token value from its generating-and-updating process. [A detailed description of this process](https://doc.corezoid.com/docs/tutorials) is given in corezoid.com documentation.

In this example, the data on the partners ID is stored in the cookies object, in the utm_source parameter, that the company tracks after transferring by the partners link. The value of this parameter is transferred to the API.

| ![img](/images/add-lead-to-bitrix.png) |
| --- |

The next step is determined by the logics of CODE, via which the store processes telephone numbers. Here, the processing (for correct dial-up script work) is in auto-replacing the first digit 8 to digit 7, and if a customer has entered only first 10 digits and his/her first digit inputted was 9, then it adds 7 as the first digit.

| ![img](/images/corezoid-code-example.png) |
| --- |

At the next stage, they send an order to a separate RPC-process Create new lead [RPC]. It creates a lead in CRM and returns the leads ID. In Corezoid documentation [a detailed description](https://doc.corezoid.com/docs/tutorials) of this process is given.

| ![img](/images/corezoid-connect-to-api.png) |
| --- |

In the case the lead has been successfully created, the ID returns to lead_id variable parameter.
Then, an order is copied into a process that will dial a customer up. After copying it will immediately move to the next step without waiting for the return of any value from the VoxImplant Robot Call process. This is the main difference versus the RPC-request when it waits for the data to return from another process.

The logics of the dial-up at first adds a variable value to the telephone number using the CODE logics. If the phone is longer than 11 digits, it is sent to the final node, as the phone number is too long.

The next node converts the current Moscow time into the timenow variable.

| ![img](/images/voximplant-change-call-time-to-moscow.png) |
| --- |

This is necessary for cases, when leads come at night or early in the morning, when the store should not bother the customer by calling, but just send an SMS confirming the orders successful adoption and informing that the callback will be made during business hours.

After the CODE logics, in the same node the time and fact of sending an SMS to the customer is checked. If the message was not sent and it is not during business hours at the moment, then the order is moved to the node Send Night SMS. Here, the store sends an SMS to the customer via API logics and receives a reply to a description variable parameter. Then it shifts to a timeout "sleep mode" for 2 hours.

| ![img](/images/voximplant-send-sms-night-time.png) |
| --- |

An order, suspended in a time-out, looks like this:

| ![img](/images/corezoid-voximplant-robot-call.png) |
| --- |

If the time is during business hours, then the store needs to call a customer and notify him/her about the successful receipt of his/her order, and inform about an extra advertising campaign.

This task has been realized through the API logics, which runs a script on the VoxImplant service.

| ![img](/images/voximplant-create-call.png) |
| --- |

VoxImplant calls a customer and plays a prepared recording about his/her order success. In the code the function of detecting answering machines is additionally integrated.

[{script code}](http://jsfiddle.net/jqdr9npr/)

Next, an order is moved to the Callback logics in Corezoid that waits for a response from the VoxImplant with the call results. If we do not receive a response, it means that something has gone wrong and the order is moved to manual processing. If everything is OK, and VoxImplant sends us the results, we shift to a process of results allocation.

If the number is invalid, the order goes to the final node, there is no sense to call and send an SMS to this telephone. If a customer doesn't reply or at the moment his phone is off, then our order moves into the status "NoCallback" and takes a time-out for a half an hour.

| ![img](/images/voximplant-callback.png) |
| --- |

If you successfully get through to a customer, then we additionally notify him via SMS that his order has been successfully received, and finalize this order. When VoxImplant determines an answering machine the shop sends an SMS to the customer as well, but does not call him later, as we are unaware when a customer will pick up, and it is not reasonable for the store to spend money on pointless calls. Additionally, the logics can be embedded with restriction on dial-ups, as well as updating the call status in the CRM lead.

| ![img](/images/send-message-via-telegram.jpg) |
| --- |

In case of the main process has invalid token after partner list request and we need to proceed the task manually we can send notification via Telegram.
