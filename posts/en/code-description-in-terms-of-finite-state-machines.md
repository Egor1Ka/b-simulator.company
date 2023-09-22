---
date: '2015-10-30'
url: 'code-description-in-terms-of-finite-state-machines'
next: 'pumb-begunov'
title: 'What are the benefits of code description in terms of finite-state machines?'
description: 'The ROI is actually substantial: less code combined with stronger waterproofing, increased parallelism and real-time events handling.'
image: '/images/state-machine-example.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'bpm'
    - 'fsm'
    - 'cloud'
    - 'api'
    - 'statemachine'
    - 'corezoid'
lang: 'en'
---

| ![img](/images/state-machine-example.jpg) |
| :---: |
| **State machine example** |

Imagine some code that needs to perform in sequence some API calls against a REST API. Or take another simple example: a process that receives events and must send them in batches to some processing backend. Fairly often the result of such tasks is a maze-like code. That result is either a mess (nobody will be able to understand and maintain that code) or over-engineering by building some complex framework.

| ![img](/images/hardcoding.png) |
| :---: |
| **Old approach. Hard-coded process.** |

| ![img](/images/corezoid-approach.jpg) |
| :---: |
| **New approach. Algorithm (process) based on finite-state machine at Corezoid.** |

Let's see how the theory of finite automata. can be helpful for us. Without getting into the details we are talking about a simple automaton that flows between a set of states.

A simple state machine has an initial state, a reset state and one or more processing states. Each state simply leads to the next one and any failure (explicit asserts or unexpected errors) trips the machine back to the reset state. This works like a one-fits-all sink that will guarantee you use one single code-path to perform tasks like cleaning-up variables or resetting a network connection.

The process batching events can then very nicely be turned into an automaton that maintains an input FIFO and defines a single spin state. The machine just de-queues one event at a time from the FIFO, processes it and loops back to that spin state. If anything bad happens (typically some downstream failure) I can simply assert & trip the automaton to reset it before looping back to the initial state.

Corezoid is perfect to implement such automata in a concise way. Once we finalized with a state we just fire the next one to ourselves. You can also pass contextual information between states that way. Another nice thing is that you can also couple several more automata and have them exchange messages.

| ![img](/images/corezoid-process-sample.jpg) |
| :---: |
| **Here is an example from the banking sector. An algorithm for mining a portfolio of debtors, where all objects (clients) are described in terms of finite state machines with explicit states. Events like phone calls, sms or e-mails run depending on the client states.** |

The node transition rules are described by users. The set of nodes creates a process.

Corezoid has the next semaphore types for node transition:

- **time** - transfer the request to a specified node at specified time.
- **count** - request counter in the node. It is used to start/stop escalation process.
- **go_if** - transition to a specified node on the condition.
- **go** - unconditional transition to the next node.
- **API** - API call outside of the Corezoid or Corezoid API.
- **callback** - requests changed by external system. Requests move to the callback node and wait the external system signal or go out of the node when the timer runs out.
- **code** - change request data through JavaScript/Erlang.
- **copy** - copy/modify request in a parallel Corezoid process.
- **rpc** - call another process as procedure.
- **reply** - return results of treatments. Equivalent to the command return.
- **sum** - sum of the values of a particular field of the request. It is used to predict the final result of the process.

The ROI is actually substantial: less code combined with stronger waterproofing, increased parallelism and real-time events handling.

Of course you need to re-think your logic a bit to map it to one or more automata, but instead you will be able to significantly reduce the amount of code hardcore, and quickly create new software products.

You can also use [the best practices](https://doc.corezoid.com/docs/tutorials) of process building based on finite-state machine, that we’re published on our site.
