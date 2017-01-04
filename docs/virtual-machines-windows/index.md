---
title: Virtual Machines (Windows) | Reference Architectures | Azure | Microsoft Docs
description: Explains some common architectures for deploying VMs that host enterprise-scale applications in Azure.
services: ''
documentationcenter: na
author: telmosampaio
manager: christb
editor: ''
tags: ''
layout: HubPage

ms.assetid: 0afd8bba-ce0c-438e-be82-70064808a956
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/31/2016
ms.author: telmosampaio

---
<div id="main" class="siteHome">
    <div class="container">

[!INCLUDE [pnp-branding](../_includes/header.md)]

<ul class="cardsD panelContent singlePanelContent" style="display: flex; margin-top: 0px;">
    <li class="fullSpan">
        <div class="container">
        <h1>Running VM workloads</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie orci ut auctor porta. Aenean rhoncus eros nec urna eleifend bibendum. Vestibulum pulvinar ipsum bibendum sapien ullamcorper porttitor. Sed cursus et tellus ut semper. Integer suscipit odio et pellentesque vestibulum. Phasellus et velit sit amet magna maximus laoreet. Nulla feugiat commodo tincidunt. Sed non elementum ex, a tempus quam. In mattis auctor mauris, sed finibus tortor scelerisque laoreet. Nulla facilisi. Mauris tempor a mauris et sagittis. Cras in diam ac enim fermentum iaculis vel at purus. Nam sed fermentum nulla, et tincidunt massa.</p>
        </div>
    </li>
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
                            <p>failover yo!</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    </ul>
</div>
</div>

