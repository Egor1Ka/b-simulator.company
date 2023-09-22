---
date: '2016-02-23'
url: 'how-to-automate-small-and-medium-sized-businesses-processes'
next: 'pumb-begunov'
title: 'How to automate small and medium-sized businesses’ processes with the help of Corezoid “digital core”'
description: "We're testing blockchain for notarization of transactions. Integration of Corezoid with the bitcoin network will allow us to implement smart contracts for real business purposes."
image: '/images/water-delivery.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Small and medium business'
tags:
    - 'business'
    - 'smb'
    - 'process'
    - 'automation'
    - 'digital'
    - 'core'
lang: 'en'
---

What can a drinking water delivery company, a system for adding credit to mobile phone accounts globally and a program for managing deposits of millions of clients of the largest Ukrainian bank have in common? All the aforementioned are based on the Corezoid cloud operating system. We prepared a review of how this development by Ukrainian programmers can automate any process practically without costs of writing program code.

## What is Corezoid?
Corezoid itself is written in the Erlang language, which was developed by the Ericsson Computer Science Laboratory in 1987. It is perfect for the creation of high-load systems designed for processing a large number of events in real time. For example, the world's most popular instant messenger WhatsApp, the back-end of Facebook chat, and a number of solutions at the mobile giant T-Mobile are written in Erlang.

With the help of Corezoid, business analysts and managers create processes without developers’ assistance. In fact, it’s a digital core of a company. With the help of Corezoid, you can manage any processes regardless of the company or industry size. In the evening, a taxi service can send an SMS to its customers, "Can’t leave the office because of the rain? Call a taxi!", having combined the weather Web-site API and the SMS gateway API. You can manage endless possibilities: circulation of documents, leads in an online store, monitor tractors and combine harvesters, solve logistical issues, and address financial accounting issues.

Corezoid can be called a language of meta-programming as well. It does not matter what language the software solution was originally written in: PHP, Perl, Python, Java, Java Script, Erlang, C ++, C# or Ruby; if the system has an API, it can send data to Corezoid which has the set logic of operating these data and data obtained from dozens of other APIs. Corezoid can be called a universal glue for APIs. Or, a CPU of processes.

So let’s see how it works in practice.

## How to launch a product order system via the internet without spending a cent?
Launching an online store and maintaining it can be a costly endeavour. Besides the Web-site development, an online store requires regular investments into content, SEO, SMM etc. It can make sense if the company is aiming for mass online sales, but what can you do if you have a local pizzeria or a water delivery service? How to launch the product or service online, without investing in site development or testing? This is what the water delivery service "Vodolei" ("Aquarius") did.

| ![img](/images/water-delivery.jpg) |
| --- |

When the company faced a challenge to launch water delivery via the Internet, the company found that its Web-site operates on an obsolete platform and is was just a simple landing page with no functionality. Theoretically, an online order form could be added but this made no sense with such a poor Web-site. The decision was made to take advantage of Sender messenger and adjust acceptance of online orders via "application-in-application".

| ![img](/images/sender-forms.jpg) |
| --- |

Aspecial feature of Sender is that within the messenger we can communicate not only with people but with companies as well. We open the "Contacts" section, go to "Business" and enter the private office of a company the service of which we use. And if we want to call a taxi or order a pizza, we don’t have to look for a mobile application – we just need to find the appropriate service in our contacts.

This is how it works. In the Sender messenger, a card of "Vodolei" is created, which is automatically added to the contacts of all messenger users living in Dnepropetrovsk and the surrounding region.

| ![img](/images/sender-admin.jpg) |
| --- |

Then, using the Form Designer, we draw an interface for the future application – buttons to order water, field to enter the number of bottles, the company description, etc. This is the application appearance in operating mode.


| ![img](/images/sender-chat-vodoley.jpg) |
| --- |

At the same time, we create the LiqPay account to make payments for water. The applications interface and LiqPay are connected by the application via the Corezoid cloud operating system. Once the customer has filled in all the required fields, a JavaScript code calculates the order cost and suggests to the customer to pay with a card of any bank in the world.

| ![img](/images/sender-chat-vodoley-order.jpg) |
| --- |

