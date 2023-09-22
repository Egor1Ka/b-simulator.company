---  
date: '2016-05-05'  
url: 'corezoid-process-engine-overview'  
next: 'mambu-corezoid-cloud-state-machine'  
title: 'Corezoid Process Engine overview'  
description: 'This article discusses the functionality and competitive advantages of Corezoid cloud platform, showing its architectural features and providing application examples'
image: '/images/corezoid-favi.jpg'  
category:  
    - 'Use cases'
subcategory:  
	- 'Enterprise'
tags:
    - 'core'
    - 'streamprocessing'
    - 'processautomation'
    - 'statemachine'
lang: 'en'

---  
   

  **Abstract.** This article discusses the functionality and competitive advantages of Corezoid cloud platform, showing its architectural features and providing application examples.

####  **Introduction**  

**Corezoid** is a new original multi-purpose cloud platform for development, maintenance, management, execution, monitoring and optimization of software for automatic or automated business processes.  
  

Corezoid follows the modern Platform as a Service concept [1], the system has undergone an impressive development path and is available to everyone [2]. Corezoid brings together the latest technological advances in development and operation of application software. The basic programming language of Corezoid is Erlang [3], which provides the highest degree of concurrency and scalability. Corezoid implements an original behaviour model, in which using the terms of this article [4] you can see both data streams and state transitions, allowing to consider Corezoid as a paradigm of automated programming [5, 6].  
  

The article is organized as follows. In the first section, “Usage Model” we answer the question: what useful things can be made with Corezoid in the external world, i.e. we describe the platform’s functionality. Then, in the “Domain Model” section we introduce the glossary, i.e. determine the basic concepts specific to Corezoid. Further we show expanded descriptive examples to demonstrate the expressive power of Corezoid cloud platform. After that, two more formal sections – “Language Metamodel” and “Algorithmic Properties” – explain the theoretical base of the proposed platform. Finally, the conclusion of the article determines the competitive advantages of Corezoid cloud platform following on from the above.  
  
Discussed concepts are compactly represented by UML language diagrams [7].
 
  

#### **Usage Model**  

Corezoid cloud platform performs the **basic functions** shown in Figure 1.
  

|  ![img](/images/Figure1-Corezoid-usage-options.png)  |  
| :---: |  
|**Figure 1.  Corezoid usage options**|  
  


Regardless of the system there are **actors**, that is external hardware, software, or users interacting with the system. Within the system, there are 
**usage options**, i.e. description of the sequence of events/actions (scenarios) that deliver meaningful results for the actors.  
  

In this case, there are three actors corresponding to the following categories of users.
  

-   **Process Owner** — a category of users with the authority to create and delete business processes (process). Typically, process owners are responsible for the effectiveness and efficiency of their processes, and therefore process monitoring is considered an important result for them.
    
-   **Process Operator** — a category of users responsible for the operational management of business processes. If a business process involves manual intervention, it is usually delegated to the operator.
    
-   **Business Analyst** — a category of users involved in designing and perfecting business processes.  
      
    
At the top level, one can distinguish between eight usage options, two of which have a central role.  

-   **Modify process** — an advanced option of use allowing to determine a business process. Business process determining is represented by a set of charts in a special graphic editor. As a rule, process determining is done by a few iterations, with each subsequent iteration modifying and supplementing charts built at the previous iteration.
    
    + **Create process** and **Delete process** — simple options of use required to distinguish between user privileges.  
    
  
-  **Manage process run** — a combined option of use allowing to run execution of a business process. The same business process may be run in several instances both sequentially and concurrently. The option combines a number of particular use cases. 
  
   + **Intervene in process run** — all kinds of manual intervention in a process, if envisaged by regulations. 
    
   + **Monitor process run** — one of the Corezoid platform’s strongest competitive advantages is the availability of built-in tools for monitoring execution of business processes.  
    
    + **Launch and halt process run** — obviously essential options of use. Launch of a process comprises initial data load, while halting and terminating the process may comprise data upload, if necessary.  
  

#### **Domain model**  
  

**Domain Model** is a finite set of entities and concepts used in the domain, as well as a set of relations between these concepts. The Domain Model for Corezoid platform is shown in Figure 2.

