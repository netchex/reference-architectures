---
title: Managing identity in Azure | Microsoft Docs
description: Explains and compares the different methods available for managing identity in hybrid systems that span the on-premises/cloud boundary with Azure.
services: ''
documentationcenter: na
author: telmosampaio
manager: christb
editor: ''
tags: ''
layout: RefArchSeriesPage

ms.assetid: 5448175d-d763-45ee-acd7-a714ad260876
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/27/2016
ms.author: telmosampaio

series_title: Extending on-premises identity to Azure
columns: 2
articles:
  - id: azure-ad
    title: Using Azure Active Directory
    description: Create a domain in Azure and link it to an on-premises AD domain.
  - id: adds-extend-domain
    title: Extending AD DS to Azure
    description: Use Active Directory hosted in Azure joined to an on-premises forest.
  - id: adds-forest
    title: Create an AD DS resource forest in Azure.
    description: Use Active Directory in Azure with a separate forest.
  - id: adfs
    title: AD FS in Azure.
    description: Implement Active Directory Federation Services (AD FS) in Azure 
---
In most enterprise systems based on Windows, you will use Active Directory (AD) to provide identity management services to your applications. When you extend your network infrastructure to the cloud you have some important decisions to make concerning how to manage identity. Should you expand your on-premises domains to incorporate VMs in the cloud? Should you create new domains in the cloud? Should you implement your own forest in the cloud or use [Azure Active Directory][aad] (Azure AD)?

The patterns & practices group has created a set of reference architectures to address these scenarios.

{% include 'series' %}
