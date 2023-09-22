---
date: '2022-01-24'
url: 'bogdan-veliev-callab-cto-interview'
next: 'codebridge-founder-karpushin-interview'
title: 'Bogdan Veliev, Callab.ua CTO: “In 3 months we developed Corezoid-based CRM from scratch”'
description: 'We built Corezoid-based MVP, launched into production, and from the very first days began non-stop debugging and improving the system.'
image: '/images/bogdan-veliev-callab-cto-interview/bohdan-veliev.png'
category:
    - 'Use cases'
subcategory:
    - 'Enterprise'
tags:
    - 'crm'
    - 'diagnostic'
    - 'corezoid'   
lang: 'en'
---

| ![img](/images/bogdan-veliev-callab-cto-interview/bohdan-veliev.png) |
| :---: |
| *Bogdan Veliev, Collab.ua CTO* |

#### Bogdan, what problem does the Callab company solve?

Callab is a mobile laboratory. We do Covid-19 tests and blood tests 24\7 in any location that is convenient for the customer. The result can be obtained as the official document within 6 hours.

#### What have you built based on Corezoid?

Based on Corezoid we built a CRM from scratch. First, we created a directory of medical tests with a search by code, title and other parameters. Each analysis has a lot of parameters: cost, preparation time, list laboratories that can do the analysis, the work schedule of these laboratories.

| ![img](/images/bogdan-veliev-callab-cto-interview/medical-tests-and-their-statuses.jpg) |
| :---: |
| *List of medical tests and their statuses* |

#### Are these regular classic laboratories?

Yes. You can request the mobile lab or sign up for an appointment to the classic laboratory. In our CRM, we work with such a thing as “Application”. After we receive a new application from the client, the life cycle of the application begins. We need to plan the route of the mobile laboratory in such a way as to conduct medical tests as quickly as possible.

We ask the client the address, calculate how long the collection takes for the selected type of analysis, take into account traffic jams and create the route of the mobile laboratory.

Now we are finishing to work on the feature that will allow clients to make future appointment reservations. This is necessary for cases when we do not know who exactly will be tested (for example, 2 tourists in a hotel), but we only know the address, the number of people and the type of analysis. CRM administrators have the ability to create new client records in the database or check information about existing clients and their past medical tests.

| ![img](/images/bogdan-veliev-callab-cto-interview/client-profile.jpg) |
| :---: |
| *Client profile with medical tests history* |

#### Is there an online payment option for the clients?

Yes. Using Corezoid, we made integrations with Liqpay and WayForPay for foreign payment systems such as American Express. When the client selects the type of analysis and its price from the directory, discount rules are applied, and a link is sent to the client to process the payment. When the analysis is paid, the status of paid orders automatically gets into CRM. It is also possible to issue the invoice to the Business partner in the end of the month.

| ![img](/images/bogdan-veliev-callab-cto-interview/application-details.jpg) |
| :---: |
| *Application details page, example* |

#### What other payment methods do You support?

We have learned how to prepare invoices for payment via Checkbox. Each customer has Checkbox login associated with his ID. And we immediately create this payment order in the terminal, with all the pre-filled information. Customer doesn’t need to enter anything manually into the Checkbox terminal. System administrators can see orders in the “Order” menu section. When the client makes a payment, we immediately see for which order the payment was received. Next, we can attach a barcode number to the order, which is passed to the laboratory.

> Our mobile laboratory works around the clock. If you need to do a blood test from 2:00 to 2:30 am at night, you can do it.

Our mobile laboratory works around the clock. If you need to do a blood test from 2:00 to 2:30 am at night, you can do it. We are the only company that has an “urgent PCR” test that we can do within 6 hours. This is the minimum time in Kyiv for which a PCR test can be done. As soon as the test results are ready, the client receives an automatic notification.

| ![img](/images/bogdan-veliev-callab-cto-interview/payments-details.jpg) |
| :---: |
| *Payment details page* |

#### How can customers call for a mobile lab?

Customers can request the mobile lab through the website or by contacting the call-center. We also have a chatbot where the client can fill out his application and send the data directly to our CRM.

#### How long did it take Callab to create such a CRM?

Three people have built a CRM on Corezoid in 3 months.

#### Could You describe, please, in more detail?

Previously, we had something like a CRM based on 1C. But the problem was that the old system could not be connected to anything.

Accountants entered all the data manually, there was no association of payments with the types of medical tests. 1C was clumsy, buggy and did not work properly. Also there are features for the work of field nurses, that needed to be tailored to the smartphone screen.

Now in the smartphone, the nurse sees the planned route, the list of requested medical tests, the list of payments, and any data updates.

In the chatbot there is a “driver” role with its own set of functions. The driver sees planned routes for the day, changes in routes, orders completed during the day, comments on orders. Location coordinates are immediately displayed in Waze navigator.

When the driver has finished the last trip, he just needs to press the “Finish” button and close his shift.

#### What CRM functionality is available to the laboratory?

The laboratory is responsible for doing the medical tests. They have a barcode scanner and Corezoid helps to match data from various sources.

When the scanner reads a barcode, Corezoid instantly finds a client in the database, displaying his name, year of birth, address, and order status. System administrators can also view the archive, history of orders.

#### What technology are You using to build the CRM front-end? All those beautiful buttons, text input fields, checkboxes?

We are using the CDU component of Control.Events. This is a web forms builder. We stopped using 1C solution and cut the cost of maintenance 6x. Also Callab got the opportunity to grow in the number of orders without sharing the profit margin of every order. Besides, Corezoid works faster and allows for a more flexible experimentation.

> We stopped using 1C solution and cut the cost of maintenance 6x

Callab mobile laboratory is a startup. Thanks to Corezoid, we were able to launch CRM from scratch in 3 months. We didn’t pursue the old traditional approach to the software development cycle. Instead we built Corezoid-based MVP, launched into production, and from the very first days began non-stop debugging and improving the system.

> Thanks to Corezoid, we were able to launch CRM from scratch in 3 months

#### What are your plans for the development of CRM?

We add more features for the contact center, work on various kinds of notifications throughout the customer's life cycle, and improve route planning algorithms. We also make a number of improvements for accounting: automatic processing of bills from Checkbox, Liqpay and other sources.

We also work on dashboards and various types of reports: the number of tests per day, the number of routes traveled, a breakdown by employees, for example, to understand how much money nurses earn.

One of the new projects is payment for medical tests through iBox terminals. Customer will approach the terminal, place an order, receive a barcode – and immediately go to the nurse to do the medical test. No need to communicate with a human administrator.

> Our goal is to fully automate as many business processes as possible on Corezoid so that they do not require manual work at all.

*Project team: [Savely Evdomashchenko](https://www.linkedin.com/in/%D1%81%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8%D0%B9-%D0%B5%D0%B2%D0%B4%D0%BE%D0%BC%D0%B0%D1%89%D0%B5%D0%BD%D0%BA%D0%BE-88a80b15a/), [Vyacheslav Dyadchenko](https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%B4%D1%8F%D0%B4%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-21a618176/), [Bogdan Veliyev](https://www.linkedin.com/in/%D0%B1%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD-%D0%B2%D0%B5%D0%BB%D0%B8%D0%B5%D0%B2-9b296019a/?originalSubdomain=ua).*
