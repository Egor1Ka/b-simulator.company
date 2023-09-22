---
date: '2019-06-24'
url: 'pumb-begunov'
next: 'mambu-corezoid-cloud-state-machine'
title: 'Andrey Begunov, CTO at FUIB: "Corezoid worked as a powerful catalyst in FUIB`s digital transformation"'
description: 'Corezoid became a huge catalyst and facilitator of digital transformation at FUIB. Corezoid allowed us to significantly widen the bottleneck of our IT resources.'
image: '/images/pumb-begunov.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'bank'
    - 'fintech'
    - 'bpm'
    - 'digitaltransformation'
    - 'cto'
    - 'digitalcore'
lang: 'en'
---

| ![img](../images/pumb-begunov.jpg) |
| :---: |
| **Andrey Begunov**, CTO at [First Ukrainian International Bank (PUMB, or FUIB)](https://www.pumb.ua/en) | 

#### Andrey, could you please share with us how did the "digital transformation" at FUIB start for you? 

I joined the FUIB team in November 2016. By March 2017 we have produced and had approved by the Board our 3-year IT Development Strategy.

Our strategy covered every angle of the operations: from the business and its technological effectiveness to the issues of infrastructure development and the overarching processes, technologies, and people.

In 2017, 99% of the bank's IT landscape consisted of a stack of Microsoft technologies. The bank had sizeable assets, and its business was growing, and continues to grow very rapidly. I had serious concerns about our 2017 IT architecture. What can be done about such a large number of vendors, such serious number of licensing agreements, and the strength of the core?

We closely reviewed the situation and decided that we will focus our internal development resources on those sectors where we already had knowhow, where we regularly come in direct contact with our customers, both online and offline.

> We need simple, lean frontends that do not depend on business logic, and the processes themselves should be flexible, reusable, and capable of being managed without the thorough knowledge of programming languages.

For instance, from that time on, we've been creating all our target architecture frontends with our own resources, slowly but surely driving out the legacy monolithic systems. Clearly, in our business we need to be able to quickly introduce changes in our relations with customers. We need simple, lean frontends that do not depend on business logic, and the processes themselves should be flexible, reusable, and capable of being managed without the thorough knowledge of programming languages. This is why in our 3-year strategy we included a process engine as a strategically vital element of business development.


It was very fortuitous that at that time we were contacted by Middleware, a company whose experience and competence we had every reason to trust. They proposed to implement a process layer based on technologies developed by Corezoid.

Of course, if back then we suggested to use some very well known process engine from, let's say, one of the world's top software providers, we would've had instant trust. But then we would've had to deal with the cost of ownership and the issue of whether or not our business units would be able to work with the process engine independently. And the answer to this question is most likely negative. Why, you may ask? This is all very cool, and it offers vast opportunities – but based on our experience and in our circumstances, the engine would've ultimately been only suitable for engineers, which in the end would've made it only so valuable for the business. And there are lots of other examples of situations when the IT department brings in a clear, robust IT technology, but its implementation hits insurmountable roadblocks. In the context of making a decision on cooperating with Middleware, there was mutual business interest in their solution.

It is not enough to have simple frontends and the process engine. The next important layer is an integration platform. In my first 90 days at the bank in 2017 I noticed that we had a misconception in our terminology. What we have been calling an "integration layer" was in fact nothing of the sort. And what would that be? What we had was an Enterprise Service Bus (ESB) class product, and it was basically just an app hosting platform, although it did have certain integration capabilities. But as soon as the issue of reusability of previously developed APIs in our new products would come up, we would be having to spend precious resources to refactor the APIs.

> The word "API" in our business vocabulary started to show up when we started working closely with the Middleware team.

The API layer was its own separate story. The word "API" in our business vocabulary started to show up when we started working closely with the Middleware team. Before that, of course, our IT team has worked with APIs. But the term "API" itself was not a household word in our business. API, which stands for Application Programming Interface, is a term from the world of IT. Nobody understood what business value APIs bring. And this is where Middleware played a vital role as a facilitator. The company was able to communicate, in a simple, understandable language, the importance of these building blocks in the general underpinnings of our business processes. Thanks to our partners, we managed to gain much-needed clarity regarding the role the API ecosystem could play in our system. 

#### What gave start to the little pyramid that FUIB often mentions at conferences?

![img](../images/layers-pumb.jpg)

> Middleware's Corezoid perfectly fit in the middleware part :) 

The little pyramid was born in February 2017. It became part of our IT strategy as a visualization of the target architecture – a clear, comprehensible diagram that explains the business value of technologies, the key architectural layers and the changes that are needed to improve the system's flexibility. Middleware's Corezoid perfectly fit in the middleware part :) 

In my regular communications with colleagues from other banks I'm watching the difficulties they face, and what is happening (or, rather, NOT happening) in their IT architecture. Many are still continuing to build and develop the so-called monolithic, standalone systems that are hard to integrate, are about as transparent and open as a black box, do not provide flexible tools and are developed using the traditional "waterfall" process. All while their companies are trying to establish effective engagement with dozens of external solutions vendors. 

> "You can't outsource intelligence." 

