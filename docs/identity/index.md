---
title: Managing identity in Azure | Microsoft Docs
description: >-
  Explains and compares the different methods available for managing identity in
  hybrid systems that span the on-premises/cloud boundary with Azure.
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
---
In most enterprise systems based on Windows, you will use Active Directory (AD) to provide identity management services to your applications. When you extend your network infrastructure to the cloud you have some important decisions to make concerning how to manage identity. Should you expand your on-premises domains to incorporate VMs in the cloud? Should you create new domains in the cloud? Should you implement your own forest in the cloud or use [Azure Active Directory][aad] (Azure AD)?

The patterns & practices group has created a set of reference architectures to address these scenarios.

<ul class="cardsD refArchPanel x2">
    <li>
        <a href="./azure-ad.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/azure-ad.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Using Azure Active Directory</h3>
                            <p>Create a domain in Azure and link it to an on-premises AD domain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./adds-extend-domain.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/adds-extend-domain.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Extending AD DS to Azure</h3>
                            <p>Use Active Directory hosted in Azure joined to an on-premises forest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./adds-forest.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/adds-forest.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Create an AD DS resource forest in Azure.</h3>
                            <p>Use Active Directory in Azure with a separate forest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./adfs.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/adfs.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>AD FS in Azure.</h3>
                            <p>Implement Active Directory Federation Services (AD FS) in Azure</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>
