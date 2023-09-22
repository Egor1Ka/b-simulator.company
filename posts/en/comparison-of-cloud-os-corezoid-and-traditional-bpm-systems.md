---
date: '2015-09-16'
url: 'comparison-of-cloud-os-corezoid-and-traditional-bpm-systems'
next: 'pumb-begunov'
title: 'Comparison of cloud OS Corezoid and traditional BPM-systems'
description: 'Corezoid has such architecture, that allows us to easily store states of millions of clients and trace changes on these states, while BPM has just a chain of logical transitions and on each of them only its last state is available.'
image: '/images/corezoid-vs-bpm-scheme.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'bpm'
    - 'cloud'
    - 'os'
    - 'cor'
lang: 'en'
---

**BPM-systems solve internal business problems, Corezoid - external**

How are most modern BPM-systems built? They usually consist of two parts: a database and a module that stores business process schemes. The programmer (or scheduler-automatic) selects excerpts from the database, then the data is transmitted to the BPM-module. Next, in accordance with a certain algorithm, it is routed and data is forwarded back for being stored in the database.

Do you want to change a business process? Customize using a BPM editor, test and deploy to your server.

**What are the problems in the BPM-approach:**

The system supervises the past. Databases are designed for working with historical data. Until a programmer does not select an excerpt and does not forward it further, nothing will happen, and the data will be useless.

Databases and their interaction with BPM-systems can be operated only by programmers, any ordinary person is unable to get involved.
These problems are eradicated by Corezoid process engine, in which I build my processes and describe the object states for more than six months.

BPM-systems are based on process descriptions. At the moment, business analysts are actively discussing that really the primary issue should be the object’s state and fixing change of this state, but not just a description of the process.

OS Corezoid was developed with this in mind. I have no experience of working with BPM-systems, so I asked the experts to help me comprehend the difference between Corezoid and BPM-systems.

| ![img](/images/anton-vityaz.jpg) |
| --- |
*[Anton Vityaz](https://ua.linkedin.com/in/vityaz), an expert on BPM-systems (K2 Blackpearl, AgilePoint NX, IBM BPM) gladly agreed to reply to my enquiries:*

**— Corezoid is a system that can be utilized by managers with no experience in programming. Are BPM-systems available for training such people?**

— Ideally, the system should be as simple as possible for business analysts - to allow to intuitively describe schemes of business processes. It is desirable to maintain the standards for business process modeling (BPMN), to have the opportunity for enhancement, to use various schemes for representing multiple process types (business process, state machine). All this, except accordance to BPMN, is available in Corezoid.

**— What benefits of Corezoid over BPM-systems do you see?**

— I would see a specific and, in a certain way, a unique niche for the Corezoid platform: to quickly construct business logics in the cloud with lots of external communication (communication with a client, integration with banks and e-commerce systems etc.). We should remember that BPM-systems are focused on solving internal problems of businesses: automation of internal business processes, extensively using internal content.

In the case of automation of the processes that lie outside the company, specific architecture is required, the best integration capabilities, modules ready for connecting to various communication channels, to banking systems. Corezoid perfectly bridges the gap in creation of processes, providing not only the logics inside the company, but as well the logics of the whole chain or even network of partners.

| ![img](/images/corezoid-vs-bpm-scheme.jpg) |
| --- |

| ![img](/images/nikolai-mikhno.jpg) |
| --- |
*[Nikolai Mikhno](https://www.linkedin.com/profile/view?id=AAIAAA_BOpgBLPuGNvXMIwbrserV4JasPTEBTmY&trk=nav_responsive_tab_profile), R&D developer at the Evergreen company, which is developing business process automation of the UniSender service, also provided his vision of the match between Corezoid and BPM-Systems:*

> We work with SMS & email messaging and have for a long time used a BPM-system. We use Corezoid primarily for solving problems of queue integration of two systems. Corezoid completely covers the gap, and surely abstracts the logics of business processes.

> For our existing BPM-system, we compiled a lot of software by ourselves, it took a lot of effort and time, Nikolai recalls with obvious sadness. A very cool feature of Corezoid is its logger, via which we can trace what data and when was accepted, in our case this has often been necessary.

> In short, our BPM-system, in creating and managing business processes is obviously inferior to Corezoid. Yet, Corezoid has a small flaw: it is not intuitive enough, its documentation should be detailed. But if you work with it, most of the problems can be easily solved by themselves.

| ![img](/images/max-popov.jpg) |
| --- |

*The last respondent for today is Maxim Popov, CTO of Corezoid:*

> In Corezoid states generate new processes that generate new data, new states and new processes - and so on to infinity. The BPM for the start of a process needs some external signal, impetus. For Corezoid such a triggering signal will be the changing of the object’s state. I.e. the impetus will be received from inside.

> BPM-systems are targeted to process and provide some final answer. To work with such volumes of data you need serious computers of high capacities. Corezoid has such architecture, that allows us to easily store states of millions of clients and trace changes on these states, while BPM has just a chain of logical transitions and on each of them only its last state is available.

| ![img](/images/corezoid-vs-bpm-points.png) |
| --- |

Recently Corezoid process engine became [available](https://aws.amazon.com/marketplace/pp/B013AYOIYG/ref=srh_res_product_image?ie=UTF8&sr=0-2&qid=1438670590321) for installation to private cloud via Amazon Marketplace. Nevertheless, you can register and start using it right now at corezoid.com




