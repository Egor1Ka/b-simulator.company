---
date: '2015-12-29'
url: 'smart-house-without-programming-skills'
next: 'pumb-begunov'
title: 'Smart house without programming skills'
description: 'I have found a solution that would allow me to combine best-of-breed gadgets into a single system and to "communicate" with them via a smartphone. I mean cloud-based OS Corezoid paired with the Sender messenger, the possibility of which I have already written to Geektimes. Now I need to find a suitable device with an open API.'
image: '/images/smart-light.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Startups'
tags:
    - 'lowcode'
    - 'programming'
    - 'api'
lang: 'en'
---

The previous article was devoted to the idea of a smart house: why do I need it and how it should operate. It is almost two months since then. The main tricky part in going from the theoretical to the practical part was the fact that (in the real world) there is no single standard, or "standard" manufacturer of smart devices, and I want to combine a "zoo" of dozens of gadgets from different companies into a single ecosystem. The problem is that manufacturers offer their native software to control the gadgets and there is no a simple way to manage them centrally.

I have found a solution that would allow me to combine best-of-breed gadgets into a single system and to "communicate" with them via a smartphone. I mean cloud-based OS Corezoid paired with the Sender messenger, the possibility of which I have already written to [Geektimes](http://geektimes.ru/post/263248/). Now I need to find a suitable device with an open API.

## Smart house - why do you need all this?
I live in a two-room apartment in Kyiv, that’s why I'm not really interested in cost cutting. The total amount of bills for electricity, heating, hot and cold water does not exceed $20-30 and I do not see much sense to somehow reduce these costs. What I need is a video surveillance system, light bulbs that can be controlled remotely, air conditioning system which maintains a comfortable temperature in the room, appliances working on a schedule, controlled curtains and other similar gadgets. Before you start buying the equipment, I decided to choose one or two gadgets in each breed with an open API, which can be combined into a single ecosystem.

| ![img](/images/room.jpg) |
| --- |

## Light bulbs
I need controlled light bulbs for two simple purposes – to have the possibility to switch the light on and off all around the apartment with a single click and to adjust the brightness. I had to choose between [Philips Hue](http://www2.meethue.com/en-US), [LIFX](http://www.lifx.com/), [ilumi](http://ilumi.co/), [Zipato RGBW bulb](https://www.zipato.com/product/zipato-rgbw-bulb/), [Aeotec LED Bulb](http://aeotec.com/z-wave-led-lightbulb/1511-led-bulb-manual.html).

LIFX was my choice: coloured energy saving lamps connectable via Wi-Fi controlled from your smartphone. The project team claims that it has reinvented the illuminating lamp. Unlike analogue, LIFX can actually boast thousands of shades of one colour. Compared to the countertypes, LIFX can actually boast thousands of shades of one colour. When you turn the "rainbow circle", an amazing atmosphere can be created in the apartment, and due to the vertical scroll-wheel you can set the optimum brightness. Adjusting the white light of LIFX allows you to set the glow temperature: from cold light in 8000 Kelvin to warm and soft at 2700 degrees Kelvin.

| ![img](/images/smart-light.jpg) |
| --- |

The possibilities with LIFX do not end with default value setting. A light bulb can be configured so that it will light up at a time when you enter the apartment. And for those who find it hard to wake up on cloudy, winter days, LIFX has an alarm function with simulated dawn. The lamp life cycle is claims to be 40,000 hours, and its power consumption is 17 W at 1017 lumens luminous flux.

The cost of a LIFX sample is from $40 to $60 depending on the modification. You can order a light bulb directly on the official website.

## Electronic lock
There are plenty to choose from in this field too. You can find dozens of locks with open programming interface on sale – [Lockitron](https://lockitron.com/), [Kwikset Kevo](http://www.kwikset.com/kevo/default.aspx#.VpUYEFlOGM8), [August smart lock](http://august.com/), [Goji](http://gojiaccess.com/), [Okidokeys](https://www.okidokeys.com/) and many others. Frankly speaking, it is quite difficult to select a specific option; all of them are good in their own right. Using the method of elimination you can take your pick: Goji is insanely expensive – $324, Lockitron is not available yet, Kevo is only compatible with a limited number of devices, and API August smart lock has not yet been released – I had only one option – Okidokeys, costing about $189.

| ![img](/images/iot-smart-locker.jpg) |
| --- |

The device does not require any special skills to set up and can be attached to the current of lock with the help of a screwdriver and a few bolts. To open the door, just press the appropriate button on the smartphone, which is in contact with the lock via Bluetooth 4.0 and using 256 bit AES encryption.

The device is powered by AA batteries and does not depend on shore power. If your smartphone batteries have run down or have failed, you can use the usual key. Furthermore, the lock can be unlocked using the RFID tags on the map, in the wristband, key fob or somewhere else. Another cool feature of the gadget is the ability to share the door access to other device – for example, for a girlfriend or parents.

## Peeping door camera with a built-in intecrom system
Having installed a new door, I do not hear the voices of people who are in the stairwell any longer. Moreover, I do not really want to have to get up from my computer to say a few words of greeting to another Jehovah's Witnesses or door-to-door marketers. Therefore, I need a peeping door camera with the ability to broadcast video and audio to my smartphone display. Three of the most interesting samples that caught my attention are the [Doorbot](https://ring.com/?utm_source=doorbot&utm_medium=alert&utm_campaign=301&dbot=/), [SkyBell](http://www.skybell.com/), [August Doorbell Cam](http://august.com/products/august-doorbell/).

| ![img](/images/iot-smart-home-camera.jpg) |
| --- |

Doorbot doorbell for smartphones is the cutest of them, its price is $199. When someone rings the doorbell, the app on your smartphone or tablet shows who's at the door and allows you to talk to the visitor. Doorbot can be integrated with an electronic lock Lockitron. In this case, the owner can talk to the visitor, as well as open the door via the same application. Communication is performed via the home Wi-Fi router.

| ![img](/images/iot-smart-camera.jpg) |
| --- |

Unfortunately, all three devices are completely devoid of open API, and their manufacturers are fobbing off clients with indefinite promises. Therefore, we have to postpone the issue until compatibility with third-party platforms will be available.

## Video surveillance
I spend a lot of time travelling and want to know what's going on in the flat in my absence. Ideal – is a multifunctional device [Canary](https://canary.is/). Inside the body installed a video camera with a wide-angle lens and night vision function, as well as a siren and sensors that can track movement, temperature, humidity, air quality, vibrations and sounds. These parameters are recorded, is statistics, and in case of something unusual, the device sets off an alarm. The device size is comparable with a half-litre plastic bottle. The cost of the gadget is $199 ($349 for two copies).

Alternatively, you can buy Canary [DropCam](https://nest.com/camera/meet-nest-cam/) on Nest for the same money.

| ![img](/images/iot-dropcam.jpg) |
| --- |

## Climate control system
My choice is quite clear – it is [Nest](https://nest.com/) thermostat, priced at $249. The device can be controlled by a set of household appliances: heating, air conditioning systems, heat pumps, humidifiers and air driers as well as a fan. From this entire list I only have in my apartment an air conditioning system only, but I plan to buy an air freshener.



During the first week the owner of a thermostat controls it manually – raises and lowers the temperature, deactivates the device when the inhabitants leave the house, sets a comfortable temperature at night and so on. After about a week of training, the thermostat memorizes the habits of its master and begins to regulate the condition of the air in the house: switches on energy saving, adjusts the temperature and humidity and so on. The only problem I have to solve is how to connect the thermostat to the preliminary installed air conditioner keeping the integrity of the walls. Optionally I could attach the thermostat near the device so that the coming -off wires are not visible.

## Vacuum cleaner
I love coming back to an empty apartment, but I hate to do cleaning. To rid myself of this headache, I decided to buy a vacuum cleaner [iRobot Roomba](http://www.irobot.com/For-the-Home/Vacuum-Cleaning/Roomba.aspx). Vacuum cleaners produced up to series 600 product line had an open API and the ability to be integrated with third-party platforms.

| ![img](/images/iot-irobot-roomba-vacuum-cleaner.jpg) |
| --- |

iRobot Roomba is able to independently find and bend around obstacles, does not fall from ladders, and is equipped with a dust sensor that detects contaminated places. The device spends more time there. This model is excellent for cleaning 1-2 room apartments and priced at around $200-300.

## French blinds
During the day, my apartment is illuminated by sunlight and it sometimes distracts from work. Frankly, I can’t be bothered with hanging conventional blinds and opening and closing them twice a day. I did not expect to find an automated solution at all, but Indiegogo has recently finished its fundraising project called [MOVE-motorize blinds and shades](https://www.indiegogo.com/projects/move-motorize-blinds-and-shades#/). Swedish guys have made shutters controlled via Bluetooth with an open API and the ability to connect to other applications. The blinds can be automatically lowered and raised, not only at a specified time, but in depending on the weather conditions as well. You can already pre-order it for € 39, and it will be delivered in April 2016.

| ![img](/images/iot-fridge.jpg) |
| --- |

## Kitchen appliances
Do you remember this [quote](http://bash.im/quote/436725) from bash.im?

*xxx: Finally, the first prize: coffee-blyat.sh – is waiting for 17 seconds (!!!) login to ssh into the coffee machine (damn, we had no idea that it was in the net and still that it has sshd raised) and it sends some gibberish. Experimentally we found that IT starts the boiling process for half-caf chai latte of medium size, which begins to pour into the cup just to the point where a leisurely walking man gets from his office to the machine.*

| ![img](/images/iot-redmond-coffee-machine.jpg) |
| --- |

Unfortunately, I have not found the coffee machine with an open API, but while searching I ran into REDMOND SkyCoffee M1505S, priced at about $150. Coffee grinder with built-in functionality is almost identical to a kettle. It has two modes (grinding grains and then boiling, or just boiling ground coffee) and the possibility of heating for six hours. I do not know how to connect to its own application, but I'm sure it is possible.

The range of intelligent technology can be complemented by the intelligent Internet Kettle SkyKettle M170S, prised at about $100. Using a smartphone, the owner of the gadget can boil water, not getting out of bed or to warm ready-made tea. Besides boiling, there are five temperature conditions: 40°C, 55°C, 70°C, 85°C, 95°C. At the same time, you can use a smartphone to make sure the water is warm enough (or vice versa, has cooled off), – Ready for Sky application in real-time displays the temperature of the contents of a smart internet-kettle.

| ![img](/images/iot-redmond-coffee-machine-2.jpg) |
| --- |

The product line of gadgets for lazy guys can be extended with Internet Iron Redmond SkyIron C250S. It costs just above $50, and the main feature of the device is the ability to remotely turn off the iron. Moreover, it can be configured so that the iron is activated only when its Bluetooth is paired with a smartphone.

| ![img](/images/iot-redmond-skyiron-c250s.jpg) |
| --- |

## Balance of the undertaking

| ![img](/images/iot-smart-home-budget.jpg) |
| --- |

