---
date: '2017-06-06'
url: 'the-comparison-of-the-messengers-capabilities'
next: 'pumb-begunov'
title: 'Telegram vs Viber vs Facebook Messenger: The comparison of the messengers’ capabilities'
description: 'A lot of Corezoid’s users are got confused with this, as they used to send sms to the customer’s phone number and don’t get feedback, without reference if the client likes it or not, if client wants to advice something or to complain.'
image: '/images/corezoid-favi.jpg'
category:
    - 'News'
subcategory:
	- ''
tags:
    - 'messengers'
    - 'botplatform'
    - 'viber'
    - 'telegram'
    - 'facebookmessenger'
    - 'crm'
lang: 'en'
---


Despite of the fact that practically all messengers have opened API for developing bots, any of them gives opportunities for bots to begin communication with clients without getting client’s permission.

A lot of Corezoid’s users are got confused with this, as they used to send sms to the customer’s phone number and don’t get feedback, without reference if the client likes it or not, if client wants to advice something or to complain.

Moreover it is unclear how to attract an audience to your bot and identify the client.

All messengers give client’s/chat’s ID, but not the client’s phone number.

So, how to attract client to your bot, to identify him and send him messages to the phone number?

We will tell you how to solve these problems, using opened API: free and without SMS.

| ![img](/images/how-to-engage-users-with-corezoid.png) |
| --- |


| Messenger	| URI |
| ------------- | ------------- | 
| VIBER	| viber://pa?chatURI={{public_account_name}}&context={{key}} |
| Facebook Messenger | http://m.me/{{bot_name}}?ref={{key}} |
| Telegram | https://telegram.me/{{bot_name}}?start={{key}} |

Putting instead of the “key” the unique one-time key, that can identify the user, it makes possible not just identify the customer, but also understand from which channel has he come from to the messenger.

For VIBER it is necessary to add identification to the event handling “Conversation started”, parameter “context”.

For FB messenger there is a special button “Send-to-Messenger Plugin” for embedding to your applications.

So, by this way, you don’t have limitations in the tools and channels of the client’s attracting to the messengers. And you will know for sure their effectiveness.


**The comparative table of messengers' opportunities.**

| Features | VIBER | Facebook Messenger | Skype | Telegram |
| ------------- | :-------------: | :-------------: | :-------------: | :-------------: | 
| Information about the client |
| Client’s name | + | + | + | + |
| User’s communication language	| + | + | -| +/- |
| Link to the user’s photo| + | + | - | - |
| User’s country | + | + | - | - |
| Country’s mob. operator code | + | - | - | - |
| Mob. operator’s code | + | - | - | - |
| The date of birth | - | + | - | - |
| Publicly available information from the profile: job, residence, preferences | - | + | - | - |
| Available events |
| Notification about delivery | + | + | - | - |
| Possibility of getting online / offline status and when the user was in the messenger last time | + | - | - | - |
| The fact of user unsubscribing from the bot/PA | + | + | - | + |
| The ability to specify your customer’s ID in the URL for a chat with a bot | + | + | - | + |
| Interface’s features | 
| Availability of the WEB version | - | + | + | + |
| OAuth authorization of the user in the bot through his own site | - | + | + | - |
| Buttons | + | + | + | + | 
| Carousel (goods)	- (there is no native implementation) | + | + | - | (there is no native implementation) |
| Opportunity to set the input data form | - | - | + | - |
| Sets of the ready form templates | - | + | + | - |
| Payments |
| Creating INVOICE | -  | + (stripe) | + (stripe) | + (stripe) |
| Template INVOICE | - | + | + | + |
| 2-Step Verification | - | - | - | + |
| Possibility of connecting alternative payment aggregators | - | - | - | + |