After the order payment, information is sent to "Vodolei" managers by e-mail via a Mandril newsletter, and to the Sender company internal chat. Afterwards, information is delivered to couriers, and the customer receives water at the specified time.

| ![img](/images/water-delivery-man.jpg) |
| --- |

This process can be easily cloned, and helps to adjust order acceptance for absolutely any product or service. The process template can be downloaded from this page, and here you can learn how to start accepting payments via LiqPay.

## How to launch a system for adding creit to mobile phone account globally within one month
Today it is difficult to surprise a friend with mobile phone credit online. But when in 2000 PrivatBank launched the sale of account replenishment electronic vouchers, it was the first such innovation on the Ukrainian market. Back then, mobile accounts could be refilled in one and only way, that is, by using scratch cards with nominal value of UAH 50. At that time, it was almost $10, and this amount was impractical for users such as students.

| ![img](/images/developer.jpg) |
| --- |

The bank found a way out of this situation by offering operators to reject the system of scratch cards and launch a system of electronic vouchers with nominal value of UAH 25. The operator generated an array of maps, handed them to the bank, after which the bank sold them to customers online and via retail intermediaries. There were no analogues to this solution in the CIS, and the system gained popularity very fast, bringing tens of millions of UAH of profits to the bank.

On the tide of this technology, even scammers appeared in Ukraine who were selling supposed online decoders of account refill systems for $30-50. In fact, these frauds were simple random number generators, and couldn’t crack anything, even in theory.

| ![img](/images/card.jpg) |
| --- |

The system’s disadvantage was the fact that banks and operators have been spending much effort to control the use of vouchers. After some time, a solution was found – the operators launched a service of mobile account refilling using a specific number.

The disadvantage of this technology is that each operator had its own cooperation and settlement format, and the bank had to rewrite its software especially for each operator. It was acceptable for the Ukrainian market where mobile operators can be counted on the fingers of one hand, but it made cooperation with Western companies virtually impossible.

The solution was found in 2015 – with the help of cloud OS Corezoid. A standard template was written which suited work with customers of any provider in the world. At adding a new partner, the process responsible for "communication" with the operator’s software was cloned and only the API was changing. At the same time, the Ding integrator was found, after which the possibility to put money on mobile phone accounts in any country of the world became available to the bank’s clients.

Technically, it works as follows: when a Privat24 user wants to recharge his mobile phone, he enters the phone number requiring refilling. Then the script defines the country of the number registration. If it is Ukraine, the operation involves a process responsible for dealing with local operators. Otherwise, Ding, through its API, returns a list of mobile operators working in a given foreign country, and possible denominations for refilling.

| ![img](/images/mobile-worldwide.jpg) |
| --- |

The bank's customer can pay with his Ukrainian hryvnia card, after which the amount in UAH will be recalculated into the currency of the country where his money should be added to the account. Ding then sends the payment to the operator, and the user receives the money on his account.

## How online stores can set up integration with delivery services in only a few hours
One of the main concerns of online store owners is fast and convenient delivery of goods to customers. As a rule, entrepreneurs solve this problem in two ways: either take orders by themselves and convey them through regular couriers, or outsource delivery to an external logistics service. The second option is more popular and is used by the majority of large Ukrainian stores. The explanation here is that setting up integration with a delivery service is much easier than to maintain and manage a whole courier staff. Moreover, it is simply cheaper.

| ![img](/images/superman.jpg) |
| --- |

But despite the apparent simplicity, integration of the online store software with a delivery service is a rather complicated and time-consuming process. This is because an uncountable number of both "platforms" for stores and courier service management systems and bringing these software complexes together is still a challenge.

This problem is solved by OS Corezoid, the designers of which prepared a universal pattern for integrating any online store with the courier delivery service "Merkuryi".

| ![img](/images/corezoid-process-engine-example.jpg) |
| --- |

This is how it works. Once the customer has placed her order on the Web page and stated her address and contact information, these data are sent to "Merkuryi", and the latter delivers the goods at the time stated in the order.

This template can be used by absolutely any business engaged in sale and delivery of goods in Ukraine. The template itself can be downloaded from this Web-site, and for connection to "Merkuryi" API you should contact. A similar system has been used for a few months already by a diaper store Mishka, on the Web page of which you can see the way it works in practice.

