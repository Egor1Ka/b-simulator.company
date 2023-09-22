---
date: '2018-05-24'
url: 'integration-of-amo-crm-sunflower-ip-telephony-website-and-payment-gateway-for-vuso-company'
next: 'pumb-begunov'
title: 'Integration of Amo CRM, Sunflower IP Telephony, website, and payment gateway for VUSO company'
description: 'We received the functionality of the distribution of the requests between the participants of the CRM system. The administrator has the opportunity to create a schedule for the distribution of requests, choose the responsible user, the type of request (products). All systems participating in the process of registration and sale of policies are integrated into the AmoCRM interface using Corezoid, and work as one mechanism.'
image: '/images/vuso-logo.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'insurance'
    - 'amocrm'
    - 'integration'
    - 'crm'
    - 'solution'
    - 'automation'
lang: 'en'
---

## Quick overview
**Company name:** VUSO

**Activity:** insurance company

**Location:** Ukraine

**Covering:** 31 offices all over Ukraine

**Company Size:** 400+ employees

VUSO is an innovative insurance company, one of the leaders of online sales in the Ukrainian market. The company provides such types of insurance as an auto bumper to bumper warranty, Third Party Liability insurance, Green Card, touristic insurance, medical and health insurance, personal accident and illness insurance, property insurance, etc.

Besides to a large number of representative offices, VUSO has a small sales department on the Internet. Because of the growing popularity of the online sales, the workload for this department also has risen. The non-expediency of further manual application processes was vivid. The primary task was to quickly recognise the customer during the phone chat in real time, providing a client profile card with the entire history of interaction.

## The automation task solution approach in Evergreen
First of all, we ask a customer for the detail business-process description. This information is a deception point for us because you can’t automize the implicit and undescribed processes. Next step is data structuring and simplification. Thanks to this approach, we’ve already had a complete picture of the client's business unit functioning, while searching for a technical solution. Why is Evergreen’s Approach distinctive? The answer is clear; we find the problem solution basing on the payback of product introduction. We use the method of determining the approximate size of an investment that would be cost-effective for a particular client under a specific project.

In case of VUSO, we calculated the increase of processed applications after the processes automation and the approximate revenue growth associated with this increase. Noteworthy is that our rough estimation differs from much more accurate VUSO calculations by a few thousand UAH.

Join efforts in studying process, and payback analysis made it possible to offer a stack of systems that are most suitable for relevant technical needs considering reasonable budgets.

## Technical Solution
Here you can find the functional framework of the integration:

| ![img](/images/vuso-site-crm-scheme-en.png) |
| --- |

The Evergreen solution consisted of developing and simplifying the sales funnel for each of the VUSO products, as well as a client card improvement and modification of the forms on the site so that managers could receive a full set of the required information from the customer.

We built a chain of interaction between VUSO systems: in-house systems of receiving and processing applications for the purchase of a policy from the site VUSO, corporate information system (CIS), Sunflower IP Telephony, AmoCRM, website VUSO, from which requests, e-mails and corporate profiles of social networks are received.

**An example of a data flow scheme for processing forms on a site:**

| ![img](/images/vuso-crm-data-en.png) |
| --- |

First of all, we created processes on the Corezoid platform for the integration of the telephony system and the internal systems (WS). In parallel, the WS developers were finishing the necessary Web services for data synchronisation with AmoCRM via Corezoid. The third step was the negotiation and integration with the Sunflower telephony system.

While working on the project, we faced the fact that the Sunflower telephony system is poorly tooled for integration. We decided to create widgets in AmoCRM, allowing making and receiving calls directly from the client's card.

> VUSO had a load balancer, presented in the form of a site with a table, where the duty manager was assigned by days and hours for a week. But it wasn’t enough for the normal functioning of the call centre. The necessity to establish and modernise it raised. We have transferred VUSO existing database to the JSON format and added to the time frames the distribution by the activity-specific (short forms, telephony, products). As a result, it became possible to track who was currently responsible for a particular issue and automatically sent an request for it. So the certain specialists will receive the request filtered by the areas of activity.

**Eugen Bessmertniy, Web developer at Evergreen**

> When we started working on the client's profile card and added new fields to it, the main our task was to align the process that way the manager could see the relevant card profile of the calling client. I will explain how it works: when a call comes in, Corezoid checks if there is a client in CRM, if not, it creates a new contact and returns its identifier. It takes a lot of time and such periods can vary a little. To solve this problem, we created a script. We depicted main principles of activity  on the picture: 

| ![img](/images/vuso-redis-corezoid-en.png) |
    | --- |
    
> As a result, when the client calls to the Company, the script notifies AmoCRM of the call. Even before answering the call, the operator sees in AmoCRM a pop-up message with the name of the customer who is calling. Clicking on this notification, you can view detailed information about the caller. 

**Sergey Rybalko, Web developer at Evergreen**

> In this project, we had three levels of testing. Thus, raw, unchecked automation was not immediately applied to customers without littering the managers until all bugs were eliminated.

**Dmytro Gerasymov, QA engineer at Evergreen**
