---
date: '2016-02-12'
url: 'messaging-app-encrypts-messages-with-bitcoin-technologies'
next: 'pumb-begunov'
title: 'Messaging App Encrypts Messages with Bitcoin Technologies'
description: 'Sender uses asymmetrical end-to-end enctryption with bitcoin keys, and stores encrypted messages on a server. Thanks to than, neither the service’s administration, nor hackers, nor law enforcement may access the conversation history without a private key stored at the user’s device.'
image: '/images/sender-sample-forms.jpg'
category:
    - 'News'
subcategory:
	- ''
tags:
    - 'security'
    - 'bitcoin'
    - 'crm'
    - 'messenger'
lang: 'en'
---

Messaging app [Sender](https://sender.mobi/) developed by Ukrainian team has implemented a function of encrypting user messages with bitcoin wallet keys. A bitcoin wallet is integrated in the app.

Ukraine’s largest private bank, [PrivatBank](http://forklog.net/privatbank-blockchain-is-great-but-we-put-our-stake-on-bitcoin/), is the project’s anchor investor. The bank is known for its bitcoin-friendly policy uncommon for such financial institutions. PrivatBank also integrated bitcoin into the list of its exchange services.

Sender uses asymmetrical end-to-end enctryption with bitcoin keys, and stores encrypted messages on a server. Thanks to than, neither the service’s administration, nor hackers, nor law enforcement may access the conversation history without a private key stored at the user’s device. The ECIES technology is used for signing transactions in bitcoin ecosystem. There were no reported instances of its hack throughout the whole history of cryptocurrency.

| ![img](/images/fintech-hive-middleware.jpg) |
| --- |

Initiating a private chat is quite simple. A user should press the encryption button next to the counterparty’s nickname on the list to transmit all messages in the conversation in encrypted form. Upon receipt of the first message, the counterpart’s messages will be encrypted automatically.

After installation, the app creates a bitcoin wallet with open and closed keys on the device. Then, the open key is sent to the server and gets linked to the messenger’s profile, while the closed is stored on the device.

As an encrypted conversation starts, the app receives the public key from the server, signs the message with it, and sends it to the receiving party. The latter, in its turn, receives the message and decrypts it with its private key. The signature also prevents data from altering after their transmission into the network.

The main feature of end-to-end encryption is in encrypted storage of data on a server. It excludes any possibility of reading a message even when the server is compromised and physically accessible.

In addition to that, Sender also supports attaching bitcoins to a message. Any user will be able to send to or request a bitcoin remittance from their friends stating their phone number instead of wallet identifier.

Android and iOS versions of the app are available at [Google Play](https://play.google.com/store/apps/details?id=mobi.sender&hl=en) and [App Store](https://itunes.apple.com/us/app/sender-c/id980844011?mt=8) respectively.