Many in the market continue to believe that some day someone will show up with a readymade box solution that will solve everything. I like the words of the Middleware founder Alexander Vityaz, "You can't outsource intelligence." You will not be able to offer your client anything new if you keep buying readymade solutions from external providers.

#### How did the "digital transformation" take place at the management level, on the level of people?

We paid close attention in our IT strategy to the changes in approaches to working with people. We decided that we need to try the "scrum" approach, that is to bring the processes, the motivation, the interaction and the team composition in line with the classical "scrum" model. Not everyone is aware that scrum comes from rugby, where it refers to a particular ordered formation of players. And rugby is a game where everybody gives it their all – it is about the common goal, team work, serious efforts.

| ![img](../images/pumb-scrum.png) |
| :---: |
| Scrum is all about the team play. | 

Many entities continue to operate in a paradigm in which the process rules the day. Let's improve the process, and everything will work out.

> Sometimes it is nearly impossible to even remember who ordered this product's development a year ago.

We write the requirements, pass them on, someone does something about them. "Let's just make sure things are moving." And all we do is continue to endlessly optimize them. This model has its intrinsic limitations. In this approach, a team member often is nothing more than a part of an assembly line: they receive their own little piece of a puzzle to be solved but have little knowledge or understanding of the final product – where is it, did it ever get launched? Moreover, do I even use what I helped create? Add to that the revolving door that is an ordinary factor in today's market. Sometimes it is nearly impossible to even remember who ordered this product's development a year ago. The tasks go "stale."

We on the other hand shifted the focus from the process to our colleague, an employee and professional, to the interaction between the participants in the value creation process. For instance, historically, our design team sat in one office, the IT group in another, and our colleagues from the business and product units in a third. They've never even met each other in person!

You know these huge screws you see on many bridges, right? Now imagine that this screw is an important task. Consequently, we thought that we just need to take a bigger screwdriver and tighten the screws as needed. And if we don't have the right screwdriver, we'd just buy software from an external vendor to make sure everything actually works. We tried many tools/keys from the classic change management toolkit: KPIs, dashboards, time sheets, committee to manage the change. Some we continue to use, but on many old tools we simply gave up.

We realized that we needed external help: competence from the market. We found a partner and chose one solid place to apply our energies in the scrum approach. It is vital to have the engagement, leadership and support of the top management. Our Chairman of the Board Serhiy Chernenko is constantly involved in this decision-making process. And this is not just a matter of funding, this is slow, meticulous work of developing roadmaps, figuring out the various teams' priorities, diving deep into details, attending demos, etc.

We began with the training on scrum. Invited the bank's "Board -1" level employees. About 60 people came. At the start we had no clear understanding of the extent to which the bank is ready for the scrum approach, and the training became a sort of a litmus test. We spent the first day talking about how and why the world is changing and why we need to change ourselves to keep up with it.


| ![img](../images/reaching-50-mln-people.png) |
| :---: | 
| The length of time it took various technologies to reach 50 million users: from 68 years for the airline industry to 19 days for Pokemon Go | 

> We agreed that we were no longer satisfied with the old approaches to product development: they were too slow.

From the world of our parallel activities, the office change became a very important factor. We developed our office design to create a co-working space. We set the goal of removing all barriers to people's interaction to maximize the teams' cooperation. We have our scrum manifesto slogans posted on the lobby walls on every floor. 

| ![img](../images/pumb-new-office.png) |
| :---: | 
| The FUIB's new office, Ulitsa Spasskaya, 5. [Source](https://officesnapshots.com/2019/05/21/fuib-bank-offices-kiev/) |

I believe that the best conditions were created for us as a team: we had investments, understanding, the openness to experimentation. It was important that the bank's business units not only just supported us but actually led many of the directions of transformative change.

However, a single scrum training was, of course, not enough. We had to demonstrate a specific impact in a specific case. We proposed to create our first cross-functional team. This team was in Retail, and they undertook a facelift for one of the frontends in which employees of various departments worked.

Scrum rituals played an essential role. These rituals contain certain things that must be done no matter what. There's a backlog (the list of tasks awaiting being tackled), there are the concepts of retro, demo, etc. One of the key concepts, in which we enjoyed the powerful support of our Chief of Retail Sebastian Rubaj, is the need for a strong product owner on each team.

