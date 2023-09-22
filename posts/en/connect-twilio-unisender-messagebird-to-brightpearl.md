---
date: '2015-11-20'
url: 'connect-twilio-unisender-messagebird-to-brightpearl'
next: 'pumb-begunov'
title: 'Connect Twilio, Unisender, MessageBird to Brightpearl'
description: 'With Corezoid software, we were able to connect to Brightpearl sms gateway called Unisender. It’s 2 times cheaper for us + has an easy to connect API. The same can be achieved with Twilio and MessageBird gateways or almost any other sms service provider with an API.'
image: '/images/corezoid-sms-integraions.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Small and medium business'
tags:
    - 'twilio'
    - 'unisender'
    - 'messagebird'
    - 'brightpear'
    - 'crm'
    - 'automation'
    - 'integration'
    - 'api'
lang: 'en'
---

> We use Brightpearl inventory management software in our ecommerce business. Here’s another post from my [Brightpearl Automation series](http://99rabbits.com/brightpearl-automation/).

Ecommerce stores normally send various sms notifications to their customers. These include: ‘your order has been shipped’, ‘we couldn’t reach you by phone, please call back’, ‘your payment has been received successfully’ etc. This is a good way to communicate crucial information to your customers, especially if they don’t rely so much on email, as does our typical customer here in Ukraine.

Unfortunately, Brightpearl currently offers only one sms gateway – Clickatell. It’s weak points for us are as follows:

1. Low sms delivery rate. We frequently got complaints from customers that they haven’t received any messages from us. I suppose this may be the case only for Ukrainian mobile networks, but it is what it is.
2. Comparatively high cost of each sms;
3. Lack of support for Cyrillic characters.

With Corezoid software, we were able to connect to Brightpearl sms gateway called Unisender. It’s 2 times cheaper for us + has an easy to connect API. The same can be achieved with Twilio and MessageBird gateways or almost any other sms service provider with an API.

Regrettably, I can’t say that we are able to completely replace native sms gateway with 3rd party one. Manual messages from Brightpearl can still be sent only via Clickatell. But we now use Unisender for shipped sales order notification, which contains carrier tracking number. Also, we can employ sales order notes as a kind of a text command interface. For example, if someone starts an order note with ‘SMS:‘, we can send a message to corresponding customer mobile number. All our users need to do, is to create a text note to any order starting it with ‘SMS:’ command, change order status to any other and then hit ‘Save’ button.

## How to connect 3rd party text messaging provider to Brightpearl
You can use ready-made example processes provided by Corezoid team. Just sign up, go to Examples folder and locate ‘SMS’ subfolder.

| ![img](/images/corezoid-sms-integraions.jpg) |
| --- |

You can copy any of the processes to your account and play with them. It may appear complicated at first. Corezoid has got quite a steep learning curve right now. But don’t be startled. Those examples represent quite elaborated processes while all you essentially need to send sms from Corezoid process is just one node (block) with API logic and API key from your text messaging service:

| ![img](/images/corezoid-send-sms-via-unisender.png) |
| --- |

You can test sms API by sending some texts to yourself. When you are ready, you can go on to start building Brightpearl connection. I’ll explain how you do this in later posts.

Source: [http://99rabbits.com/twilio-brightpearl/](http://99rabbits.com/twilio-brightpearl/)
