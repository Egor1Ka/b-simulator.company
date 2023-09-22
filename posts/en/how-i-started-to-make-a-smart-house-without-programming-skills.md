---
date: '2015-09-30'
url: 'how-i-started-to-make-a-smart-house-without-programming-skills'
next: 'pumb-begunov'
title: 'How I started to make a smart house without programming skills'
description: 'I want to describe the operational logics of gadgets with the help of the Corezoid cloud-based operating system, which does not require knowledge of software languages and allows to make virtually any process.'
image: '/images/smart-house.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Startups'
tags:
    - 'smarthome'
    - 'iot'
    - 'integration'
    - 'api'
    - 'lowcode'
    - 'programming' 
lang: 'en'
---

Today most people have heard about smart houses – for about ten years they have been widely trumpeted internationally. In today’s world there are hundreds of producers of various gadgets and equipment and it seems that the “Internet of things” will become the prime trend of the next ten years. Recently I decided to find out what smart houses exist now, how much they cost, and how I can personally assemble such a system in my Kyiv two-bedroom apartment.

I found out quickly that there is no unified standard or "model" producer of smart devices in the world and I will have to unify several dozen gadgets of different producers into one ecosystem. “Nest” produces the best thermostats and cameras in the world, the Chinese produce excellent receptacles with lots of useful features, ABB and Schneider produce light bulbs – I can name but a few, so they will be discussed in the next article. The most important thing is that each producer offers its own software for managing its gadgets and there is no simple solution how to manage them centrally.

I started to look for ways how to unify the best gadgets of a particular class into one unified system and "communicate" with them via smartphone. I think I’m a sort of “advanced user”, not a developer, and I hope that my real-life experience will be interesting for everybody who takes an interest in smart houses and any average user will be able to repeat my experience.

## A little about hardware
Before we proceed to particularities I want to share the results of my Internet-research and inquiries of people "in the know". For a start, I had to make up my mind as to what I was expecting from a "smart house". The matter is that in the West and post-Soviet countries this notion is interpreted in different ways. In Europe and the USA people pay high prices for public utilities; therefore, they are obsessive about all sorts of efficiencies. That’s why for them a smart house is a system which controls every kilowatt consumed and saves money spent on electricity, heating and water supply.

In the countries of Eastern Europe the situation is a little bit different. First of all, a "smart house" means comfort and then economy. In Kyiv electricity costs little, as does hot and cold water, that is why I don’t need such focus on efficiency in my bachelor’s two-bedroom apartment. But a video surveillance system with motion sensors, light bulbs controlled from the sofa, receptacles for switching on and off the air conditioner to maintain a stable temperature in the room, household appliances operating as scheduled, controllable curtains and other similar gadgets are just what I need.

| ![img](/images/smart-house.jpg) |
| --- |

Spending two days for study of this issue I identified three variants for creation of a smart house:

1. Pay for the services of a specific company and not get to the bottom of this matter
2. Buy all necessary appliances and adjust them on the basis of either fully-featured server or Arduino/Raspberry PI
3. Personally develop a Sender messenger-based application for smart house control and spell out the principle of operation for gadgets on the cloud-based Corezoid Operating System.

Now I’d like to discuss each variant and explain the logic of my choice.

## Case 1. Pay and be free
According to the opinion of the majority of experts interviewed by me, the best way is to design a "smart house" at the stage of construction or repair. One should do this in order to put all necessary cables in the wall, bring in standby power and water supplies and equip pipes and boilers with sensors and so on. This is the most expensive option but at the same time, a functional one. Here is a shortlist of possibilities of this variant:

- control of temperature in the room and control of lighting depending upon the weather, time of day and presence of house owners
- automatic opening and closing of curtains, louvres and lifting gate
- switching on and off the floor and stairs heating systems, garage access road and lawn watering
- control of operation of all electric appliances, engineering systems and electricity saving
- prevention of gas and water leakages
- remote heating of sauna or bath
- transition to standby electric energy sources
- surge voltage and gas leakage protection
- catchpit filling sensor and drainage clogging sensor
- fire-alarm system
- remote control of video cameras, smart security system

