---
date: '2016-09-19'
url: 'how-can-an-online-shop-automatically-remind-repeat-customers-using-corezoid'
next: 'pumb-begunov'
title: 'How Can an Online Shop Automatically Remind Repeat Customers using Corezoid?'
description: 'A regular online shop has usually just a few employees loaded with a variety of duties. "Nobody is free" can be heard from the director, or more frequently "it’s necessary, but there is no one to do it".'
image: '/images/remind-repeat-customers-scheme.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Small and medium business'
tags:
    - 'ecommerce'
    - 'crm'
    - 'automation'
    - 'core'
lang: 'en'
---


**Corezoid user Viktor Suhoniak shared his experience with us. Viktor automated reminders to regular customers of his online shop. Below is the case description Viktor sent us.**

A regular online shop has usually just a few employees loaded with a variety of duties. "Nobody is free" can be heard from the director, or more frequently "it’s necessary, but there is no one to do it".

Every smart director understands that if you nicely remind the customer that he is running out of goods, that it:

- increases the probability of receiving an order,
- increases the frequency and predictability of purchases.

In terms of money, it may provide up to a 20% increase in sales even with the same quantity and range of goods. Almost money from thin air!

**However, what is obvious is not always so easy. It involves a lot of running around.**

1. You need to remember each order of each Customer,
2. Remember (calculate) the terms of replenishment for each type of goods for each Customer,
3. Collect the goods for which deadlines have come in carts in a timely manner, and
4. Send reminders

And it would be good not only to send a reminder but also make sure that the Customer did not ignore or forget it and responded in a proper way. It’s a challenge, isn’t it?

So, this project appeared as a result of a conversation with a director of an ordinary online shop.

### And the director said:

– Is it possible to send reminders to Customers without burdening employees?

### What we produced

We created a solution which we named "Service Care". It solves the aforementioned issue perfectly!

### How it is designed:

- the online shop works on CMS Shop Script. This program is used for keeping orders, payments and to add new goods. New customers are also entered here.

- it turns out that we need a module linking CMS Shop Script and Service Care. We had to implement it, and Corezoid does this ideally.

- Service Care works as a set of specialized web services.

### How it works:

- a new Customer order is made in CMS Shop Script. After its execution, the order information, via a communication module, gets into the Service.

- in the Service, the order is parsed into separate items, and the date of the reminder is set for each type of good. The date calculation algorithm is a function of the Service.

- On Mondays, the Service checks reminders and collects the necessary ones in Customer carts.

- A notification email with a link is sent to the Customer. The Customer follows the link and sees a predictive order prepared for him.

- If the Customer agrees with the order, he presses the "Confirm" button. A new order is created, and a letter to call the Customer about the new order is sent to an operator of the online shop. The call generates an additional sale.

- If the customer wants to postpone the purchase, he clicks the key "Add to Wishlist". The Customer cart is broken up and reminders for goods are reassigned.

- a separate scenario deals with the situation when the Customer:
1. did not open the letter,
2. opened the letter but did not follow the link,
3. followed the link but did make a decision etc.

### How to use it:

– to connect to the online shop engine

– to set the reminder date calculation algorithm

– to set the mailbox service

– to set the operator reminder mechanism

– to set up analytics (if necessary)

### What is under the hood?

| ![img](/images/remind-repeat-customers-scheme.jpg) |
| :---: |
| **System components connection chart** |

### How does it look like?

| ![img](/images/online-shop-automatically-remind-repeat-customers.jpg) |
| :---: |
| **Corezoid Process** |


| ![img](/images/remind-customers-email.png) |
| :---: |
| **Email to client** |

| ![img](/images/prepared-order-email.png) |
| :---: |
| **Predefined Customer Cart** |

---

Case creator: Viktor Suhoniak, sanap@yandex.ru. 

