---
title: "Notes on Token Engineering: Discovery Phase"
permalink: "notes-on-token-engineering-discovery-phase"
date: 2023-01-24
updated: 2023-12-24
---

I recently finished the second module in Token Engineering Academy's TE Fundamentals series.

The module focuses on the discovery phase of token engineering, in which the engineer starts to translate a client's vision into a workable form. The course details the six steps in this phase by analyzing the design and core operations of automated market makers like Uniswap.

My detailed notes from the course are here. Here's a brief summary of the course content.


Step 1 – Defining System Goals

All systems have design objectives, reasons for being that drive their creation.

For cryptoeconomic systems, the aim is always to build an infrastructure for economic interactions between agents so that the system will achieve the objectives of all participants over the system’s full life cycle.

After defining the broad overall design objective, we must define more specific system goals. There are two natural categories of system goals found in all cryptoeconomic systems.

 * Economic Goals (ie: low cost of operation, low market risk)
 * Technical goals (ie: reliable operation, secure code)

Key Performance Indicators (KPIs) help us know if our goals are being met.


Step 2 – Defining System Requirements

Deriving system requirements requires a precise statement of what functionalities the system needs, and what properties are required for these to function.

Requirements will influence many aspects of system design such as eligible actions and parameters.


Step 3 – Stakeholder Definition and Analysis

After identifying goals and requirements we need to clearly identify internal and external stakeholders who impact our system, and their interactions.

Tools like the ecosystem design toolkit are helpful for determining stakeholders.

We can define roles by grouping stakeholders with similar attributes together. Creating member profiles helps us develop a strong understanding of the characters in the system.

Ultimately, we want to create incentives that encourage participants we want to be a part of our ecosystem. We also want to create disincentives that keep away agents with malicious intent.


Step 4 – Interactions and Value Transfers

Once we have a solid overview of the members in the system, we look at how they interact with and transfer value to each other.

The ecosystem motivation matrix and mapping workshops are tools we can use to define value transfers between all stakeholders. They help provide an overview of each member's motivation to participate.

Next we need to figure out how to use these factors to trigger specific actions and behaviors we view as desirable. We can use the Token Utility Canvas to help design an incentive structure to ensure everyone is motivated to perform the actions their roles requires.


Step 5 – Metrics Definition and Analysis

Now that we know what we want the system to do, we must ask– "how do we know if the system is actually doing what we want it to do?"

Metrics are used to help answer this question. There's no one right metric or correct process for determining metrics. It is helpful to have the ability to translate between words and mathematical formulas.

Metrics can also be used for external purposes such as evaluating the market and competitors.


Step 6 – Causal Relationships and Systems Thinking

The next step in the system design process is to identify causalities. Systems thinking is an indispensable tool for working with complex systems such as cryptoeconomic systems.

Identifying causalities helps us understand how different inputs and events will influence other parts and the overall state of the system. It helps us develop intuition about how the states may change over time.

Causal loop diagrams are used to clearly define causalities, but can only give us a qualitative understanding.

Stock and flow-diagrams help us represent system dynamics, they give us quantitative measures of how the quantity of stocks change over time through inflows and outflows.

Block Diagrams are another way to look at system dynamics. Block diagrams are used to visualize control systems and provide comprehensive yet simple overview of the system. They provide information that can be used to define the state space and its transitions.