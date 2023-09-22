---
date: '2019-02-27'
url: 'space-bank-built-on-corezoid'
next: 'pumb-begunov'
title: 'Space Bank: Using Corezoid we built a mobile bank from scratch in 8 months'
description: 'We use Corezoid technology as our main system to conduct almost the whole development process. Our main products, processes, and the server part of the mobile application are built on the Corezoid platform.'
image: '/images/space-bank.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'bank'
    - 'fintech'
    - 'internetbanking'
    - 'mobileonly'
    - 'core'
    - 'api'
lang: 'en'
---

| ![img](/images/space-bank.jpg) |
| :---: |
| **Lasha Gurgenidze, Product Owner at Space Neobank** |
|  |
| **[https://space.ge](https://space.ge)** |

**Lasha Gurgenidze:** Sometimes we call Space Bank “enterprise startup”. Space is the first fully cloud-based daily banking solution in Georgia. The fintech-inspired initiative was taken from concept to launch in just eight months by digital pioneers at [TBC Bank](http://www.tbcbank.ge/), the country’s largest banking group which covers about 40% of market in Georgian retail business and the same percentage in SME and Corporate segment. TBC shares are listed on the London Stock Exchange.

Just over a year ago, I worked at TBC Bank as an innovation projects’ manager. At some point we realized that it’s time for changes  if we want to be competitive in the future, and not only within Georgia.

A lot had to be changed.We were strongly tied to legacy systems, strongly dependent on the provider of core banking. It was a painful part of our business.

Our aim was to create a system that allowed projects in the future to quickly enter new markets.

An independent team of 4-5 people began to build everything from scratch, including IT, business model, branding. Our goal was to deliver a full [daily banking mobile service](https://space.ge/?utm_source=int_press_release) with superior customer experience. We put a special focus on differentiating by design, customer care, price transparency and instant service delivery.  We are a fintech in every sense from people and processes, to our culture. The biggest advantage of our model is the ability to leverage the resources and experience of TBC Bank while operating independently.  We are a lean and agile organisation and we sought out partners with similar attributes.

As a part of our R&D, we met with the Middleware company.

We use Corezoid technology as our main system to conduct almost the whole development process. Our main products, processes, and the server part of the mobile application are built on the Corezoid platform.

One of our main tasks was  to increase the speed of development and launch of new products. At the same time, we had to integrate with the old legacy core, responsible for regulatory requirements, compliance issues that worked as our main general ledger.

Only complex standard tasks were left  in the core system, where there is no business value, but  the compliance and reporting stuff.

Everything related to user interaction (business processes, customer journeys) we built in Corezoid.

Now, everything seems easier than it seemed a year ago. From TBC core we took only a few APIs. No more than 20 APIs, only some of the most crucial ones. And all the remaining business processes and customer journeys, we created from scratch in Corezoid.

#### What advantages did you achieve?

As wanted we built all the important processes, without engaging much with the core banking vendor. At Space Bank we had people who quickly learned how to work in Corezoid. They learned to integrate with legacy and with other systems.

Space enjoyed tremendous advantages both in terms of the development process and the ability to quickly integrate new people in the team.

When you grow and hire new people, it is super-important to onboard rookies and bring them up to speed fast. Corezoid helped a lot with this challenge. It was easy for us to introduce new people to the team.

We launched Space Bank in May 2018, 8 months after the start of development. Already in the first 6 months of the project, we received very good results: over 100,000 active users; 380,000 downloads of the application. The deposit portfolio is about 20 million GEL.

These figures may seem small for some countries, but for a country with 3.7 million people population and for the small period of 6 months this is a good result.

We like to call ourselves  “innovation banking lab”. Our main goal, which we want to achieve with the help of our technological stack, is to penetrate new markets fast.

The next step is to launch Space Bank in other countries. Now we are obtaining necessary permits. Using the same components that we developed in Georgia, we plan to effectively launch in the new markets.

#### Did you have any APIs in the beginning of the project?

In Georgia, we started from scratch. There were some APIs, but we didn’t even know what they were doing. Corezoid flexible technology allowed us to integrate easily with all the systems. We didn’t request any additional API development from our parent TBC Bank.

Now Space Bank is entering one of the new markets. We found a local core banking vendor, but it doesn’t have any APIs at all. However, they are using Oracle and other SQL databases. These relational databases allow you to quickly create APIs from stored procedures. Vendor that I mentioned was able to create the necessary APIs for us in a short time. They gave us the APIs that are needed to integrate the middleware and front systems with core banking.

#### Could you, please, talk about any implementation tips, lifehacks? How to avoid possible pitfalls?

**Giorgi Khvedeliani, Head of Development, Space Bank:** I do not remember any particular pitfalls. The main thing is to pay attention to the building processes in Corezoid. All our processes use the same structure, the same components.

**Lasha Gurgenidze:** we were able to achieve results by simplifying  the banking products. Giorgi spoke about the process design in Corezoid. But as a business person, I’m sure that without simplifying banking products, it is difficult to grow. The role of a skilled business analyst is important.

**Giorgi Khvedeliani:** we have several hundred processes. I mean that they return the same data to the main processes. For example, one of the processes that connects to the front-end plays the role of a router. And we have one process, from where all the main processes return the results.

#### What is the necessary minimum to start working in Corezoid? Core banking provider gives you APIs – and you can begin? Are there any specific requirements for the Corezoid APIs?

Giorgi Khvedeliani: Corezoid works with any popular API formats: json, xml, etc.

#### What should be the team of the project? How did you get started? How did you scale? You have a phenomenal dynamics, of course. How did you grow up?

**Lasha Gurgenidze:** we started with minimal cost and budget. As I said, we had a 5 people team at the beginning. At the time of launch, we had a maximum of 10 technical specialists, including back-end, front-end developers, business analysts, testers, and scrum master.

Now we are scaling fast, we plan to penetrate other markets. IT and business tasks will be supported from from the central location -Georgia.

We intend to increase staff to 70 people by the end of 2019. This headcount includes everyone: IT and business specialists, customer experience experts, couriers that deliver Space cards.

We want to continue to experiment with new approaches. We implemented agile approach, and went further, implementing a horizontal management structure, the so-called holacracy.

The whole team is divided in “squads”, each squad has goals. There are  squads of IT, marketing, loans, transactional business and customer experience.

The horizontal structure allows you to effectively connect people, give them more opportunities to accomplish their tasks and be more empowered. Team members  are more independent and effective in this format than in the traditional hierarchical structure.

#### How did the interaction with Middleware company begin? Did you take any trainings? Did you ask Middleware to help setup processes for Space Bank?

**Lasha Gurgenidze:** at the very beginning we visited Middleware and conducted a workshop with them. The workshop was interesting, we studied technological capabilities of Corezoid, learned about interesting cases. Upon arrival in Georgia, we gave this information to our technical team, and arranged demo access to Corezoid for them. We had a strong belief in Corezoid.

Initially, when you start, tech geeks might look at Corezoid a little suspiciously. Corezoid seems too simple to be real. Those people who are used to writing lines of code on the keyboard the visual interface of Corezoid might be unusual. We organized technical trainings for several days. And then we gave people the task to build sample processes in Corezoid. Middleware team supported us in our journey, they were answering calls, e-mails, provided Slack-support.

Giorgi was the first person to start developing processes in Corezoid. And in a couple of weeks we started building real business processes, that later went into production.

Now, when we hire new employees, we give them enough material of our own. We explain how to work with Corezoid, and we don’t buy any additional training sessions from Middleware.

I won’t call it a pitfall, but once we  had a case when we offered a job to a programmer who loved coding. He easily studied the system, but said that he liked to write strings of code using .NET and even quit the company. But it was only 1 case in many. The rest of us all understand the benefits that come from using Corezoid.

#### Did you create the design of the mobile app yourself?

We agreed that we’re a “digital bank”. And for us the most important thing is the speed of launching our ideas. We have a good business team. They always have a lot of ideas. Most of these ideas are new, both for us and for the whole world. We wanted to experiment a lot in Space bank. And we always said that one of the most important things is design, a simple user experience.

All our products must be “instant”, we removed all complex fees, commissions. These are our basic principles that we laid in Space Bank. Design and UX are some of the most important things. This is our competitive advantage, we must develop it within our team. In this case, the changes should be frequent, fast, you need to experiment. It is much easier when the design and UX are developed within the company, and not by an external contractor.

There is a very important thing called “customer journey”: what steps the user goes through in order to fulfil his goal. All steps, all processes that occur – are built in Corezoid. If we want to remove or add a step, or change the sequence of actions, then for us it is just a change of the process in Corezoid. Managing a customer journey with Corezoid is faster and easier thanks to visual editor, than making changes to the program code.

#### How do you use Corezoid to control the smallest details? For analytics?

Corezoid has an excellent dashboard functionality that allows you to give information about the status of each step (opening application, passport scanning, taking a selfie). Has the customer moved forward on or not? How much time did it take? And there are counters in Corezoid. You can get accurate information about each condition.

Let me give you an example. When a client registers in a mobile application,  at some step a problem might occur. The user could not have scanned a passport, or photo, which he took, didn’t correspond to the photo on the passport. Corezoid automatically writes the result through the API to our CRM. Also sends all the logs about customer journey to our CRM. Then if a client calls our call-center or goes to the branch and explains a problem, we already see the current status and the cause of the issue in the CRM system,

Also, problems can be automatically escalated. If the client can’t complete the registration, we can call him/her from the call-center, and not wait until he/she calls us. Also we give detailed instructions to the branch, how to help the client  to go to the TBC bank branch. Such approach improves customer experience significantly.

#### Middleware also owns Deepmemo Rules Engine technology. Do you use it somehow?

We are now starting to implement Deepmemo for antifraud cases and marketing.

#### Do you have Space Bank mobile app both for Retail and SMEs?

Only for Retail so far. But we have plans to launch Business Banking as early as next 2020.

#### Do loan products sell well through the Space Bank mobile app?

We have launched a very simplified type of loan, that looks like a credit card. There are no complicated maths, hidden fees. Thanks to Corezoid we were able to make a brand-new loan product. The entire credit line works in real mode. In minutes you can get a loan, and cash it out on the card of any bank.
