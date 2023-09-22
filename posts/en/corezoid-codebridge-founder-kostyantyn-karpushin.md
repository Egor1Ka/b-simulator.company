---
date: '2022-07-06'
url: 'corezoid-codebridge-founder-kostyantyn-karpushin'
next: 'codebridge-founder-karpushin-interview'
title: 'Kostyantyn Karpushin, Codebridge founder: “How we migrated from Integromat to Corezoid, saving on time and money”'
description: 'In Integromat, when you add another step, the price may double. In Corezoid, I have a thousand such steps. And adding a few steps does not change the price in practice.'
image: '/images/corezoid-codebridge-founder-kostyantyn-karpushin/kostyantyn-karpushin.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'digital'
    - 'automation'
    - 'integration'

lang: 'en' 

---

| ![img](/images/corezoid-codebridge-founder-kostyantyn-karpushin/kostyantyn-karpushin.jpg) |
| :---: |
| *Kostyantyn Karpushin, [Codebridge](https://www.codebridge.tech/) founder* |

*Codebridge is a boutique digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping Fortune 500 companies.*

#### How did you start using Integromat?

Using Integromat was easy for us. With it, it was easy to do integrations. Just choose a service and you’ll get it integrated in three clicks. However, once we’ve started adding new logic, stumbling blocks started to appear in Integromat. And each new stumbling block was increasing the total cost of ownership of the solution. I realized that this solution was about to become too expensive. If you compare the total cost of ownership, Corezoid is far less expensive. To complete my tasks, the $160 a month subscription plan is enough.

At the initial project stage, I had 4 algorithms in Integromat, 10-15 steps each. For the same price in Corezoid, it became possible for me to launch several million steps each month.

| ![img](/images/corezoid-codebridge-founder-kostyantyn-karpushin/corezoid-large-process.png) |
| :---: |
| *This is what a Corezoid processes looks like* |

#### Was the cost of ownership the main reason for the transition from Integromat to Corezoid?

It wasn’t the only reason. I wanted to choose a reliable platform, on which I would be able to scale in the future, and not jump from one platform to another aimlessly.

The integrations that we’ve made using Corezoid turned out to be quite deep logic-wise. We’ve built an entire recruitment funnel and set up integrations with Huntflow, Zoom, Calendly, sms services (BSG), and Sendgrid on Corezoid. When we move a candidate through the recruitment funnel, an email with a link the candidate can use to book an interview slot is sent automatically. We send a notification to Calendly with all the fields filled out: first name, last name, etc.

In many of our notifications we address the candidate by name. When the candidate fills out a questionnaire they specify their name in different languages. Using an API, we automatically transliterate the name from Ukrainian to a language the person chose as their preferred language.

| ![img](/images/corezoid-codebridge-founder-kostyantyn-karpushin/mail-test-result.png) |
| :---: |
| *In many of our emails we address the candidate by name* |

Gradually, we are making our business logic more complex. We have about 20 different procedures in our Corezoid account. State diagrams are very convenient for storing a candidate's intermediate states as they move through the funnel. Recently I was thinking whether it would be possible to do this in Integromat? Not sure if it is. In any case, an implementation in Integromat would not look as elegant as the one in Corezoid.

We’ve taken a deep dive into the subject recently. In Corezoid, when we use a Call Process node to call another process, the data sent to that process depends on four parameters in four other sources. I’m not sure if you can implement a logic so complex in Integromat.

#### Can a business person work with Corezoid?

Yes. The main thing is to have logical thinking.

#### Is it the same person who started building cases in Integromat and then switched to Corezoid?

Yes. That’s me. I did everything by myself. My major is not computer science. I did a bit of programming in school. I just decided to sit down and figure it all out by myself. Also, the Corezoid support team helped. They work very well. They don’t just refer you to documentation, they answer your technical questions well, and even suggest architectural solutions.

#### How much time did it take you to build the first basic version of a Corezoid process?

One week. Writing text for email templates took me more time.

#### What was the hardest part of your project from a technical point of view?

Setting up correct authorization in various APIs.

#### Did you use OAuth 2.0 for this?

I also mastered OAuth 2.0 when I was doing a Google translate integration last week. However, I did most API integrations with authorization keys.

#### How many job applications do you process a month?

We started working 6 months ago. 12,000 applications have passed through us, which amounts to about 2,000 applications a month. And each application goes through many different selection stages. Every day we have about 60,000 logic steps taken inside our algorithms on Corezoid.

#### Is it the same as one connection in Integromat, right?

Yes. Working with Corezoid we use the $160 per month subscription. For Integromat, it would have been significantly more expensive.

#### What is the maximum load that the architecture you built on Corezoid is capable of handling? Can you process 20,000 or 200,000 applications with the same architecture?

In Corezoid - yes. When scaling up, the bottleneck will be not Corezoid itself but the connections to other services. Take, for example, Huntflow which can handle only 5 applications per second. Or Zoho Survey, which we use to manage questionnaires.  

#### What else was missing in Integromat?

Convenient procedure calls. In Corezoid, I can easily create procedure processes, and I can call other processes using the Call Process node, passing their required input parameters.
Working with code in Corezoid is convenient for me. I can easily write JavaScript code in a dedicated Code node.

#### What do you need the Code node for in your business processes?

To compute some complex function. And parse a data array according to some rules.

#### What is “requests per second” in your case?

For example, a person fills out a form on a site and clicks the “Send” button. Each such click is a request to the Corezoid API. For our medium subscription plan, we get up to 10 requests per second.

Also, our subscription plan provides 10 million steps a month. Take a look at, for instance, our statistics for the last 30 days – we’ve consumed 1,234,550 steps. Therefore, going with this subscription plan we can grow 10 times.English test. The key parameters were automatically inserted into the letter.

I’m not sure I could do this with Integromat. If I were now asked to choose between Corezoid, Integromat, or Zoho Flow I would definitely favor Corezoid.

Frankly speaking, I’m glad I figured all of this out. Actually, it’s kinda cool.

| ![img](/images/corezoid-codebridge-founder-kostyantyn-karpushin/mail-inbox.png) |
| :---: |
| *“As we speak, the system continues to send emails automatically” – K.Karpushin, Codebridge founder.* |

#### It was an insight for me that a businessperson could figure out all of this.

It was hard, but interesting for me. I like to figure things out. I really enjoy doing this.

#### Do you create one big scenario and then realize it has some processes that you can single out and implement separately? Why can’t you create one really big scenario? After all, when you call other processes from a process the system load and your bill go up?

In Integromat, when you add another step, the price may double. In Corezoid, I have a thousand such steps. And adding a few steps does not change the price in practice. 10 million steps a month in my subscription plan is a big number. I stopped worrying about the number of steps left in my Corezoid process. It is much more important to me to have similar procedures stored separately.

If I’m fixing a process, then I’m modifying it in only one place. If anything fails, then I know where to look for the cause. It is exactly in one process.

On top of that we’ve set up escalations: notifications about something that failed in a process. If it were implemented in one process we would need to configure escalations everywhere. Instead, we catch errors only in final nodes.

In the beginning, I was building large Corezoid processes. Business logic, communication rules, etc. were all in a single process. Then I thought about it. And transferred it all into separate procedures. In addition, there are states (state machines) available. So I started to store finite states in a state machine.

#### So you first made a draft, and then went on honing it down, discarding the unnecessary parts, optimizing it, and splitting it into different scenarios? And you got almost every logic unit to be used separately and independently? So that you see errors and statistics related to a unit separately?

Yes. I have dedicated processes for sending texts, emails, encode URLs, etc. Here is the process that cleans out redundant characters in URLs. For instance, someone sent us a URL and put quotation marks or any other service characters in it, which need to be cleaned. In Integromat, you would have trouble doing that, but in Corezoid we have a dedicated “cleaner” process which can be called by anyone who needs it.

| ![img](/images/corezoid-codebridge-founder-kostyantyn-karpushin/corezoid-process.png) |
| :---: |
| *Encode URL process which performs URL cleaning* |

Besides that, unlike in Integromat, a task in a Corezoid process can be stored for quite a long time – up to 6 months. You can direct a task to a Delay node and store it there. There is no such thing in Integromat. You can’t store a task there even for a few days. As for surveys that we send, they all have communication trails. So we send reminders of a person who has not yet completed the survey, etc. And Corezoid forwards communications after 2, 7 days. Integromat does not have this functionality. There you need to write data to a database and then request it when the time comes.

*Interviewed by Maksym Slobodianiuk,*\
*Founder [Databro.pro](https://databro.pro)*
