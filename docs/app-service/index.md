---
title: App Service | Reference Architectures | Azure | Microsoft Docs
description: Recommended architectures for a web applications running in Microsoft Azure.
services: 'app-service,app-service\web,sql-database'
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
series_title: Using Azure App Service
columns: 3
---

Azure App Service is a fully managed cloud service for hosting web applications and web APIs. However, most applications require more than just a web tier. For example, a typical application may use a database, cache, or CDN. Other considerations include deployment, diagnostics, and monitoring.

The patterns &amp; practices group has created a set of reference architectures to address these scenarios.

<ul class="cardsD refArchPanel x3">
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
                            <p>A basic web application using App Service plus Azure SQL Database.</p>
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
                            <p>Improves scalability by using Redis cache, CDN for static content, and WebJobs for long-running background tasks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./mutli-region-web-app.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/mutli-region-web-app.svg');">
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