A **business process** (abbreviated as **process**) is the most general concept of a platform being described. Generally speaking, a business process is a partially ordered set of actions (sometimes referred to as activities or tasks) aimed at achieving a specific purpose (production of goods, rendering of a service). In this case, the actions imply simple calculations and conversion of data portions (or recordsin terms of traditional database management systems), which are in this context called **objects**.

In itself, the Corezoid platform allows to manipulate objects, calculate their number, sum up numerical values in the objects, and so on. In some simple but nevertheless important cases, such as regarding many financial business processes, this proves already sufficient. However, the scope of the Corezoid platform is not restricted to this, as one of the most important tools of the platform is free interaction with any external applications through the **API** (application programming interface).  
  
External applications may well receive and process information from the real world and send management and informational signals back to the real world. Thus, the scope of the Corezoid platform business processes is restricted exclusively by the available **APIs**, while remaining virtually unrestricted.
  

A **node** (or a Corezoid) is a core concept of the platform being described. It is by the nodes that the originality and expressiveness of the Corezoid platform is demonstrated. A node determines what should be done to an object by means of a linearly ordered set of **functions**. The nodes can be of four types.  

The **starting node** is always one for a process and is used to specify the node actually to be the first to be run, as well as serves as a reference point for process debugging and tracing.  
  

The **final node** must be present in a process, but there may be more than one of them. Similarly to the starting node, the final node performs no action, while only recording the fact of an object processing completion in the node.
    

The **normal node** and the **escalation node** are semantically equivalent. Their differences are relative and introduced for descriptive reasons: these nodes are suggested to be marked with different colours in charts. It is thereby assumed that the process developer uses normal nodes to describe the ‘normal’ course of the process, while using escalation nodes to describe the response to exceptional conditions. Said concepts are shown on the left side of the diagram in Figure 2 and related to process description. On the right side of the diagram the entities are shown related to process execution. These two worlds are connected via the functions (commands) described in the nodes, and applied to tasks in node instances.
  

|  ![img](/images/Figure2-Corezoid-Domain-Mode.png)  |  
| :---: |  
|**Figure 2.  Corezoid Domain Model**|  
  

