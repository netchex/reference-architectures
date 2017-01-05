---
title: Virtual Machines (Windows) | Reference Architectures | Azure | Microsoft Docs
description: Explains some common architectures for deploying VMs that host enterprise-scale applications in Azure.
services: ''
documentationcenter: na
author: telmosampaio
manager: christb
editor: ''
tags: ''
layout: RefArchSeriesPage
series_title: Run Windows VM workloads in Azure

ms.assetid: 0afd8bba-ce0c-438e-be82-70064808a956
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/31/2016
ms.author: telmosampaio

---
Running a virtual machine (VM) in Azure involves more moving parts than just the VM itself. Other considerations include networking, load balancers, network security groups (NSGs), and redundancy within a region or across multiple regions.

The patterns &amp; practices group has created a set of reference architectures to address these considerations.
These reference architectures build on each other, starting from deploying a single VM, moving to multiple VMs behind a load balancer, VMs running N-tier applications, and finally multi-region deployments.</p>

<ul class="cardsD refArchPanel x2">
    <li>
        <a href="./single-vm.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/single-vm.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Single VM</h3>
                            <p>Baseline recommendations for running any Windows VM in Azure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./multi-vm.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/multi-vm.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Load-balanced VMs</h3>
                            <p>For higher availability, run multiple VMs behind a load balancer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./n-tier.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/n-tier.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>N-tier application</h3>
                            <p>Within each tier, load balancers distribute traffic across multiple VMs. The database is replicated using SQL Server Always On Availability Groups.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="multi-region-application.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/multi-region.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Multi-region application</h3>
                            <p>An application deployed to a single region could become unavailable if an incident occurs within that region. For mission-critical applications, consider deploying to more than one region.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>