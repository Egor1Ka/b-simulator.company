---
date: '2019-09-04'
url: 'vostok-bank-corezoid'
next: 'pumb-begunov'
title: 'Oleg Andreyev, CIO of Vostok Bank: “Corezoid is a circulatory system”'
description: 'Large information systems are like living organisms. If we draw parallels, then Corezoid is most similar to the circulatory system that touches every organ in the body and is connected to all the body cells.'
image: '/images/vostok-bank-oleg-andreev.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'bank'
    - 'api'
    - 'development'
    - 'ios'
    - 'android'
    - 'viber'
    - 'telegram'
lang: 'en'
---


| ![img](../images/vostok-bank-oleg-andreev.jpg) | 
| :---: |
| **Oleg Andreyev, CIO of Vostok Bank** |


#### Oleg, how did your work at Vostok Bank begin?
I came to [Fozzy Group](https://www.fozzy.ua/ua/) in July 2009 as a lead programmer for a loyalty program. It took us three months to move to a new framework, launch a discount program for Fozzy Cash & Carry hypermarkets. Then I joined the [“Vlasny Rakhunok”](https://silpo.ua/about/personal-account) project, a bonus program for Silpo customers. This is the largest loyalty program in Ukraine for now, with about 4.5 million participants.

In 2013, I joined [Vostok Bank](https://bankvostok.com.ua/), for the position of Development Director.

Back in 2013 IT was not so grand-scale in Vostok. It all started when I drew the “world map”. I figured out existing information systems in the bank, what tasks they solved, how they were connected with each other, what technology stack they had, where they were hosted. Back then we mostly adopted the Microsoft philosophy. We used MS SQL Server, C # .NET, ASP.NET, WCF, Analysis Services, Integration Services. However, we did not have any “religious” beliefs concerning Microsoft. We focused on the goals we wanted to achieve. Some technologies are more convenient to purchase from other suppliers. For example, we did not design our own Corezoid but started cooperation with Middleware instead.  

Vostok did not have an IT office in Kyiv in 2013. There was an ABS Development unit with the team of 5 people in Dnipro, and there was a unit with the team of 3 people in Odesa that dealt with card systems. I sat down in the kitchen in the office on Taras Shevchenko boulevard in Kyiv and started planning work on development management. First of all, it was necessary to do something with software products, which were some kind of closed boxes at that time and were uncompetitive. The increasing pace of business growth required other approaches.

Without a competent architecture and without introducing at least basic processes, no development is possible. This applies to many aspects, including interfaces, development stack, integration layer, hosting solutions, and competencies that need to be developed. It’s even worth analyzing the labor market, how difficult it is to fill one or another niche with developers, DevOps. You need to see if the products have any enterprise support. We watch out for non-enterprise solutions because we want to avoid being left one-on-one with the problem in case of an accident. Sometimes incredible mistakes come out, up to core problems at the .NET level, and anywhere, which cannot be recognized by any testers.

#### What did you start developing in the first place?
Our first project - and I believe it was quite successful - was a new [Internet bank](https://my.bankvostok.com.ua/) for individuals. In 2017, we ranked second in the nomination “Best Internet Banking and Mobile Application” (according to [PaySpace Magazine](https://psm7.com/),  trailing only PrivatBank.

I recruited developers quickly enough, and we launched our Internet bank by our own modest efforts (a team of 5 people) in a year. Solanteq, represented by Pavlo Malyshev, helped us with UI/UX and design. I willingly recommend the company. 

| ![img](../images/vostok-internet-bank.jpg) |
| :---: |
| *[Vostok Internet Bank](https://my.bankvostok.com.ua/)* | 

#### How did Corezoid appear in Vostok Bank? 
Eventually, we felt the need to take the development of business processes to another level of abstraction. When most of the business processes are embedded in the code of systems - and there are a lot of them, often “motley” ones, - it is very difficult to integrate and manage business processes in such a heterogeneous environment.

At first, we thought we needed BPM. We researched the market, tried several solutions, got a certain bundle of knowledge, and finally decided on Corezoid. It was important for us to find a Process Engine which would connect the systems and accelerate time to market, introduction of new products to the market. We and the Business have strongly integrated into each other to achieve a clear understanding of the tasks we solve.

![img](../images/vostok-bank-andreev-danylenko-1.jpg)

I understand the concept of Corezoid very well. Large information systems are like living organisms. If we draw parallels, then Corezoid is most similar to the circulatory system that touches every organ in the body and is connected to all the body cells.

Each IT system in the bank has its own level of responsibility, it encapsulates its functionality and makes APIs in the form of services and their methods. If you have a designer, you can link up the necessary systems like by wires and get a banking product. Agility in realization is very important.

#### Tell me, please, what did you manage to do quickly on Corezoid?
We noticed that the young generation and the Digital-active audience have an established pattern of using messengers. They chat all the time. They can as well use banking services in the chat: send money, top-up a mobile phone, block a card.

We allocated modest resources to start employing Corezoid to understand its capabilities, and quickly enough we managed to get ready-made functionality for chat bots.

Today, dozens of services are already available in the Vostok Bank’s chat bot: communication with a contact center operator, information on currency exchange rates, the nearest branches, and ATMs, card activation, viewing the card balance, statements, changing the pin code, topping-up a mobile phone, P2P transfers and other services.   

| ![img](../images/vostok-bank-viber-bot-main-menu.jpg) | ![img](../images/vostok-bank-viber-bot-select-card.jpg) |
| :---: | :---: |
*Chat bot of Vostok Bank in Viber*

At first, we saw our bot as a toy, but then we realized that it was in demand, messengers develop, become more complicated, give an ever-increasing set of opportunities. In addition to Viber, we launched the bot in [Telegram](https://t.me/BankVostokBot) and are planning to integrate it with Apple Business Chat soon.

I’ll tell you about another interesting opportunity. Any operation performed by the user through the bank’s digital channels should be as simple and convenient as possible. When a customer makes additional efforts, copes with difficulties, overcomes obstacles, looks for buttons, he receives negative emotion, which is always bad.

When we started using messengers, we were faced with the problem of a two-factor authentication. It does not make sense to send an OTP password via sms for authorization in the chat bot because the person’s phone is already in his hands and cannot be the second factor. We have included a separate OAuth information system in the architecture, which gives a simple answer: we know you or we don’t know you. Thus, we managed to make authorization in the bot via PIN or biometrics in the mobile application in a couple of clicks.

| ![img](../images/vostok-bank-viber-bot-share-phone.jpg) | ![img](../images/vostok-bank-viber-auth.jpg) |
| :---: | :---: |
| Viber-bot | Mobile app |

We are also working on the new [iOS](https://apps.apple.com/ua/app/%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B1%D0%B0%D0%BD%D0%BA-%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D0%BA/id1198474018) and [Android](https://play.google.com/store/apps/details?id=com.mobile.vostok&hl=en) versions of the Vostok Bank mobile application. There are now many players on the market who make applications, and everyone is trying to compete. There is a certain gradation: some banks serve mostly retail, some work with selected segments, and some go into co-brand programs.

We stake on the growth dynamics. A customer should be convinced that his bank is in step with the times. And if some new service like Apple Pay appears, he must be sure that his bank will introduce it quickly, without keeping him waiting.

We want people to choose us because we are the best. Being the best is a complex issue. It means being the best in a set of specific manifestations: functionality, tariffs, commissions, UI/UX, customer experience.

In the end, it all comes down to at what cost and how simply, fast and successfully the customer performed this or that operation, how he interacted with the bank, how much dopamine and other feel-good chemical his brain released after he contacted with Vostok Bank.

![img](../images/vostok-bank-andreev-danylenko-2.jpg)

The philosophy of our team is based on the principle that our service should be evaluated as superior not because we consider it to be such or because our partners have praised us but because it is appreciated by our Customers. It is more interesting to work at Vostok Bank than in outsourcing. Vostok is in some sense an IT product company. When developers, analysts and testers understand that they are doing useful things that are used by hundreds of thousands of people, a product is then made much faster, easier and better, and becomes popular among users.

#### What do you do for the development of your team? 
As a team, we never stop learning, we develop, implement IT solutions, monitor the product and technology market, and thus improve. We often conduct team building activities and spend time together outside the office. We go hiking in the Carpathians, go fishing, skiing, skateboarding.

We also participate in an annual sports event held for our bank employees in Odesa, which includes football, volleyball, table tennis and other competitions. It’s a great event where emotions run really high! All in all, our working process does not come down only to office work. :) Although in the office we feel comfortable as well.

| ![img](../images/vostok-bank-teambuilding.jpg) |
| :---: |
| *Sports competitions in Vostok Bank* |


#### Oleg, tell me in short, as a resume, what is the point of your work?
We are committed to making cool products for our Customers. There were times when we fought for the right to be chosen by them, then for their wallets, then for their minds. Now we are fighting for their hearts :)
New event
