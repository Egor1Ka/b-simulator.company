---
date: '2016-02-18'
url: 'corezoid-vs-appian-bpm'
next: 'pumb-begunov'
title: 'Corezoid vs. Appian BPM. Event-driven vs. process-first philosophies.'
description: 'None of the existing BPM systems can operate with states because all of them are designed for operations with data received from external databases. If we consider this point in the context of our task, then for obtaining the states of clients and assets, Appian every time needs to do millions of database queries and run them through the entire process in order to check the relevance of states.'
image: '/images/corezoid-main-site.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'appian'
    - 'bpm'
    - 'processengine'
    - 'core'
    - 'lowcode'
    - 'workflow'
lang: 'en'
---

On September 25 an event named Gartner BPM Summit 2015 took place, at which the leading world experts in the BPM sphere began to feel a foundation subsidence, on which their careers were built.

**Summit attendees discussed topical issues which are already impossible to solve with BPM systems:**

1. **Situational tasks.** Digital business has many possibilities emerging during a short time period which require fast and flexible administration.
2. **Rapid introduction of operating changes.** To keep abreast of the times and run 24/7, business is obliged to change existing business processes operatively.
3. **Client-orientation.** Client expectations have reached an unprecedented level. They want personalized service. But the standard BPM architecture was not built for such variability and unpredictability of user expectations.
4. **Real-time.** Business is obliged to run in real time in order to adapt its processes on the fly.
5. **Internet of Things.** Installing sensors into each product and data collection has reached unparalleled levels. The time has come when businesses should have possibilities to collect data from numerous sources in order to improve user experiences.

Solving the range of non-trivial issues described above requires not to just fix the existing systems, but to move to a new paradigm of building business processes. This can be thought of as a "digital humanism" paradigm.

## Digital humanism

Let’s make clear the difference between conducting business based on "digital" principles and the conventional approach.

At the core of "digital humanism", business is initially considered as a client-oriented system, the goal of which is personalized satisfaction of multi-faceted and often unpredictable client expectations here and now.

At first sight, this definition is somewhat of a beautiful motto on which every kind of business is based and contains nothing new. But before evaluating it in this way, let’s consider the requirements for the architecture of business processes in the age of "digital humanism" in order to understand the principal differences between these approaches:

### Observe, but not ask

The conventional business model says that you should first ask clients what they want, and then build a product meeting their requirements. Everything is logical and pretty simple, isn’t it? Not really. If Steve Jobs had followed this approach, the world would never have seen such beautiful graphic interfaces, the MacBook, iPod, iPhone and the other revolutionary solutions from Apple.

But Jobs used intuition i.e. the "digital humanism" paradigm offering a more practical method. Business should use data forming a basis for models of users' needs and ways to satisfy these requirements. This means that now the task of determining the need for a new feature or a product goes not to the marketing team, but to processes. And this is the direction in which Google works.

### Improving visualization techniques

An interface built on the correct data visualization principles, helps not only to understand the context of the issue, but also gives a possibility of better structuring unrelated pieces of information into a single picture. Data collected at the previous step are just fact keepers, and their visualization is a key to an integrated contextual perception.

### Regulated processes

Design of business processes’ architecture must become a possibility to track the process life cycle, to understand the issue in context and, on the basis of data obtained, to make an optimal decision on process improvement.

### API is king

Applications and services should use architecture capable to exchange data via an API. This allows interacting with an unlimited number of parties of interest, which gives a company the possibility to operate with a large volume of resources and information.

### Artifact-oriented approach

In one of his speeches, Mark Carremans, Research Director with Gartner, suggested to replace the process-oriented approach with an artifact-oriented one for building business processes. The artifact-oriented approach is object-oriented and is more focused on data, business needs and the client’s life cycle, rather than on activity and control of dependencies.

Such an approach allows employees to focus on the key issues "what can be done?" and "what is required to reach the goal?" instead of solving issues "what must be done?" and "how to reach the goal?" The artifact-oriented approach provides larger flexibility and does not require complicated process handling.

