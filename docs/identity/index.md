---
title:  Managing identity in Azure | Reference Architectures | Azure | Microsoft Docs
description: Explains some common architectures for deploying VMs that host enterprise-scale applications in Azure.
services: ''
documentationcenter: na
author: telmosampaio
manager: christb
editor: ''
tags: ''
layout: RefArchSeriesPage
series_title: Managing identity in Azure
ms.assetid: 0afd8bba-ce0c-438e-be82-70064808a956
ms.service: guidance
ms.devlang: na
ms.topic: article
ms.tgt_pltfrm: na
ms.workload: na
ms.date: 10/31/2016
ms.author: telmosampaio
series_title: Extending on-premises identity to Azure
columns: 2
---

Most enterprise systems based on Windows use Active Directory (AD) for identity management. When you extend your network infrastructure to the cloud, there are several options for managing identity. 

The patterns &amp; practices group has created a set of reference architectures that show some of the primary options.

<ul class="cardsD refArchPanel x2">
    <li>
        <a href="./aad.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/aad.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Integrate with Azure Active Directory (Azure AD)</h3>
                            <p>Use Azure AD to create a domain in Azure and synchronize it with an on-premises AD domain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
    <li>
        <a href="./adds-extend-domain.md">
        <a href="./multi-vm.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/adds.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Run AD Domain Services (AD DS) in Azure</h3>
                            <p>Host AD DS inside your Azure virtual network, joined to an on-premises AD forest.</p>
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
                            <h3>Run Active Directory Federation Services (AD FS) in Azure</h3>
                            <p>Use AD FS to perform federated authentication and authorization for your application running in Azure. </p>
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
