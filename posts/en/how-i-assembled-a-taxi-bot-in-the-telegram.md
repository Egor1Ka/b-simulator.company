---
date: '2015-08-30'
url: 'how-i-assembled-a-taxi-bot-in-the-telegram'
next: 'pumb-begunov'
title: 'How I assembled a taxi bot in the Telegram'
description: 'On the day when Telegram bots were launched I, within 3 hours, assembled the bot that sent the air temperature in response to the user’s geo-location. '
image: '/images/telegram-state-machine.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Startups'
tags:
    - 'taxi'
    - 'messenger'
    - 'chatbot'
    - 'bot'
    - 'telegram'
lang: 'en'
---

On the day when Telegram bots were launched I, within 3 hours, assembled the bot that sent the air temperature in response to the user’s geo-location. From this very day I was conveniently able to call a taxi by means of a Telegram bot, since I had at hand the API of a taxi service.

My goal is not just to tell you how I put together a bot for calling a taxi but to share this process, so the time that I spent on the implementation of the algorithm can be educational to others. A result of this work is such, that any taxi service in the presence of API, can in 5 minutes customise the template of the bot for itself. Or the owner of the bot with a large number of users will be able to connect quickly to his taxi service.

## Design and implementation

The first thing I did, I drew on paper a simple automat of a taxi request and its status. I wanted to make it quick and easy to understand, how much resources will be spent on this task from scratch. Since I had access to the API taxi service, it was necessary to implement only the logics.

In this process I fixed a minimal functionality – to order for now and to pay by cash. Functionally, the bot is able to receive only geo-location addresses without any text recognition. This minimal functionality of design, implementation and testing was assembled by me within 8 hours.

| ![img](/images/corezoid-telegram-architucture.png) |
| --- |

Later, at the stage of obtaining the user’s address, I added text recognition via Yandex Speech API, so you could also send the name or address of a place instead of geo-location. But as the taxi’s API that I used ran in its specific format for address reception, this feature was not added to my assembly.

On the next step, I moved the above process and the logic from paper into the cloud OS Corezoid admin tool and connected the actual API Telegram to this process. At this stage it was already possible to test the process’ reception of messages from the Telegram. On the further step, I, in the same manner, created the process of a taxi request.

Here is how the automat looked there, describing the Telegram bot users’ status, both in a draft and in Corezoid.

| ![img](/images/telegram-state-machine.jpg) |
| --- |

After developing the taxi request skeleton I created separate processes: sending messages to the Telegram, processing geo-location and the work of API with the taxi service. Five minutes was spent on their testing and error correction. Then I started to create dashboards.

## Real-time dashboards and analysis

The main element was a Callback function in Corezoid, or it was called Webhook in Telegram terms. This feature allowed a process to wait for a user’s reaction. In this particular process there may be few reactions: a user sends a geo-location or cancels his/her order (when idle, or via Cancel option). Next, the system uses the Callback function to monitor the number of user steps in real time mode. This enables customers to visualise funnels on passage of their taxi request processes. Due to the processing of each step it can be analysed on which step the client has fallen off and to moderate the process.

| ![img](/images/corezoid-dashboard-for-telegram-bot.png) |
| --- |

Since Corezoid automatically collects statistics for each process, you can view the details of each user and his order’s status.

| ![img](/images/show-statistics.png) |
| --- |

Dashboards are the tools for process optimisation. If you intend to use this process, you will need to build nothing – dashboards come “out of box.” There you will see how many people have hooked the bot, are using it, or not using it. You can notify individual users of some updates or awaken those who are sleeping.

| ![img](/images/customer-funnel.png) |
| --- |

You can find via Telegram [@taxibot](https://telegram.me/utaxibot) contact information and go to the dashboards. When you enter a bot Order command, you will see how the real-time dashboards work.

## How to use the template

I untied the bot from the existing API taxi service. So you can copy the folder with the template itself and connect to your local taxi service via the API. Just enter your bot key Telegram on one side and API taxi service on the other.

**Step 1.** Log in with 2 clicks on сorezoid.com

**Step 2.** Copy the folder with the process.

| ![img](/images/copy-process.png) |
| --- |

**Step 3.** Register your Telegram bot in a chat [@BotFather](https://telegram.me/botfather) and bind its key to the Corezoid process.

| ![img](/images/add-channel.jpg) |
| --- |

**Step 4.** Connect API of the taxi service in accordance with this [documentation](https://doc.corezoid.com/docs/bot-platform-20).

Requirements under API on taxi ordering were compiled assuming the API that was used by me. Nevertheless, for Corezoid it does not matter what API you use, you can manually register the mapping of incoming and outgoing data, so you can use any parameters.

I suggest you not to just use Corezoid as a designer for process creation, but use the existing template process.

And most important, Corezoid can work with any front end that supports operations via Webhook / Callback. So this process will be able to work with other systems interacting with the client (Slack, Telegram, SiteHeart, SMS, etc.). You can even connect a Twitter Direct Message API, and the same process will work via Twitter.

I plan to refine the bot functionality gradually, for example, I shall soon add: OCR; Optimisation desktop client; request for more than one address and another. But, as an alternative channel, the bot can be used now.

## Prequel

I work in PrivatBank and have moderated the business logics via Privat24 Corezoid. I’m not a software developer and do not have the slightest idea about code.

The Corezoid system was originally developed exclusively for Bank operations. In the course of its operation, it was transformed into a system on status management of objects and processes, and then it became obvious that Corezoid is perfect for the backend role of front-office systems, including messenger.

There are not many platforms for backend creation. Recently I came across article on Habr, in which guys started a smart discussion on construction mechanisms for Telegram bots. Today I continue the conversation and show a flexible platform with “out of the box” dashboards. Enthusiasts will now be able to call themselves a taxi directly via Telegram.
