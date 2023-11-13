---
date: '2020-02-05'
url: 'a-bank-corezoid'
next: 'mambu-corezoid-cloud-state-machine'
title: '"We are building a customer-centric architecture with the help of Corezoid", - Igor Vasilenko, CIO at A-Bank.'
description: 'We extensively use Corezoid for large systems, such as a mobile application, Internet banking. Corezoid is the core, back-end of all these systems.'
image: '/images/a-bank-vasilenko.png'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'internetbanking'
    - 'api'
    - 'cto'
    - 'digital'
    - 'core'
    - 'messenger'
    - 'viber'
    - 'crm'
lang: 'en'
---

| ![img](/images/a-bank-vasilenko.png) | 
| :---: |
| Igor Vasilenko, CIO at A-Bank |

#### When did you start using Corezoid at A-Bank??

The world is changing rapidly. Today, the leader is the one who launches new products and services ahead of competition. There are many processes, and a lot of them are at juncture of systems. Developer’s resources are limited and expensive, now become even more expensive.

We started using Corezoid technology since its inception. At A-Bank, we started involving business analysts and people from business, who understand what the APIs and algorithms are, in building of processes.

#### Where do you use Corezoid within the bank’s IT architecture?
We extensively use Corezoid for large systems, such as a [mobile application](https://a24m.a-bank.com.ua/), Internet banking. Corezoid is the core, back-end of all these systems.

What is Internet banking? It is an interaction of a set of business processes and systems: cashbacks, Western Union transfers, utility bills, customer communication rules, integration with core banking. Corezoid combines all of these and offers customers a single service.

Corezoid often operates as a bus at the A-Bank. We use Corezoid when we need to combine many different protocols into one process or set up an interaction logic between different systems in solving integration problems. Corezoid also excellently copes with a task of managing 3rd parties software access to services inside the A-Bank.

#### Do you have a Corezoid Center of Competency?
Yes. The Center monitors accuracy of building business processes. The main task of the Center of Competency is to make sure that business analysts within their businesses built processes correctly, based on best practices, and ensure that Corezoid process avoids DDoS attacks.

The Center also trains new business analysts in building Corezoid-based business processes. Two more employees at the Operations Department monitor hardware resources that Corezoid operates on. We closely cooperate with Middleware in matters of updating Corezoid versions.

#### How did you set up state of business processes monitoring?
Corezoid is an application and event system. Corezoid has rich functionality in terms of real-time display of information on requests, errors, etc. It often happens that a business process needs to be launched quickly. High time to market speed is required.

Recently, we needed to launch a business process for issuing loans at [Comfy](https://comfy.ua/) (a home appliance and electronics retailer). This task took our employees a few days to complete. We set up necessary risk validation, identification, and management. The business immediately got dashboards that show statistics on the entire life cycle of a loan application in real-time.

Has the bank rejected a loan application? At what stage? How many rejections do we have daily? We always found bottlenecks in the processes and worked to improve them. Got a rejection from the risk department at the stage of issuing a loan? We went to the risk department and talked with the people there, and they improved their models and business processes.

It is impossible to achieve a good customer experience without such approach. For example, we launched an advertisement campaign, offered loans to our customers, a customer got interested, filed an application, but then suddenly his application was rejected by the risk department. What was the point of offering then?

#### Is Corezoid able to manage server infrastructure?
It all depends on the criticality of the process. We do not normally delegate Corezoid to restart a server automatically (although it is technically possible), however, for example, if we have two providers of mobile phone recharge and one of them stops working, Corezoid can automatically switch to the “backup channel”.

#### What other processes have you set up with Corezoid at A-Bank?
We have implemented Antifraud on Corezoid+Deepmemo platform. Our CRM is also based on Corezoid as well as all processes connected with communications, notifications. We’ve set up communication logic in Corezoid. Which channel to use to send a message? Viber? SMS? We’ve built complex logic in Corezoid: send a notification, switch to standby mode. If a customer does not respond within X time, another action should be taken then.

We often do A\B testing or run multiple-choice tests. For example, we want to send out an offer to 1.5 million customers. First, we send it out to a small sample of 10,000 people. We look at the conversion rate, how people react, which buttons they push. We then improve our communication and send out a refined option to a larger number of people.

We can send a communication directly to our own [mobile application](https://a24m.a-bank.com.ua/) А24. A24. There is a chat there, with a possibility of interactive communication. Forms are created in a separate form editor, which is part of the Sender Communication Engine and is linked with Corezoid.

| ![img](../images/a-bank-redactor-form.png) |
| :---: |
|*UI (form) editor in Sender Communication Engine*|

Following the receipt of notification from the bank by the customer, he may either go through the entire service scenario using the form or contact a support service operator via chat. For example, we recently invited customers to add their cards to Google wallet\Apple wallet. We sent out a form with the “Add to wallet” button. We build a customer-centric architecture. We plan to add buttons with links to Sender Forms in a bank statement itself soon.

| ![img](../images/a-bank-mobi-app-1.png) |![img](../images/a-bank-mobi-app-2.png) |  ![img](../images/a-bank-mobi-app-3.png) |
| :---: | :---: | :---: |
*A form in an A-Bank mobile application containing an offer to add a card to Google Pay*

Our helpdesk, service-desk are integrated with Corezoid in case a customer has any issues or questions. It is important that these processes are set up by the employees of the contact center themselves, not by developers in the IT department.

We actively use Sender Forms for internal business processes. For example, HR department can easily collect 50 UAH from employees for birthday via chat.

| ![img](../images/a-bank-viget.jpg) |
| :---: |
| *This is how a website widget looks like. This is a form where a person can ask a typical question: how to get a loan? It will be answered by the bot. If the question is non-standard, then a support service operator will get connected.* |

#### Do you store any data in Corezoid?
If some intermediate states need to be stored in the course of the business process execution, they may be stored in the state diagram in Corezoid. We use APIs for long-term data storage, which then copy data from Corezoid to specialized systems.

#### How is Corezoid scaled?
We can scale Corezoid horizontally without any problems. Corezoid is scaled by component. API call units can be scaled separately and user code separately. This is especially convenient if you work in the cloud.

#### Who normally creates APIs at your bank to work with Corezoid?
We ordered a basic API suite for the core system from a core banking vendor: issue a card, upload an agreement, get basic information. We bound these APIs with our layer for access control by adding security logic and protection against DDoS. A-Bank has many own developers who may also create APIs if needed.

#### **Who orders development of new APIs at your bank?**
Product owners order all necessary APIs. Moreover, we have a business analyst responsible for each product in the bank. Business then adjusts the logic of business processes independently. When our IT department was busy with a project of migration from an old core banking system to a new one, we did not have spare time to allocate to business needs. Therefore, we used the power of Corezoid, the power of business analysts. IT had the task to “dig” and accomplish the migration on time. If not for Corezoid, we would not have developed business, but would have been engaged exclusively in migration instead.

#### How do you test the processes before launching in production?
We check how accurately a business analyst has built the process, whether it has any error handlers, whether the process is not at risk of being overloaded by bank’s APIs. We also constantly train business analysts to use best practices in building processes. Middleware develops the training content.

#### How is the business logic tested?
No later than yesterday, it took us 1.5 hours to set up on the host blocking of a certain type of transactions in Corezoid, to test business logic. It happens all the time in the bank: you want to test some hypothesis, launch a new product quickly, feel it, understand it, see whether your idea will work or not. Corezoid is well suited for this.

When launching a new product, the business does not think where to get 12 more APIs. People try to take a pool of Corezoid processes and reuse them. You may grant colleagues an access to your processes. Some processes can be taken from [Corezoid Marketplace](https://market.corezoid.com).

#### Who is the owner of Corezoid as a system within the bank?
Our IT department monitors the performance of Corezoid. We are the owners of Corezoid as a platform. At the same time, there is an owner of each process, who is responsible for the efficiency of the process logic following its launch.

#### It seems that a business analyst is responsible for supporting his process. Does the business support such approach?
When the business realized that it could build processes by itself, it was the first to drive Corezoid development. For example, we cannot show up at a meeting with Yuri Vasilievich (A-Bank’s CEO) without a dashboard. If we ordered all dashboards from our IT department, we would not be able to work at all. Preparation of samples and dashboards is a boring routine for employees of IT department.

#### How many processes do you have in Corezoid?
Around 4,000. Issuing a loan, for example, requires going through 30 processes.

#### How do you support 4,000 processes? They cease to be necessary at some stage.

We have a tool to track the unused processes. We know the owners of the processes. We “clean” the system regularly by deleting what is not used. There are fewer actively working processes with useful business logic, i.e. around 1000. The rest are technical, infrastructure processes that support communication between the back and the front. We also have dashboards where we see activity peaks and receive relevant alerts whenever any peak loads are detected.

There are also professional monitoring tools, such as Kibana. It shows statistics, which processes create a load. It also displays behavior of the system as a whole. We can see which processes are trending in terms of load. We can see who is the owner of the process and what it is doing.

#### How do you address issues related to authentication of people, APIs?
We work with sessions that are active for a limited period of time. Each user or technical login is assigned with a token used to sign requests. Corezoid also uses keys. The entire request body can be signed with a key. You may verify on your side that a request has arrived from a process that has a required authority. We have a separate block where sessions, authorities, roles etc. are located.

#### What would you not do with Corezoid?
For example, I wouldn’t give card authorization to Corezoid. Financial transactions should be operated by card processing.

#### Please give an example of a good case, which the A-Bank was able to implement using Corezoid?
A-Bank recently was [the first bank in the world](https://corezoid.com/ru/blog/a-bank-middleware-share-credit-card/) to launch the Share.CreditCard service, a service that provides shared access to credit cards. It was implemented in collaboration with Middleware on the basis of patented Share.CreditCard technology.

| ![img](../images/share.creditcard.png) |
| :---: |
| *http://Share.CreditCard* |

Share.CreditCard allows you to select a recipient of funds from the list in the A-Bank mobile application, specify cash limit and period, as well as share access to your own card. The recipient can touch a POS-terminal on an Android-smartphone anywhere in the world and the money will then be debited from the sender’s card. Share.CreditCard is the fastest free of charge way on the planet to transfer access to funds. Admit, it doesn’t happen very often when a Ukrainian bank is the first in the world to launch a new product. :)