| ![img](../images/scrum-development-cycle.png) |
| :---: | 
| [Source](https://www.agile42.com/en/agile-info-center/scrum/scrum-cheat-sheet/) |

Even before forming the teams we demonstrated, using several examples, what it means to take a few people – a business customer, a developer, a systems analyst, a project manager, etc. – and lock them up in a room together for several hours. This was a real thing, we did it! They came out saying, "Wow! I got to know the developer who immediately explained why what I wanted done couldn't be accomplished and proposed an alternative solution instead. Right on the spot!"

The bank started investing in creating cross-functional teams, hiring new specialists from the marketplace.

We put together a team of frontend developers for various units, a mobile app team, a team that works in Consumer Credit, a team in the call center that works with the call center frontends. Each of the teams has a strong product owner: Yuriy Belotskiy, Mikhail Sergienko, Dmitriy Dudnik, Anna Kondratova, Sergei Karaulov. By the end of 2018 we have 7 cross-functional teams.

> In the process of transformation internal evangelists play a vital role. 

In the process of transformation internal evangelists play a vital role. An external partner, consultant, brings to the table their knowledge and competence, helps scale up the processes, but that alone is not enough. It is critical to have strong internal players who would contribute their experience and skills. My colleague Alexander Vaschuk as an internal coach conducted dozens of internal scrum and DevOps trainings and held several business simulation games. There is great interest in the company, and the lists of attendees fill up quickly. Our colleagues see that the work is in full swing, there are tangible end results. People from all sorts of units come to hang out with us in our co-working space, sometimes during the business hours, more often outside of them. Everyone's driven, we are changing.

> "Colleagues, get out of your slow-thinking head. You'll miss the boat. Go do MVPs, create prototypes, check your hypotheses, but do it all quickly, that's the main point."

More and more often I find myself saying in meetings, "Colleagues, get out of your slow-thinking head. You'll miss the boat. Go do MVPs, create prototypes, check your hypotheses, but do it all quickly, that's the main point." We show a famous picture of scooter and car.  


![img](../images/mvp-vs-waterfall.png)

#### What is MVP?

Team leaders, the product owners, greatly supported this idea. The bank readily adopted the approach of "create a prototype, test it, learn, and then either toss it or scale it up." This is how the "MVP" entered the bank's vocabulary. And that was mega important!

People started showing up at meetings with live demos instead of multi-slide presentations. Just show me what you were able to produce in your sprint, what value you managed to create, and then everything will become evident and clear through the eyes of a customer. Even if it's a small feature, even if it's relatively insignificant – but it can be touched, tested. It's live.

> Corezoid became a huge catalyst and facilitator of digital transformation at FUIB. Corezoid allowed us to significantly widen the bottleneck of our IT resources.

Corezoid became a huge catalyst and facilitator of digital transformation at FUIB. Corezoid allowed us to significantly widen the bottleneck of our IT resources. When there's a "digital core" in the form of a process engine, which is independently managed by the business itself, the organizational changes occur an order of magnitude faster. The business begins to freely organize its processes, thinking in MVP categories, building and improving prototypes. 

At some point, we at the bank's IT department started developing our own engine to manage business processes. People in IT are relatively ambitious, we often believe that we can do a better job than someone else. But in this case we had to bring our colleagues around. We focused on delivering value to our customers via digital channels, and selected a readymade, available process engine that has been tested in large-scale business cases.

To address various alternatives, such as, for example, Camunda and other open source systems: I have tried at least 2 major process management platforms, and both attempts flopped. The very ideology of process management has been around for a while. It is good and legit. But the idea has often been bought by people from IT or technologies close to IT, who then brought them to their companies.

When an IT person comes to business people and says, "Check out this cool thing! You grab this with your mouse, place it here, and it works," the business people may believe in it, many even invest money – but more often than not they are not prepared to actually start using it. The practice of implementing new systems demonstrates that such fancy, diverse platforms have very hard time sticking, one of the reasons being their complexity – the flip side of their robustness.

One very important factor is the level of knowledge and skills in business teams. Insufficient competence combined with complex systems result in inertia, mistakes and project failures. If the business has no idea what API is, how it can be used, what a process layer is, the game's over. Doesn't matter if it was open source or not.

> The entry threshold for starting to use Corezoid was very attainable, and this is a huge plus 

The entry threshold for starting to use Corezoid was very attainable, and this is a huge plus – if Corezoid were very complicated, business analysts would not have been involved in building business processes. One of the striking examples is event-based marketing, where our CRM team headed by Sergey Karaulov successfully develops processes based on Corezoid, prototyping the ideas, testing them, and offering customers products tailored to their profiles, behavior, and interests.

>  Now Corezoid – the bank's blood circulatory system! – is full of events.

Over the past year we at FUIB made a great leap forward, and this required certain reflection. It became evident at some point that a separate Corezoid competence center is now needed, and Middleware supported this idea. Our new competence center is now developing the culture of utilizing the platform, creating common standards, and acting as a knowledge hub at the confluence of various competencies. Now Corezoid – the bank's blood circulatory system! – is full of events. Naturally, business people have questions: how were things yesterday? What will happen tomorrow? Which unit created processes and how many? Who consumes IT resources and how much? Who owns the processes created with Corezoid?

It is imperative for the IT department to be able to answer the question of "how much will this cost me? How efficiently is my investment working?" Over time, we learned to allocate the capacities used by business units. But naturally this didn't happen overnight. We got there in 1-1.5 year.

> Over the past 1.5 year we made a quantum leap in how we do business

To sum up, I can say that over the past 1.5 year we made a quantum leap in how we do business. And this was really quite fast. Major market players tend to develop in an evolutionary manner. But our example shows that the bank could and did shift to a new paradigm. And it didn't take as much as we originally imagined: just the right, well-motivated team, the openness to change, the correct emphases on the level of technologies, and the understanding that IT=business, and business=IT.

