---
title: Architectures for running VM workloads in Azure | Microsoft Docs
description: Explains some common architectures for deploying VMs that host enterprise-scale applications in Azure.
services: ''
documentationcenter: na
author: telmosampaio
manager: christb
editor: ''
tags: ''
layout: RefArchSeriesPage

ms.assetid: 0afd8bba-ce0c-438e-be82-70064808a956
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/31/2016
ms.author: telmosampaio

series_title: Run Linux VM workloads in Azure
columns: 2
articles:
  - id: single-vm
    title: Single VM
    description: Baseline recommendations for running any Linux VM in Azure.
  - id: ../virtual-machines-windows/multi-vm
    title: Load-balanced VMs
    description: For higher availability, run multiple VMs behind a load balancer.
  - id: n-tier
    title: N-tier application
    description: Within each tier, load balancers distribute traffic across multiple VMs. The database is replicated using SQL Server Always On Availability Groups.
  - id: multi-region-application
    title: Multi-region application
    description: An application deployed to a single region could become unavailable if an incident occurs within that region. For mission-critical applications, consider deploying to more than one region.
---
Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.

The patterns & practices group has created a set of reference architectures to address these considerations. 

{% include 'series' %}
