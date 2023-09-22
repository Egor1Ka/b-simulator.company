---
date: '2015-12-09'
url: 'amazon-button-and-corezoid'
next: 'pumb-begunov'
title: 'How Amazon’s Dash Button works with Corezoid'
description: 'The process of configuring took a little over an hour: we drew a simple front end in the Sender messenger and described the button operation logic based on the Corezoid operational system.'
image: '/images/amazon-button-tide.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Startups'
tags:
    - 'aws'
    - 'messenger'
    - 'integration'
lang: 'en'
---

In October this year we went to Las Vegas to attend the Amazon re:Invent conference and brought back one of the latest innovations from Amazon – a ‘magic’ Dash Button. Amazon started sales of this wonderful gadget just a month ago. It is designed help to restock various household goods such as diapers, washing powders, detergents and so on just by one touch of the button. The button can be mounted on any flat surface and configured using a linked mobile app.

Pressing the button sends your order to Amazon and the next morning a courier delivers the goods at your door, so everyone is happy! But what is the use of this gadget in Ukraine?!

| ![img](/images/amazon-button-tide.jpg) |
| --- |

People at Amazon honestly admit that they really have no idea how people will use this button. Ordering household goods is just one of its features, while the button’s API is open to third-party software and, in fact, it can be configured in any manner you fancy. At first, we wanted to adapt it for Privat24, but then we got a different and a more amusing idea.

Oleksandr Vityaz, Deputy Chairman of the Board at PrivatBank, reaches out to his assistant more than a dozen times a day with requests such as: to bring tea, to come to his office or to pick up visitors. Do you remember the story about a programmer who automated all aspects of his life starting with excuses for his wife and ending with formal replies sent to boring customers? We weren’t born yesterday either! Why keep sending the same chat messages or calling our secretary’s mobile? Everything can be done easier and with more fun.

| ![img](/images/comics.jpg) |
| --- |

We decided to configure the button in such a manner that, depending on the way it was pressed, the software would send one of three commands to Olga: "Tea", "Come" or "Pick up the visitors". The process of configuring took a little over an hour: we drew a simple front end in the Sender messenger and described the button operation logic based on the Corezoid operational system.

| ![img](/images/amazon-corezoid-architecture.png) |
| --- |

Sender is our own messenger allowing to create robots using visual programming techniques. To create a front end, we registered the company in Sender, then entered the Business section in the messenger itself and added the company to our contacts.

| ![img](/images/sender-admin.jpg) |
| --- |

After that we opened Corezoid, found the section with our company name (it was added automatically after we added the company) and created a process responsible for exchange of messages between Olga and Oleksandr. The finished process is as follows:

| ![img](/images/corezoid-amazon-button-integration.png) |
| --- |

Green nodes mark the start of the process, while the blue ones describe its current status. There are three types of the button pressing: a single push, a double push and a long push. For each of the pushing options a separate branch process is created. After sending a command, Olga receives a chat message asking her to do one of three actions. She presses the Coming key and Oleksandr gets the Olga is on her way message in the chat, so he knows that soon his request will be executed.

Special attention should be paid to the front end creation. The visual part of our application was created in the Form Designer embedded in the Sender messenger. This is how the button drawing process looks like. To add a form, drag the button with the left mouse button and give it a name. We have drawn other visual elements in a similar way. As well as messages for Oleksandr telling him Olga has been informed about the task.

This is an unusual use we found for the new product from Amazon. Oleksandr was so pleased with this ‘god mode’ that he started drinking by 30% more tea and receiving twice as many visitors! Olga's dream to lose a couple of kilograms came true and our tea suppliers are also happy.

| ![img](/images/god-mode.jpg) |
| --- |

We still have not figured out how to use this button in a ‘normal’ way – thus far we have been coming up with only crazy ideas. For example, we can ‘teach’ the button to call a taxi or order a pizza at a single touch, or control some clever gadgets or something else.

Maybe you could think of something funny and at the same time useful?
