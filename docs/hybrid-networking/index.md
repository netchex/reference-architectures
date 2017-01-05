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
series_title: Connect your on-premises network to Azure

ms.assetid: c7022bbb-b2fd-43f4-a557-6b511b79dd10
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/26/2016
ms.author: mwasson

---
Many organizations wish to integrate an existing on-premises infrastructure with Azure. A key part of this scenario is to establish a secure and robust network connection between the on-premises network and Azure.

The patterns &amp; practices group has created a set of reference architectures to address these scenarios.

<ul class="cardsD refArchPanel">
    <li>
        <a href="./expressroute.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/expressroute.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>ExpressRoute</h3>
                            <p>ExpressRoute connections are made using a private, dedicated connection through a third-party provider.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./vpn.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/vpn.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Site-to-site VPN</h3>
                            <p>Azure VPN Gateway can be used to create a virtual private network (VPN) connection</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./expressroute-vpn-failover.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/expressroute-vpn.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>ExpressRoute with VPN fallback</h3>
                            <p>For mission critical application, consider using ExpressRoute with a VPN connection as a fallback.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>