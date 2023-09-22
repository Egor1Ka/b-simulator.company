---
date: '2015-10-12'
url: 'p2p-money-transfer-corezoid'
next: 'pumb-begunov'
title: 'Why Can’t Global Banks Introduce a P2P Money Transfer'
description: 'Six months ago I needed to receive a money transfer from the United States. I sent my partner an SMS with the number of my dollar bank card and started waiting for the money'
image: '/images/p2p-money-transfer.jpg'
category:
    - 'News'
subcategory:
	- ''
tags:
    - 'finance'
    - 'bank'
    - 'visa'
    - 'mastercard'
lang: 'en'
---

Six months ago I needed to receive a money transfer from the United States. I sent my partner an SMS with the number of my dollar bank card and started waiting for the money. The next day my partner called me and said that I had to provide him with complete bank account details, namely: beneficiary bank, correspondent bank, beneficiary’s bank account at correspondent bank, bank account number and SWIFT code. When I provided him with all this, he was shocked at the sheer volume of information and ultimately he sent the money using Western Union, paying a large charge.

I was amazed – Ukraine is hardly Silicon Valley but for decades we have performed card-to-card transfers as a fundamental banking service. Even my grandmother uses such services!

I thought about this issue – if financial institutions can cope perfectly well with account-to-account transfers, why do card-to-card transfers remain such an issue for them?

The root of the problem is that banks are some of the world’s more conservative institutions and their software often uses code written about 20 years ago. To introduce new functions to such software is a real pain in the neck for managers and heads of institutions. And this is understandable. Not even the world’s greatest computer programmer could solve all the issues linked to a typical bank’s Internet banking software code and processing centre code, which may consist of half a million lines. No wonder so many innovations face long and complex implementation processes. One generation of software developers is hindered by the work of the previous generation and hundreds of legacy issues mean improving services or rolling out new ways to enhance customer experiences is rendered impossible. The whole process reminds you of the labour of Sisyphus – an ancient Greek king who was punished by the Gods and had to roll an immense boulder up a hill, only to watch it roll back down time after time.

Several years ago, Visa and MasterCard allowed banks to connect to their p2p payment platforms and opened their API. However, the European and American markets were not ready for such a service. Making changes in their processing structures and setting up a platform for p2p transfers proved to be a long and expensive task. The issue is that the software for processing centres is developed by third-party companies and banks become completely dependent on their services. Thus, a seemingly elementary procedure of sending a banking card number to a server, including its period of validity and name of the beneficiary, in practice turns into a series of complicated tasks with unreasonable waiting times.

Many unhappy experiences show that banks need to take into account seemingly endless important nuances when making a change to payment systems – which card holders can make transfers, what fee should be charged, what limits are set by financial regulators, whether the recipient of funds is named on an international “wanted list”, and the list goes on! All this needs to be configured, tested, then reconfigured and tested and a year or two later the service can be introduced for users. To better describe these difficulties, I will give an example. Development and implementation of one HTML page of payment verification using 3D Secure took Ukrainian PrivatBank six months. Six months only for one page!

Banks cooperate with developers of processing centres with difficulty – Visa and MasterCard regularly introduce new requirements for financial operations. Banks must meet the specified deadline for these requirements. Non-compliance by even one day means a penalty. Improper performance means a penalty. The net effect of all this is bank CEOs, managing billions of dollars, are forced to line up like students at a cafeteria and wait for the right technical solution to be written.

PrivatBank is approaching this issue in an innovative way. We described the logical operational scheme of p2p payments in the Corezoid cloud-based Operating System used for automation of numerous internal processes of the bank. It took several months and then the problem was solved for once and forever. We still pay processing developers but most changes are made by us ourselves. Recently MasterCard and Visa required to specify beneficiaries’ full name when making a direct transfer. Our business-analytics added this function in half an hour. It’s scary to think of how much time it took previously! Moreover, today we connect to API MasterCard and soon will cooperate with it directly without the interference of a processing centre.

I will say more – we are ready to share our experience and projects with other banks and tell them how to implement a p2p payment system with the help of Corezoid and how to connect to MasterCard MoneySend, even if it is not supported by their software. Today we pay only for use of cloud-based Operating System capacity and this is cheaper than making changes to our processing system.

Corezoid in real time reports to our managers on all details of p2p payments such as numbers of refusals, their reasons and the amounts of transfers. You will not believe how happy our managers are when looking at the schedule of revenues! Our staff consists of several hundred employees but for many years we had no time to create such dashboards. However, today we see what problems users are having with our services and often solve these problems in real time. I would say this is really cool. Two-dozen software developers who previously day and night worked on processing today are busy with more important projects. They were replaced by three business analysts, and even this much smaller team copes better with day-to-day challenges than before.

Source: [http://letstalkpayments.com/](http://letstalkpayments.com/)
