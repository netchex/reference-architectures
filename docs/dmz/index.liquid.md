---
title: Protecting the cloud boundary in Azure | Microsoft Docs
description: Explains and compares the different methods available for protecting applications and components running in Azure as part of a hybrid system from unauthorized intrusion.
services: ''
documentationcenter: na
author: telmosampaio
manager: christb
editor: ''
tags: ''
layout: RefArchSeriesPage

ms.assetid: 879e0dcb-0485-4388-a10b-9a84e64c0055
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 11/23/2016
ms.author: telmosampaio

series_title: Protect the cloud boundary
columns: 2
articles:
  - id: secure-vnet-dmz
    title: Between Azure and on-premises datacenters
    description: Create a DMZ (also known as a perimeter network) to filter traffic between Azure and your on-premises network.
  - id: secure-vnet-hybrid
    title: Between Azure and the Internet
    description: Add a second DMZ to filter traffic between Azure and the Internet.
---
An on-premises network can be connected to a virtual network in Azure by using an Azure VPN gateway. The network boundary between these two environments can expose areas of weakness in terms of security, and it is necessary to protect this boundary to block unauthorized requests. Similar protection is required for applications running on VMs in Azure that are exposed to the public Internet.

The patterns &amp; practices group has created a set of reference architectures to address these scenarios.

{% include 'series' %}
