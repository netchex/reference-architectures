---
title: App Service | Reference Architectures | Azure | Microsoft Docs
description: Recommended architectures for a web applications running in Microsoft Azure.
services: app-service,app-service\web,sql-database
documentationcenter: na
author: MikeWasson
manager: christb
editor: ''
tags: ''
layout: HubPage

ms.assetid: c7022bbb-b2fd-43f4-a557-6b511b79dd10
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/26/2016
ms.author: mwasson

---
<div id="main" class="siteHome">
    <div class="container">

[!INCLUDE [pnp-branding](../_includes/header.md)]

<ul class="cardsD panelContent singlePanelContent" style="display: flex; margin-top: 0px;">
    <li class="fullSpan">
        <div class="container">
            <h1>Azure App Service reference architectures</h1>

<p>Azure App Service is a fully managed cloud service for hosting web applications, mobile app back ends, and web APIs. However, most applications require more than just a web tier. A typical application may use a data tier, cache, and CDN. Other considerations include deployment, diagnostics, and monitoring.</p>

<p>The patterns &amp; practices group has created a set of reference architectures to address these scenarios. Each reference architecture includes:</p>

<ul>
<li>An architecture diagram, showing the components that make up the architecture.</li>
<li>Recommendations and best practices.</li>
<li>Considerations for availability, security, scalability, and manageability.</li>
</ul>


        </div>
    </li>
    <li>
        <a href="./basic-web-app.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/basic-web-app.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Basic web app</h3>
                            <p>A basic web application using Azure SQL Database.</p>
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
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/scalable-web-app.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Scalable web app</h3>
                            <p>Improves scalability by using cache, CDN, and queues for long-running tasks.</p>
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
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/multi-region-web-app.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Multi-region web app</h3>
                            <p>Improves availability by running in multiple regions, using Traffic Manager to fail over if the primary region goes down.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    </ul>
</div>
</div>