## Corezoid in operation

And now it is time to consider the real example of solving the aforementioned issues with the help of Corezoid. A benchmark from the guild of BPM systems will be Appian, one of the best BPMs according to Gartner Magic Quadrant 2015.

By way of example, we will build a simplified process of controlling states of bank debtors' assets which should monitor the states of assets in real time and send notifications to clients in the event of a state change.

Notifications imply launching a multistage process of communications with the client via IVR, SMS, E-mail, etc.

Here is the process itself:

| ![img](/images/recoveries-portfolio-process.png) |
| --- |

1. Notifying the client about the distressed state of his/her debt
2. Notifying the client about making partial payment on the non-rescheduled debt
3. There was no credit activity for 30 days. Notifying the client about the need to make a payment on the non-rescheduled debt
4. Notifying the client about successful debt rescheduling
5. There was no credit activity for 30 days. Notifying the client about the need to make a payment on the non-rescheduled debt
6. Notifying the client about partial payment of a rescheduled debt
7. Notifying about full discharge of a non-rescheduled debt
8. Notifying about discharge of a rescheduled debt

## The first impression

### Corezoid

When entering the simple but informative Corezoid homepage, registration buttons and how to begin process building activity are clearly visible.

| ![img](/images/corezoid-main-site.jpg) |
| --- |

Unlike the majority of large BPM and CRM systems, you can start using Corezoid immediately after registration, not waiting for a manager to call you, and not purchasing the product. Corezoid gives you a free trial period of 1,000,000 cycles and providing capacity of up to 15 inquiries/sec.

To get started with Corezoid, companies don’t need to conduct a long and expensive integration. Due to the API-first architecture, you can transfer processes to Corezoid gradually and absolutely trouble free.

### Appian

The Appian Web-site meets us with attractive banners under abstract headers.

After half an hour of wandering the Web-site, we managed to find the registration form for the 30-day trial period. We were promised a call back to be informed of how and why we are going to use Appian. Two weeks passed, but no one called.

| ![img](/images/appina-main-site.png) |
| --- |

As we found out later, it is still impossible to enjoy adequate work with Appian BPM without product purchase and integration. But we persevered and hired an experienced freelancer-developer, who already uses Appian, to build a process and describe all his work step-by-step with indication of the time spent.

## Interface

### Corezoid

For building the first process in Corezoid, you only have to pass the first registration process and log in from an already existing Google account. You always use interfaces designed in the manner of Google Drive. If you have ever worked with Google products, you’ll find this interface familiar and rather convenient.

| ![img](/images/process-list.png) |
| --- |

We will not focus on creating and testing the first process; you can find detailed guidelines on the Corezoid Web page. It should only be noted that creating a new process takes two clicks, after which you go to the editor to build the whole logic of the business process.

| ![img](/images/corezoid-process-example.png) |
| --- |

By default, you create a basic process of three nodes: green node – start, blue – logic, red – final. On the left, there is the node editor where we state all the required logic of the selected node.

In the final analysis, in just two minutes after logging in, we have created a new process absolutely ready for filling with logic. Free, without integration or unnecessary manager interaction.

### Appian

As we did not have a possibility to launch a test version, we cannot name the objective terms of launch on Appian from scratch. But the integration guide states that Appian has predetermined connectors and frameworks for easier integration.

The Appian interface seems to be obsolete but it is rather functional. On top, you can see tabs for switching menu.

| ![img](/images/Appian_Corezoid_03_.png) |
| --- |
On the left, the "Processes" menu contains the list of all existing processes.

Creating a new process in Appian takes some more time:

1. First, create a folder with rules under which the new process will be operating.

| ![img](/images/Appian_Corezoid_02_.png) |
| --- |

2. Create global variables for rules.

| ![img](/images/Appian_Corezoid_03_.png) |
| --- |

