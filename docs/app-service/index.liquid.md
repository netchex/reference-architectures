---
title: App Service | Reference Architectures | Azure | Microsoft Docs
description: Recommended architectures for a web applications running in Microsoft Azure.
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

series_title: Using Azure App Service
columns: 3
articles: [
    {
        id: 'basic-web-app',
        title: 'Basic web app',
        description: 'A basic web application using App Service plus Azure SQL Database.'
    },
    {
        id: 'scalable-web-app',
        title: 'Scalable web app',
        description: 'Improves scalability by using Redis cache, CDN for static content, and WebJobs for long-running background tasks.'
    },
    {
        id: 'mutli-region-web-app',
        title: 'Multi-region web app',
        description: 'Improves availability by running in multiple regions, using Traffic Manager to fail over if the primary region goes down.'
    }
]
---

Azure App Service is a fully managed cloud service for hosting web applications and web APIs. However, most applications require more than just a web tier. For example, a typical application may use a database, cache, or CDN. Other considerations include deployment, diagnostics, and monitoring.

The patterns &amp; practices group has created a set of reference architectures to address these scenarios.

{% include 'series' %}