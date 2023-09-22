---
date: '2016-04-12'
url: 'how-corezoid-helps-agribusiness'
next: 'pumb-begunov'
title: 'Cloud technologies backed by Corezoid bringing agribusiness into the modern era'
description: 'The IT industry and agro-industrial complex are among the few Ukrainian business segments which were able to survive the crisis. Farmers and developers appeared to be in the highest demand among Western customers and have found ways to export their goods and services.'
image: '/images/agricultural-business-3.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'core'
    - 'solution'
    - 'technology'
    - 'cloud'
lang: 'en'
---

The IT industry and agro-industrial complex are among the few Ukrainian business segments which were able to survive the crisis. Farmers and developers appeared to be in the highest demand among Western customers and have found ways to export their goods and services. And what's interesting innovations in agriculture are on a par with that of many technology companies. New technologies and cloud solutions for growing and harvesting are extensively used by farmers. Oleksandr Bondik, Deputy General Director of ["Business-Agrocentre"](https://acplus.com.ua/), told us about the procedures for field-located machinery monitoring assistance, fertilizer-related machinations prevention and machinery fuel accounting, provided by cloud operating system Corezoid.

When I joined the company, I faced a number of problems: document forgery by agronomists and machine operators, theft of plant protection products, fuel draining, and more. The training level of agricultural employees was very low; information from the fields was transferred to dispatchers on sheets of paper and appeared in the system only two weeks later. It was impossible to get operational and truthful information about what was happening in the fields. This was bad for profits, and I started looking for solutions.

| ![img](/images/agricultural-business-1.jpg) | 
| --- |

First of all, we implemented the 1C accounting system, a GPS monitoring system and video surveillance technology with the possibility of vehicle registration plate detection. We set up all the necessary sensors in more than 1000 vehicles, and immediately faced a new problem. All of these systems are working fine by themselves, but we needed to spend a lot of time in order to collect and analyze the information they provided. We calculated that we would need to hire 20 people in order to obtain comprehensive monitoring and analytics! We quickly realized that this is a road to nowhere and started thinking of ways to automatize the whole thing. The search took us a year, we considered a dozen different software options, and one day we were advised to use the Corezoid system.

## Practical implementation

The main objective was to reduce the number of errors, and to make sure that all the information came into our database in the course of the day. Also, we had to establish control over the implementation of work in real time and to be able to keep track of any abnormalities.

We started with writing a mobile application for the operational control of equipment. We had two options: to write our own application or to use a combination of Corezoid and Sender. We decided to take the latter option and now use it to alert of any emergency situations.

| ![img](/images/agricultural-business-2.jpg) | 
| --- |

What do "abnormal situations" mean in agribusiness? Firstly, it can be the loss of vehicles on duty. If we lose a GPS signal for a long time, we will send a message to our engineers who are engaged in the repair of these modules. Another abnormality is movement of transport assets off duty. If a vehicle moves somewhere without our knowledge, we will immediately address this movement and send an alarm signal to the smartphones of responsible employees. Also we launched (in test mode) a fuel draining detection system.

| ![img](/images/agricultural-business-3.jpg) | 
| --- |

It works in the following way we look at the fuel consumption rate and, if the transport is at a stop and fuel consumption still persists, then draining is occurring and we should take appropriate measures.

| ![img](/images/agricultural-business-4-1.png) | 
| --- |

We also have an extra alert if we commissioned the transport asset to another company, but they did not put it on duty. Delays with agricultural machines are very damaging, so the system immediately sends a notification to the central server.

| ![img](/images/agricultural-business-5.jpg) | 
| --- |

It sometimes happens that the transport asset is already working in the field, but the person responsible forgot to put it "on duty". In this case Corezoid analyzes the data, and if the person made a mistake it will re-send a request form. And if that person does everything right, then Corezoid informs our API and automatically creates an order. In the nearest future we are preparing to launch map-related control of transport movements.

| ![img](/images/agricultural-business-6-1.png) | 
| --- |

Another option available to us lies in the ability to see what transport assets are located nearby. When I enter the field, it is very difficult to sort out what is going on around me. I open the map and see the labels of transport assets. We will further learn how to run routes to that transport.

## How it works

We monitor any unfolding emergency situations using our own software. Our software for the most part is based on Linux Red Hot Enterprise, PHP and MySQL or PostgreSQL databases. Once we detect any abnormality, Corezoid creates a task with a note of necessity to notify someone. We are provided with 3-4 levels of alerts for each incident. If no one has responded on the first level, then the second level is notified, and so on until the problem is solved.

| ![img](/images/agricultural-business-7-1.png) | 
| --- |

When we need to solve a problem, we send an SMS or push-notification to the person, give him some time to react, and then send information up the chai

| ![img](/images/agricultural-business-8-1.png) | 
| --- |

It took us about a week to create the first application SMS messaging system. The rest of the software was written in the course of a few months. We were among the first users of Corezoid and initially we had a lot of questions and challenges. For example, Corezoid has floating IP, so it was difficult to properly configure firewalls. But a month later we learned how to fully handle the system and haven't needed to contact customer service since then.