| ![img](/images/Appian_Corezoid_04_.png) |
| --- |

3. After this, create a folder for new processes.

| ![img](/images/Appian_Corezoid_05_.png) |
| --- |

4. Create a new process

| ![img](/images/Appian_Corezoid_06_.png) |
| --- |

| ![img](/images/Appian_Corezoid_07_.png) |
| --- | 

5. On the right, you see an area for processes building, on the left, nodes with predetermined logic.

| ![img](/images/Appian_Corezoid_09_.png) |
| --- |

As you can see, creating a new process in Appian isn’t something too complicated but it requires a bit more time and isn’t so easily understood as in Corezoid.

## Process building

### Corezoid

As you have already understood, the basic element for building business processes in Corezoid is a node inside which all logic is stored. The list of the node logic operators consists of the most required semaphores:

| ![img](/images/Corezoid-messenger-bot-process.png) |
| --- |

#### Corezoid semaphores:

| Name | Parameter(s) | Description | Note |
| --- | --- | --- | --- |
| Task Counter (Alert when there is tasks queue) | maximum time, target node | If the time of the object presence in the node exceeds the maximum time, the object is transferred to the target node | does not modify the object, has priority, completes processing | 
| Time limit (Limit the time of the task in the node) | target node | The object is unconditionally transferred to the target node. It is the last command of the processing program	| does not modify the object, completes processing |
| Go | condition, target node | The condition is a conjunction in terms of comparing values of parameters of objects with the constants. If the condition is met, the object is transferred to the target node | does not modify the object, completes processing | 
| Condition | specific API method parameters| Synchronous call of an external API method in JSON, XML, SOAP formats. The object remains in the node while the API method is being executed. | modifies the object, processing continues
| API Call | external process URL | Synchronizing with an external process. The object remains in the node, until a response from the external process arrives | modifies the object, processing continues
Waiting for callback | language, code | Specified language (JavaScript or Erlang) code fragment is interpreted. Accesses the object parameters via the variable data.	 | modifies the object, processing continues | 
Code | a process, part of the object | The object may be partially copied to the starting node of another process | does not modify the object, processing continues | 
| Copy task | a process, part of the object | The object may be partially copied to the starting node of another process, thus causing processing of this object by another process. Once processing is complete, the called object must return the processed object by command RPC_REPLY. | modifies the object, processing continues |
| Modify task | The object is returned to the calling process. The process ID is stored in the node. | does not modify the object, processing continues |
| Call process | sum up where to, what to sum up | Values of certain parameters are summed up | does not modify the object, processing continues
| Reply to process | parameter name, value | A value is set to the object parameter. | modifies the object, processing continues |
| Sum | | The current object is transferred to the local queue. | does not modify the object, processing continues |
| Set parameter | process name, node name | The object is removed from the queue in the specified process and the node for processing | modifies the object, processing continues |

If this list is not sufficient for you, you can always select the "Code" logic type and write the required logic in JavaScript or Erlang.

To create a process in Corezoid, we just need to unwind all the client and assets’ states we are interested in and to consider the response to changes of these conditions’ states.

Fortunately, we solved this quite easy task just in the beginning of this article. This process took literally 5-10 minutes. Therefore, we shall now proceed directly to process creation.

We just have to transfer our scheme to the Corezoid editor. To do this, we create new nodes, add semaphores to ensure state changes and connect API of client notification services.

| ![img](/images/Corezoid-vs-Appian-create-new-node.png) |
| --- |
1. Create new nodes.

| ![img](/images/Corezoid-vs-Appian-add-more-nodes.png) |
| --- |
2. Add timers and call-backs.

| ![img](/images/Corezoid-vs-Appian-conditional-node.png) |
| --- |
3. Add conditional moves.

| ![img](/images/Corezoid-vs-Appian-api-call.png) |
| --- |
4. Connect API Twillio for notifications.