Name | Parameter(s) | Description | Note |  
----- | ----- | ----- | ----- |  
|  **[Condition](https://doc.corezoid.com/docs/condition-logic)**  | condition, target node | The condition is a conjunction in terms of comparing values of parameters of objects with the constants. If the condition is met, the object is transferred to the target node | does not modify the object, completes processing |  
|  **[API Call](https://doc.corezoid.com/docs/api-call-logic)**  | specific API method parameters | Synchronous call of an external API method in JSON, XML, SOAP formats. The object remains in the node while the API method is being executed | modifies the object, processing  |
|  **[Waiting for callback](https://doc.corezoid.com/docs/waiting-for-callback-logic)**  | external process URL | Synchronizing with an external process. The object remains in the node, until a response from the external process arrives | modifies the object, processing continues |  
| **[Code](https://doc.corezoid.com/docs/code)** | language, code | Specified language (JavaScript or Erlang) code fragment is interpreted. Accesses the object parameters via the variable **data** | modifies the object, processing continues |  
| **[Copy task](https://doc.corezoid.com/docs/copy-task-logic)** | a process, part of the object | The object may be partially copied to the starting node of another process | does not modify the object, processing continues |  
|  **[Modify task](https://doc.corezoid.com/docs/modify-task-logic)**  | a process, part of the object | The object can be modified if it is in the *“Waiting for callback”* or *“Set state”* node  | does not modify the object, processing continues |  
|  **[Call process](https://doc.corezoid.com/docs/call-process-logic)**  | a process, part of the object | The object may be partially copied to the starting node of another process, thus causing processing of this object by another process. Once processing is complete, the called object must return the processed object by command RPC_REPLY | выполнение продолжается |  
|  **[Reply to process](https://doc.corezoid.com/docs/reply-to-process-logic)**  |  | The object is returned to the calling process. The process ID is stored in the node. | does not modify the object, processing continues |  
|  **[Sum](https://doc.corezoid.com/docs/sum-logic)**  | sum up where to, what to sum up | Values of certain parameters are summed up | does not modify the object, processing continues |  
|  **[Set parameter](https://doc.corezoid.com/docs/set-parameter-logic)**  | parameter name, value | A value is set to the object parameter | modifies the object, processing continues |  
| **[Queue](https://doc.corezoid.com/docs/queue-logic)** |  | Creates a queue from tasks in that node where it was added. Tasks can be storaged in a queue before: 1) moment of request for getting it from queue through Get from Queue logic, 2) until timer works if it was specified in next fields `Additionally -> Limit the time of the task in the task in the node`  | does not modify the object, processing continues |  
|  **[Get task from queue](https://doc.corezoid.com/docs/get-from-queue-logic)**  | process name, node name | The object is removed from the queue in the specified process and the node for processing | modifies the object, processing continues |  
|  **[Delay](https://doc.corezoid.com/docs/delay-logic)**  | time | Used to delay the task in the node for the specified time | does not modify the object, processing continues | 
| **[Time limit (Limit the time of the task in the node)](https://doc.corezoid.com/docs/settings-additionally)** | time limit, target node | The time limit for the task stay in the node. After the time expires, the task goes to the specified node | does not change the task, has priority, completes processing |    
  

A **Function** is an element of the object processing program in a node. Each function has a tag, or a name that defines the executable command, as well as a set of parameters specific to the command. The general list of functions (commands) is provided in the table below.  


Functions in the node are ordered and executed in the order they have been recorded, with two functions – Function **Counter limit** and function **Time limit** – having priority and being executed first if present in the node and the conditions for their execution are met. These two functions allow you to avoid task queue overflow and avoid infinite hang-up of tasks in the nodes. The special status of these functions on the diagram №2 is underlined by the fact that they are brought to the properties of node instance.**


**Process run** is the actual implementation of a business process. Any process has a starting point and can have a finishing one, but there also may be permanent processes. Any process can undergo any number of runs, including those initiated in parallel. process run is performed by the **node instances**. The course of a process can be monitored and traced using **indicators** (or **dashboards**).  

An **indicator** is a means for observing and monitoring progress of a process. The following indicators are provided to show the statistics for the period and/or the instantaneous value in real time:  

-   the number of tasks incoming to the node;
    
-   the number of tasks outgoing from the node;
    
-   the total number of consumed clock cycles;
    
-   the number of consumed clock cycles selected by the process.

A **node instance** is a software object having ‘free will’. Each node instance is associated with a queue of **objects** to be processed. Node instances operate independently and asynchronously, as there is no ‘supervisor’ over them.  

Synchronization and interaction between node instances occur due to exchange of **objects**. Each node instance selects the next object from its queue, executes the prescribed functions that may have a *spin-off*, and subsequently sends the object for processing to another instance’s queue, and then immediately proceeds to processing the next object. Thus, nodes form a chain that processes the incoming sequence of objects at the maximum possible productivity ratio. 


An **object** implies passive data structure used to store and transfer information from one processing **node instance** to another during runtime. The Corezoid platform is revolutionary in processing objects, for there can be truly many: thousands and millions. Each object is a set of named **parameters**.  

A **parameter** has a **Name** and **Value**, and the Value can be both simple type and a nested task with its own parameters and values. Thus, the task is a hierarchical associative memory of “key-value” type.


#### **Descriptive examples**

The first example describes interaction of buyers and suppliers in terms of purchase and delivery of goods. This business process is well known to everyone, and if avoiding going into too much detail, it has a relatively simple structure (see figure 3).

| ![img](/images/Figure3-The-purchsing-process.png) |
| :---: |
|**Figure 3.  The purchsing process on the customer side**|


The purchase process is initiated by the buyer who places the order. In terms of the Corezoid platform this means that the object ‘order’ arising on the buyer’s side is transferred to the supplier using the **Copy task** function. The process called does not have to ‘know’ anything special about the calling process as all the necessary information is available in the object transferred. In other words, the interaction between the processes is performed by means of data rather than by management, thus rendering the processes as independent as possible.  
  

Further, the supplier’s process after a while responds to the incoming order by means of an invoice. The buyer’s process is waiting for the invoice to arrive. This is ensured by the **Waiting for call-back** function. If the response (invoice) is not received within a certain time with the time set on the buyer’s side, the purchase process will fail. Thus, although there is no common synchronized ‘supervisor’ of process interaction, no process will get stuck for an infinite period of time.


If everything goes correctly and the invoice arrives on time, this is confirmed by modification of the original order on the buyer’s side. This means that the invoice is created not as an object separate from the order, but is inherently linked to the specific order. Thus, the Corezoid platform allows to automatically eliminate errors such as ‘order number confused’ and ‘this is some other buyer’s invoice’. Note that here the case is taken into account where the supplier can refuse to complete the order for their own reasons (for this purpose it is sufficient for the supplier to set the parameter **order == false in the order**). 
Further, payment for the goods is made in a perfectly symmetrical manner, with the supplier now acting as a waiting party. The payment order is also created not as a separate object, but as one associated with the original order, which dramatically reduces the probability of errors and fraud. The same pattern is used for interaction in terms of supplying goods, after which the process ends at the same point where it had started, and the object ‘order’ completes its life cycle. Let us now consider the process on the supplier side, Figure 4.  


| ![img](/images/Figure4-The-purchasing-process.png) |
| :---: |
|**Figure 4.  The purchasing process on the supplier side**|


Let us use the same example of considering how descriptions of business processes are modified and improved on the Corezoid platform. Assume that on the supplier’s side the process becomes a bit more complicated in order to meet international quality management standards and the mandatory ‘feasibility study’ is carried out aimed at verifying that the supplier is capable of meeting all of its obligations, with the said verification made before invoicing (the ad slogan: “if you don’t like it, we will refund your money” no longer meets contemporary requirements).  
  

Modification of the process on the supplier’s side does not affect the process on the buyer’s side, which remains just as envisaged. Modifications on the supplier’s side are minimal and conservative with only one node added.  
  

In real life, existing processes do change and new processes occur! How should they interact with those already present?In this example, let us assume that, given growth of the business, a supplier steps away from expensive direct deliveries and transfers part of the process associated with delivery to a special logistics company (a warehouse), while focusing on production.  
  

One of the possible solutions using the Corezoid platform is shown by figure 5. It is clearly seen that nothing has changed on the buyer’s side and changes on the supplier’s side are minimal, fairly obvious and can be introduced literally ‘in process’.


| ![img](/images/Figure5-Adding-to-purchasing-process.png) |
| :---: |
|**Figure 5. Adding a third party to the purchasing process**|


It would not be an exaggeration to say that the Corezoid platform encourages business process reengineering and does not block development of a business.  
  
Consider another example which impressively demonstrates Corezoid’s possibilities in parallel and pipeline task processing, forming of task queues and process scaling. The example shows the processing of customer calls to a store. The general scheme of the business process is shown in the flowchart on Figure 6.

| ![img](/images/Figure6-Block-diagram.png) |
| :---: |
|**Figure 6.  Block diagram of the business process “Customer calls to the store by phone”**|

By means of Corezoid cloud platform this process is implemented as follows. Two processes are organized: the first process is responsible for maintaining the queues of customers calls (Figure 8), and the second process is responsible for processing of customer calls by the operator (Figure 9). Note that the first process “does nothing” – this process is only used to track changes in the state of calls, which are placed in appropriate queues. In this case, the events controlling the transitions of the call states in the first process will prompt the second process.

| ![img](/images/Figure7-Queue-of-customer-calls.png) |
| :---: |
|**Figure 7.  The process “Queue of customer calls”**|

| ![img](/images/Figure8-Taking-customer-by-operator.png) |
| :---: |
|**Figure 8.  The process “Taking customer by operator for processing”**|

####  Language metamodel

The Corezoid platform language has three levels:  
  

-   the user graphical interface level applies various control elements to execute general operations involving business processes such as creating and deleting processes, launching, debugging and halting processes, etc.;
    
-   the graphical editor level applies special charts to develop business processes and their interactions, as well as a means of execution monitoring (indicators);
    
-   the text editor level allows creating executable code fragments as well as setting complex parameters of such functions as API call method.  
      

A graphical interface provides a user with the following basic functions (Figure 9.):

- User Administration
    + Inviting users to the system
    + -   Creating user groups
      - Adding
      - Deleting
   
-   Managing charts
    + Creating
    + Editing
    + Viewing
    + Adjusting (Launch)
    + Testing
    + Granting access to users/user groups
    + Option of individual data loading via the interface
    + Option of data loading from files or via API

-   Reports
    + Generating
    + Editing
    + Viewing
    + Granting access to reports to users/user groups
    

| ![img](/images/Figure9-User-interface.png) |
| :---: |
|**Figure 9.  User interface commands of Corezoid process engin**|

Business processes are described by special charts, which are called **process charts** and **status charts**.  


A **status chart** describes transitions between data states, while being a key-value store with the option of retrieving data from any process chart.  
  
A **process chart** describes the business logic, sequence of calling external services or a execution of code fragments.

In graphic terms, both types of the charts are direct graph charts, i.e. consisting of nodes connected by arrows. The basic information load is in the nodes, while the arrows are no more than a means of improving visual clarity (figure 10).**


| ![img](/images/Figure10-Metamodel.png) |
| :---: |
|**Figure 10.  Metamodel of the process and state diagrams for Corezoid platform**|

The process graphs in the Corezoid system are subject to the following context conditions:  


-   there is only one starting node in each chart;
    
-   a starting node has a single outbound arrow and no inbound arrows;
    
-   each process diagram has final nodes, there may be several of them;
    
-   an end node has one or more inbound arrows, while having no outbound ones;
    
- each normal node or escalation node belongs to at least one path from the starting node to a final node.


Hence, a chart graph is considered a unilaterally connected directed graph without loops, i.e. a network with a single source and multiple stocks. The central element of the language is a set of functions in the node. The functions themselves have a simple structure (figure 11).  
  
A state diagram is a specialization of process diagrams. Differences between them are as follows. A **State Diagram** allows you only to store data and their status, modify data and run external processes. It makes it possible for you to call other processes as procedures, and it is unable to call API. A **Process Diagram** can run everything, but must necessarily have access to the final state (node). Therefore, it cannot store data forever.


| ![img](/images/Figure11-Functions.png) |
| :---: |
|**Figure 11.  Functions of Corezoid process engine**|

#### **Algorithmic properties**

Description of any cloud platform or programming system should give detailed answers to three questions:  
  
-   how the system works, that is, what happens when the algorithms are executed in this system; this property is called operational semantics;
    
-   what is the scope of applicability, that is, what algorithms may be described in this system; this property is called algorithmic completeness;
    
-   what is the expressive power of the system, that is, how convenient is it for programming.  
      
    

Different methods are applied to specify operational semantics. The simplest and most obvious way to answer the question “how the system works” is to present the algorithm of operation, that is, the interpreter of defined language written in any other language which is assumed to be known. The language of flowcharts or activity diagrams UML is one of the most common languages for algorithm description. Let us take the language of activity diagrams as a known language. For this case, Figure 12 shows the activity diagram that describes the interpretation algorithm continuously running at each node of the running process in the Corezoid cloud platform.

  

For the sake of brevity, this diagram has some simplifications compared to the actual implemented algorithm. In particular, not all actually diagnosed erroneous situations are disclosed, two functions related to the queue are missed, details related to the transformation of data formats in the organization of external API calls are not disclosed, the features of operation in starting and final nodes are not taken into account, etc. However, this diagram gives users a sufficient presentation on the algorithms of Corezoid platform. The nature of the main competitive advantages of Corezoid cloud platform: concurrency, pipeline processioning, data storage in the process can be traced quite clearly.

| ![img](/images/Figure12-The-algorithm-of-node.png) |
| :---: |
|**Figure 12.  The algorithm of node interpreting for Corezoid process engine**|


The property of algorithmic completeness has a somewhat academic nature. It is said that a programming system is algorithmically complete if any algorithm defined in an a priori complete programming system may also be defined in the system under consideration. The main procedure to prove algorithmic completeness is to use the means of programming system under consideration in order to build the interpreter of an a priori complete system. A Turing machine [8] is considered an algorithmically complete model. This model uses a potentially infinite tape divided into cells, in which the characters are written. There is a read/write head, which can move one cell to the left and right, as well as read characters from the tape, and write characters on the tape. Finally, there is a control device which uses two parameters, namely, the symbol read from the tape and current state, to define three parameters: the character that should be written on the tape, where to move, and what state to move. It is assumed that before the start of operation the tape has recorded characters of input data, the read/write head views the leftmost character, and the control device is in a somewhat initial state. Then, a Turing machine works as long as its control unit goes into the final state.
  

As a proof of algorithmic completeness and, at the same time, as an example of expressive force, we will demonstrate the implementation of a Turing machine interpreter based on the Corezoid platform. At the input, this interpreter accepts text command messages from the Turing machine and synthesizes an actually executable workflow based on the Corezoid platform that emulates the Turing machine’s operations delivered to the interpreter input. A block diagram of the interpreter is shown in Fig. 13.

| ![img](/images/Figure13-Turing-machine-interpreter.png) |
| :---: |
|**Figure 13.  Turing machine interpreter**|

The Turing machine interpreter in Corezoid is presented in Fig. 14. We see that a nontrivial algorithm is recorded in the Corezoid platform language quite naturally.  


| ![img](/images/Figure14-Corezoid-interpreter.png) |
| :---: |
|**Figure 14.  Corezoid process engine interpreter**|


The input interpreter process takes two parameters:  

-   **commands (array)** – a list of commands from the Turing machine
    
-   **proc_name** – a name of a new process  
      

As a result, we see the creation of a new process which, using the commands embedded therein, the team will convert into an incoming line.

The input data for the created process:

-   **input** – input data line.    

Output data:

- **output** – converted line.


**Example**
Based on commands

`“0q1-> 1q1R”, “1q1-> 0q1R”, “Bq1-> BSTOP”`

The interpreter creates a process which converts **input** `“000111”` into **output** `”111000”` (figure 15).

| ![img](/images/Fig15-Turing-Machine-synthesized-on-Corezoid.png) |
| :---: |
|**Fig.15. Turing Machine synthesized on the Corezoid platform that executes a bitwise inversion of a bit scale.**|

#### **Conclusion**


In general, Corezoid is a powerful advanced platform having a number of competitive advantages of which we consider the following three to be the most important.  
  
Corezoid is a **universal computing tool**. The platform allows to program any real business processes and handle any volumes of existing data without restrictions.

  
Currently the Corezoid platform is successfully used by various institutions in the following domains:

-   Financial institutions, fintech
    
-   E-commerce
    
-   Insurance
    
-   Medicine & Health
    
-   Logistics
    
-   Energy
    
-   Software Companies
    
-   Agriculture
    
-   etc.


Corezoid is an efficient and scalable platform. Its cloud computing and cloud data storage features provide for unlimited scalability, while the natural parallelism of the basic Erlang programming system enables processing of business process data virtually in real time.  
  
In particular:  
  
-   currently, the system executes 660,000 processes
    
-   tens of thousands of objects are processed per second


Corezoid is a **convenient environment** for prototyping and development of business process software. The ready-made cloud infrastructure provides for quick start, while requiring negligible overhead costs of studying programming technologies. A modern and elegant graphic chart editor supports visibility and an effective programming style. A developed system of indicators and debugging tools eliminates obstacles while transiting from a prototype to commercial operation. Direct experiments show:  
  

-   initial training takes 2 to 3 days
    
-   in total, more than 3,000 people have been trained
    
-   the speed of developing and processing Corezoid workflow is 4 times faster than BPM-like tools.  
      
We are confident that the Corezoid platform is the best choice for re-engineering and optimizing business processes not bound by the need to follow legacy solutions.


####  **References**

1.  Butler B., “PaaS Primer: What is platform as a service and why does it matter?” Network World, February 11, 2013.
    
2.  [https://new.corezoid.com/whitepapers/corezoid-whitepaper/](https://new.corezoid.com/whitepapers/corezoid-whitepaper/)
    
3.  [https://www.erlang.org/](https://www.erlang.org/)
    
4.  Bock C., Odell J., “Ontological Behavior Modeling”, Journal of Object Technology, Volume 10, (2011), pp. 3:1-36
    
5.  Shalyto A.A., Tukkel N.I.,” SWITCH-Technology: An Automated Approach to Developing Software for Reactive Systems” // Programming and Computer Software, 27(5), 2001.
    
6.  Shalyto A.A. “Logic Control and “Reactive” Systems: Algorithmization and Programming” //Automation and Remote Control. 2001. N1, pp. 1-29.
    
7.  Rumbaugh J., Jacobson I., Booch G., “The Unified Modeling Language Reference Manual”, (2nd Edition), Addison-Wesley, 1999.
    
8.  Hopcroft J., Motwani R., Ullman J.D. Introduction to Automata Theory, Languages, and Computation. — Addison-Wesley, 2001.
