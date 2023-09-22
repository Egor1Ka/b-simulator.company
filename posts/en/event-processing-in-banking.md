---
date: '2016-08-15'
url: 'event-processing-in-banking'
next: 'pumb-begunov'
title: 'How a new digital core can help banks with the real-time processing of millions of events'
description: 'A regular online shop has usually just a few employees loaded with a variety of duties. "Nobody is free" can be heard from the director, or more frequently "it’s necessary, but there is no one to do it".'
image: '/images/igor-remez.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Small and medium business'
tags:
    - 'bank'
    - 'eventprocessing'
    - 'realtime'
    - 'digital'
    - 'core'
lang: 'en'
---

| ![img](/images/igor-remez.jpg) | ![img](/images/pavel-korchagin.jpg) |
| :---: | :---: |
| **Igor Remez** | **Pavel Korchagin** |
| Deputy Head of IT at PrivatBank | Head of Engineering at PrivatBank |

Each day, thousands of a bank’s clients will perform financial transactions: making deposits, withdrawals, moving money between bank accounts, etc. Banks must also perform certain daily calculations that are required as part of regulatory compliance, including monitoring assets and reporting key metrics. All totaled, a bank today is performing an ever-growing number of daily transactions and calculations that reaches into the millions – a burden that’s increasingly challenging for traditional systems to bear.

Banking software designed in the latter half of the 20th century is not a good fit in today’s digital, real-time era – but yet it’s still prevalent. Bank personnel might need a report to be immediately available online, not at the end of the week. A banking customer may need to know the exact amount of funds in each of her accounts at a certain moment, but the bank’s systems may not be able to deliver that information with real-time accuracy. This customer would expect the same balance information whether using a mobile banking app, an ATM, or the bank’s call center; however, because these use three siloed pieces of software from different vendors, this may not be the case.

To address these issues, banks often hire programmers to hardcode new capabilities into their systems, or buy expensive software solutions and again add code to make them cooperate. The amount of code grows exponentially, and so does the complexity and cost of maintenance.

It’s our opinion, though, that a bank’s best choice for gaining needed flexibility is to install a new digital core at the heart of their systems. In the systems used by most banks today, data is stored in an SQL database. Our approach is to describe the whole company as a set of states and processes, and then start working with explicit states, not data hidden in the database.

We’ve found that a digital core allows for orchestration and simultaneous, parallel processing of computational operations. Imagine each banking software system is a warehouse where account data is stored. In traditional systems, all data is stored in one big block, and the warehouse has a single worker who must retrieve the data. How fast that single worker can run is how long a processing task takes. With a parallel processing digital core, however, it’s like each account at the bank has its own worker. Whereas traditional systems allow for updates to be calculated once per day, a digital core makes it possible to perform the same updates nearly instantly.

For a real-world example we can speak to first hand, we at PrivatBank have solved our account processing issues by utilizing a digital core provided by the Corezoid Process Engine. With the platform, account data is stored not in an SQL database but in smart nodes, allowing us to use a single data row for all business and regulative calculations, and reducing the necessary size of our data storage by a factor of ten. Every kind of banking account and type of transaction that might occur is now associated with a pre-defined process. Most dramatically, our bank’s “daily summation” task – which used to take up to six hours for the old system to complete – is now processed and finished within just four minutes.

Beyond simply meeting modern banks’ basic data calculation needs, the newfound processing capacity offered by a digital core presents a host of new advantage. A digital core can provide value by resolving issues between disparate software solutions. For example, email, SMS, and instant messenger programs used for client communications and account management (even if coded in different languages) can be made to function in harmony when run through a digital core, simplifying life for bank workers who no longer have to wrangle different pieces of software.

Real-time event processing means systems can offer real-time dashboards, generate reports flexibly, and deliver account information in an immediate, synchronized manner across all bank channels, from various branch locations to call center, web and mobile interfaces.

And because a digital core allows calculations to be performed on all of a bank’s processes quickly and simultaneously, bank managers have new capabilities to run projections and explore new development strategies. Say a bank manager wanted to investigate what would happen if the bank offered a new account product paying a certain interest rate with the goal of driving new business. With a digital core, the manager could make instant calculations and view forecasts into the near future, quickly testing various scenarios and enabling informed, data-driven decision-making.

One truth that all future projections in the banking industry will discover: the demand for real-time event processing will only increase going forward. Banks that make the move to a digital core are not only meeting their needs today while preparing for the future, but also gaining the foresight to navigate that future more adeptly.

Source: [http://internationalbanker.com](http://internationalbanker.com)

## About PrivatBank
PrivatBank is the leader of the Ukrainian market and one of the eight largest banks in Eastern Europe. PrivatBank provides services for more than 25 million clients. According to GFK Ukraine research of banking services for individuals, as of the end of 4Q2015, 48.4% of customers of Ukrainian banks used PrivatBank services and more than every third Ukrainian (39.3% of respondents) considered PrivatBank as their main bank. At the moment,  Over 10 million customers use PrivatBank's online banking platform, Privat24; and over 5,5 million clients use its mobile version.

## AWS benefits for PrivatBank
**Using AWS we can solve the following problems:**

– readiness to handle user load bursts;

– a longer period for approval and purchase of equipment;

– licenses for virtualization system;

– operating expenses for infrastructure maintenance;

– difficulties in the rapid allocation of the desired amount of resources and automation of deployment of a number of multicomponent clusters for simultaneous test and debugging of a variety of different user load profiles;

– infrastructure helping to comply with various safety standards.

Transfer of domain names to [Amazon Route53](https://aws.amazon.com/route53/) has allowed us to easily isolate and distribute the traffic of users from various countries via a Geolocation Routing Policy.

Corezoid uses [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/), which automatically distributes incoming traffic between multiple [Amazon EC2](https://aws.amazon.com/ec2/) instances.

AWS CloudTrail and AWS Config help to quickly track any changes in the production environment and maintain a high level of security.

The key components of Corezoid are: [Amazon Elastic Compute Cloud (Amazon EC2)](https://aws.amazon.com/ec2/), [Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/), [Amazon Virtual Private Cloud (Amazon VPC)](https://aws.amazon.com/s3/), [Amazon ElastiCache](https://aws.amazon.com/elasticache/), [Amazon Simple Notification Service](https://aws.amazon.com/sns/), and [Amazon CloudFormation](https://aws.amazon.com/cloudformation/) for allocation and deployment of a cluster stack of the required size on demand.

Using AWS CloudFormation, we are able to significantly reduce the operating costs for infrastructure management, as all the key elements are defined as code. Developers can now run dedicated clusters to test the new features.

The use of various availability zones ensures continuing normal operation even in the event of data centre failure.

[Amazon Direct Connect](https://aws.amazon.com/directconnect/) greatly facilitates the construction of complex hybrid solutions based on Corezoid, allowing to provide the most demanding customers with a stable and high-speed data transmission channel, minimizing the delays between systems in their own data centers and AWS cloud.

Using [Auto Scaling](https://aws.amazon.com/autoscaling/), we were able to improve the quality and profitability of individual components, such as custom code execution service (Erlang, JS) in the individual process clusters, while paying only for the computing resources and storage resources that they utilize.
