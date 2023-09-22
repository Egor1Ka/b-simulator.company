---
date: '2015-07-02'
url: 'case-5-call-routing-to-the-call-center'
next: 'pumb-begunov'
title: 'Case 5: Call routing to the Call Center'
description: 'Data on employee who made callback request, transferring it to the event for callback to customer, depending on customer phone number and phone number in SMS text...'
image: '/images/corezoid-call-center-call-routing.jpg'
category:
    - 'Use cases'
subcategory:
	- 'Enterprise'
tags:
    - 'fintech'
    - 'bank'
    - 'crm'
    - 'callcenter'
lang: 'en'
---

| Previous scheme | Scheme via Corezoid |
| :--- | :--- |
| Approval of an request — 7 days | Approval of an request — 0.5-2 hr. |
| Implementation — 32 hr. | Implementation — 1 hr. |

**Ms. Anna Antonova, a specialist on customer routing in the Call Center:**

I use filters to configure Corezoid, thus routing customer calls to the Bank’s call centers. Previously, these filters needed to be ordered from the CRM-system Department, I compiled technical projects, co-ordinated approvals of each document and waited. In total, it all took about two months. Now, a change of the current filter takes 15 minutes.

Corezoid is very easy to use, the main thing is to understand the logics of the techniques, and then everything is built by yourself. Before I create a business process I draw its block scheme on paper. This greatly simplifies all my further work.

Earlier routing calls was such:

| ![img](/images/corezoid-call-center-call-routing.jpg) |
| --- |

Responsibilities were divided between the CRM-system Department and the Corporate Phone Department. Now, everything is concentrated in the Corporate Phone Department. Plus, we have got the opportunity to divide the filters on routing and dynamic menus in IVR (system of pre-recorded voice messages), it looks like this.

| ![img](/images/corezoid-call-center-ivr.jpg) |
| --- |

For correct routing the customer request to the proper operator or to offer him/her a self-service channel, the customer data need to be checked in several systems, namely:

- requesting to the customer database — to receive an answer for his/her contact telephone number or obtaining the legal-entity’s ID;
- obtaining the customer products’ IDs;
- obtaining the ID on customers appertaining on to several pools;
- requesting to the Processing Center on checking a faulty customer card transaction.

Previously, all this was verified through services that were not linked, and only one answer could be obtained. Now all these checks are transferred to Corezoid, where a check on the necessary services is held and, depending on the response of the service, a decision which inspection should be next is taken and whether it is necessary. The response time to all inquiries is 1-10 seconds, allowing to route a customer to the right destination and to anticipate his/her needs.

Training with Corezoid is not over and I think that it will never end, because it is constantly being improved, adding new methods and logics. I almost do not apply to the developers now, except when it is necessary to elaborate or to modify API.

For me Corezoid is a versatile tool for constructing logics of business processes, it is very easy to use, allowing you to quickly make changes to the current processes and create new ones without any assistance.