Such a system requires serious design and development of the concept of a "smart house", which with no outside help is an impossible task. As I have already mentioned above, in the USA and Europe equipment manufacturers develop solutions for each specific case and control the process of installation. "Turnkey" prices start from several thousands of Euros and depend upon room space and number of sensors used. Click this [link](http://www.buildingtechnologies.siemens.com/bt/global/en/buildingautomation-hvac/hvac-products/home-automation-system-synco-living/about-synco-living/Pages/About-synco-living.aspx) where you can read about Siemens solutions. Similar complexes are also offered by IBM, Bosch, Cisco, Panasonic, Logitech, ABB, Philips and other brands.

| ![img](/images/smart-house-2.jpg) |
| --- |

Unfortunately, in Ukraine this variant works only in some cases. You can buy and order all necessary equipment but your "smart house" will be designed and built by a company having no relevance to the manufacturer. It means that I will have to rely only on my luck and professional competence of builders. I know firsthand about varying quality of builders and in the case of a "smart house" – laziness multiplied by lack of knowledge may lead to the most deplorable consequences. Anyway, this variant does not suit me – I have already had my apartment repaired so I want to integrate "smart house" technologies in my current apartment and not deal with renewal of communications.

## Case 2. Chinese smart house
In China you can buy absolutely everything – ranging from keychain-spies (inexplicably in Ukraine you can be sent to prison for having such a thing) to atomic batteries. At [alibaba.com](https://alibaba.com), [aliexpress.com](https://aliexpress.com), [dx.com](https://dx.com), [taobao.com](https://taobao.com) and other similar websites you can buy both turnkey systems and their separate elements. The majority of Chinese gadgets are designed for integration into existing houses and you don’t need to replan the house for installation of such gadgets.

To describe the "packaged solution" I’d like to mention the "smart house" designed by Meizu. This is a combination of gadgets of various companies unified by one LifeKit software solution. They are RyFit weighing scales, X-Light Plus lamp, Air Cube air cleaner, receptacles and other appliances. Recently Xiaomi has also produced a similar system.

| ![img](/images/iot-smart-devices-home.png) |
| --- |

When it comes to single devices, everything is much more interesting here. The Chinese analogue of Kickstarter – [Demohour](http://www.demohour.com/) regularly provides simply amazing things. Recently, a [Smart Plug K](http://www.amazon.com/Intelligent-Smart-Wireless-Android-Smartphone/dp/B00MWR6ZY4/ref=sr_1_3?ie=UTF8&qid=1411383184&sr=8-3&keywords=Smart+Plug+K) "smart receptacle" set a record for Chinese crowdfunding and raised about $270,000. This receptacle supports all popular kinds of plugs, remotely switches on and off any appliances, supports access via 3G and Wi-Fi and serves as a Wi-Fi-repeater for signal amplification. The Chinese company BroadLink also offers a good range of gadgets. At [Amazon.com](http://www.amazon.com/s/ref=sr_nr_p_89_0?rh=i%3Aaps%2Ck%3ABroadLink%2Cp_89%3ABroadlink&keywords=BroadLink&ie=UTF8&qid=1411302669&rnid=2528832011) you can buy a set of necessary gadgets and assemble your own version of a "smart house" with their help. Click these links ([1](http://www.ferra.ru/ru/digihome/review/SmartHome-Start/#.VpT6-1lOGM9), [2](http://www.pcadvisor.co.uk/how-to/digital-home/how-make-your-home-smart-home-robot-3605663/), [3](http://www.cheatsheet.com/gear-style/5-devices-that-turn-your-house-into-a-smart-home.html/)) where you can read about other gadgets.

| ![img](/images/smart-plug.jpg) |
| --- |

The disadvantage of this option is in the fact that the market cannot provide any unified simple solution which would allow combining all the gadgets available in the market into one unified system. So you cannot have it both ways – either you buy a set of gadgets from one manufacturer or buy gadgets from different brands and manage each of them separately. The bad thing about the first variant is that there is no unified standard or "model" producer of smart devices in the world and the bad thing about the second variant is that managing each gadget separately discords with the principle of a smart house.

Habrahabr provides [descriptions](http://habrahabr.ru/search/?q=%5B%D1%83%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%5D&target_type=posts) of numerous methods how to make a "smart house" on the basis of Linux-based systems, Arduino, Raspberry PI or full-featured servers with no outside help. This is an excellent solution but I’m more so an advanced user, not a developer, so I can hardly bring such schemes to life. I decided to find a way which requires no specific knowledge.

## Case 3. Do it yourself
In the process of searching, I found a development created by Ukrainian programmers – Sender messenger. The operational concept of Sender is similar to Chinese WeChat. Sender messenger allows creating fully-featured mobile applications with the help of a simple form designer. This form designer is far from being ideal but something can be made with its help. At the output I need an "application in an application" which receives data from devices through an in-built API and displays it into a smartphone screen. I want to describe the operational logics of gadgets with the help of the Corezoid cloud-based operating system, which does not require knowledge of software languages and allows to make practically any process automatic, including behaviour of devices in smart houses.

| ![img](/images/sender-admin-interface-form-builder.png) |
| --- |

In the next article, I will describe my first step, adjust a Google Nest thermostat and Lego remote-controlled robot with a smartphone on board. At the same time, I will illustrate the architecture of my smart house and which devices it will have.

