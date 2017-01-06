---
title: Connecting your on-premises network to Azure | Reference Architectures | Azure | Microsoft Docs
description: Recommended architectures for secure, robust network connections between on-premises networks and Azure.
services: app-service,app-service\web,sql-database
documentationcenter: na
author: MikeWasson
manager: christb
editor: ''
tags: ''
layout: RefArchSeriesPage

ms.assetid: c7022bbb-b2fd-43f4-a557-6b511b79dd10
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/26/2016
ms.author: mwasson

series_title: Connect an on-premises network to Azure
columns: 3
articles:
  - id: expressroute
    title: ExpressRoute
    description: ExpressRoute connections are made using a private, dedicated connection through a third-party provider.
  - id: vpn
    title: Site-to-site VPN
    description: Azure VPN Gateway to create a virtual private network (VPN) connection.
  - id: expressroute-vpn-failover
    title: ExpressRoute with VPN fallback
    description: For mission critical application, consider using ExpressRoute with a VPN connection as a fallback.
---
Many organizations wish to integrate an existing on-premises infrastructure with Azure. A key part of this scenario is to establish a secure and robust network connection between the on-premises network and Azure.

The patterns &amp; practices group has created a set of reference architectures to address these scenarios.

{% include 'series' %}