| ![img](/images/Corezoid-vs-Appian-full-process.png) |
| --- |
5. The process is ready.

Here, the process building is completed. Making the scheme, the process transfer to Corezoid, logic adjustment, API Twillio connection for notifying the clients and testing took only 1.5 hours for a business analyst. This means that in only 90 minutes you will obtain a new operational project.

### Appian

The basic elements for building business processes in Appian BPM are nodes with predetermined actions, events and logic. Business processes are built from the node combination.

| ![img](/images/Appian_Corezoid_09_.png) |
| --- |
1. Transfer the node for the database connection to the editor.

| ![img](/images/Appian_Corezoid_10_.png) |
| --- |
| ![img](/images/Appian_Corezoid_11_.png) |
| --- |
2. Adjust connection to the database.

| ![img](/images/Appian_Corezoid_12_.png) |
| --- |
| ![img](/images/Appian_Corezoid_13_.png) |
| --- |   
3. Create the process for receiving data from the database.

| ![img](/images/Appian_Corezoid_14_.png) |
| --- |
4. Adjust the obtained variables.

| ![img](/images/Appian_Corezoid_15_.png) |
| --- |
| ![img](/images/Appian_Corezoid_16_.png) |
| --- |
5. Adjust data routing states under the process.

| ![img](/images/Appian_Corezoid_17_.png) |
| --- |
6. Governed by the same logic, create other nodes for distributing process queries.

Our freelancer did not connect an API for sending notifications but Appian has this function as well. A good freelancer-developer with five years of work experience spent seven hours on the process comprehension and creation without connecting API-notifications.

## Let’s summarize

As we see, simple process creation on one of the most famous BPMs in the world is 4.5 times more time consuming than with Corezoid.

But the issue here is not only about the speed of launching new projects (and, thus, their cost). If you take a deep look into the approaches to the initial process implementation, you would be able to notice one important conceptual difference: BPMs use the process-first method of building business processes, and Corezoid uses the event-driven one.

| ![img](/images/corezoid-vs-appian-concept.png) |
| --- |

## What does this mean in practice?

None of the existing BPM systems can operate with states because all of them are designed for operations with data received from external databases.

If we consider this point in the context of our task, then for obtaining the states of clients and assets, Appian every time needs to do millions of database queries and run them through the entire process in order to check the relevance of states. At that, the more frequent database queries are, the worse this architecture performs because each query is a huge load on database servers and on the BPM, which causes deliberate underestimation of system capacity. Updating the state is just another database query.

Unlike BPM systems, Corezoid operates with states. Due to its architecture, Corezoid doesn’t need to make constant heavy database queries (if you remember, we want real-time communication), for all states that are stored in the nodes. At this, there is no limit to the number of objects in the node: already today Corezoid easily operates with 30,000,000 states (i.e., clients) in one node without significant load on servers. Updating the states, as you might already guess, is conducted without addressing the database, right inside the nodes.

| ![img](/images/appian-vs-corezoid-philosophies.png) |
| --- |

The principle of Corezoid’s operation can be described as follows: states generate processes, processes generate data, and data generate processes again. And further, having loaded data into Corezoid one time, you will be able to work with clients’ states in real time, using the minimal amount of resources without any risk to leave clients without notifications.

## Price

Purchase and integration of a BPM system for a large bank will cost several million dollars. At this, after the integration, companies use no more than 10-15% of the functionality. Conversely, you can start using Corezoid absolutely for free and service a whole bank’s cloud back-end with 25 million clients for no more than $20,000 per month (the salary of two developers in the USA).

| Criteria | Appian | Corezoid |
| --- | :---: | :---: |
| Test period | + | + |
| Ease of integration | - | + |
| Speed of processes building | - | + |
| Speed of making changes | + | + |
| Resource consumption | - | + |
| Flexibility | - | + |
| Real-time dashboards | - | + |
| Debug mode | + | + |
| Standardized notifications | + | - |
