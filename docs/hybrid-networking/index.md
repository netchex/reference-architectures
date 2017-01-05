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
series_title: Azure App Service

ms.assetid: c7022bbb-b2fd-43f4-a557-6b511b79dd10
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/26/2016
ms.author: mwasson

---
Azure App Service is a fully managed cloud service for hosting web applications and web APIs. However, most applications require more than just a web tier. For example, a typical application may use a database, cache, or CDN. Other considerations include deployment, diagnostics, and monitoring.

The patterns &amp; practices group has created a set of reference architectures to address these scenarios.

<ul class="cardsD refArchPanel">
    <li>
        <a href="./basic-web-app.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/expressroute.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>ExpressRoute</h3>
                            <p>Lorem ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./scalable-web-app.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/vpn.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Site-to-site VPN</h3>
                            <p>Lorem ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./multi-region-web-app.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/expressroute-vpn.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Hybrid with VPN fallback</h3>
                            <p>Lorem ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>