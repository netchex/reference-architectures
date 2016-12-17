---
title: Azure Guidance | Microsoft Docs
description: Azure Reference Architectures
services: ''
documentationcenter: na
author: bennage
manager: marksou
editor: ''
tags: ''

ms.assetid: ef1257b3-c0cc-4e3d-bca1-a83085d1e8c4
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/24/2016
ms.author: christb

---

# Azure Reference Architectures
[!INCLUDE [pnp-header](_includes/header.md)]

Our reference architectures are arranged by scenario, with multiple related architectures grouped together.
Each individual architecture offers recommended practices and prescriptive steps, as well as an executable component that embodies the recommendations.
Many of the architectures are progressive; building on top of preceding architectures that have fewer requirements.

## Designing your infrastructure for resiliency
This series begins with recommended practices for optimal VM configuration and culminates in a multi-region deployment with failover.

* [Running a Windows VM on Azure](virtual-machines-windows/single-vm.md)
* [Running a Linux VM on Azure](virtual-machines-linux/single-vm.md)
* [Running multiple VMs for scalability and availability](virtual-machines-windows/multi-vm.md)
* [Running Windows VMs for an N-tier architecture](virtual-machines-windows/n-tier.md)
* [Running Linux VMs for an N-tier architecture](virtual-machines-linux/n-tier.md)
* [Running Windows VMs in multiple regions for high availability](virtual-machines-windows/multi-region-application.md)
* [Running Linux VMs in multiple regions for high availability](virtual-machines-linux/multi-region-application.md)

## Connecting your on-premises network to Azure
This series starts by demonstrating the ways to connect your existing network to Azure. Then it expands to cover requirements for availability and security.

* [Implementing a hybrid network architecture with Azure and on-premises VPN](hybrid-networking/vpn.md)
* [Implementing a hybrid network architecture with Azure ExpressRoute](hybrid-networking/expressroute.md)
* [Implementing a highly available hybrid network architecture](hybrid-networking/expressroute-vpn-failover.md)

## Securing your hybrid network
This series covers proven practices on creating DMZ in Azure to secure connections coming from your on-premises datacenter, and the Internet.

* [Implementing a DMZ between Azure and your on-premises datacenter](dmz/secure-vnet-hybrid.md)
* [Implementing a DMZ between Azure and the Internet](dmz/secure-vnet-dmz.md)

## Providing Identity services
This series starts by demonstrating how to use Azure Active Directory to provide user authentication in Azure. Then it expands to cover complex scenarios extending your ADDS infrastructure to Azure, and using ADFS for delegation.

* [Implementing Azure Active Directory](identity/azure-ad.md)
* [Extending Active Directory Directory Services (ADDS) to Azure](identity/adds-extend-domain.md)
* [Creating a Active Directory Directory Services (ADDS) resource forest in Azure](identity/adds-forest.md)
* [Implementing Active Directory Federation Services (ADFS) in Azure](identity/adfs.md)

## Architecting scalable web application using Azure PaaS
This series covers recommendations for constructing scalable and highly available web apps. 

* [Basic web application](app-service/basic-web-app.md)
* [Improving scalability in a web application](app-service/scalable-web-app.md)
* [Web application with high availability](app-service/multi-region-web-app.md)

