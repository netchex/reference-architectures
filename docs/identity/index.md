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
Most enterprise systems based on Windows use Active Directory (AD) for identity management. When you extend your network infrastructure to the cloud, there are several options for managing identity. 

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
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage bgdAccent1 cardScaleImage" style="background-image: url('./images/adds-extend-domain.svg');">
                            </div>
                        </div>
                        <div class="cardText">
                            <h3>Extend AD Domain Services (AD DS) to Azure</h3>
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
                            <h3>Create an AD DS resource forest in Azure.</h3>
                            <p>Host AD DS in Azure with a separate AD forest.</p>
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
                            <h3>Run Active Directory Federation Services (AD FS) in Azure.</h3>
                            <p>Use AD FS to perform federated authentication and authorization for your application running in Azure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>

## Considerations


### Azure AD

Azure AD is a straightforward way to implement a security domain in Azure. It is used by many Microsoft applications, such as Microsoft Office 365. 

You can use Azure AD to create a domain in Azure and link it to an on-premises AD domain. Azure AD enables you to configure single sign-on for users running applications accessed through the cloud.

Benefits:

* You don't need to maintain an Active Directory infrastructure in the cloud. Azure AD is entirely managed and maintained by Microsoft.
* Azure AD provides the same identity information that is available on-premises.
* Authentication can happen in Azure, reducing the need for external applications and users to contact the on-premises domain.

Considerations:

* Identity services are limited to users and groups. There is no ability to authenticate service and computer accounts.
* You must configure connectivity with your on-premises domain to keep the Azure AD directory synchronized. 
* You are responsible for publishing applications that users can access in the cloud through Azure AD.


### AD DS in Azure joined to an on-premises forest

An organization might need to use features that are provided by AD Domain Services (AD DS) but are not currently implemented by Azure AD. You can host AD DS on-premises, but in a hybrid scenario where elements of an application are located in Azure, it can be more efficient to replicate this functionality and the AD repository to the cloud. This approach can help reduce the latency caused by sending authentication and local authorization requests from the cloud back to AD DS running on-premises. 

This approach requires that you create your own domain in the cloud and join it to the on-premises forest. You create VMs to host the AD DS services.

Benefits:

* Provides the ability to authenticate user, service, and computer accounts on-premises and in the cloud.
* Provides access to the same identity information that is available on-premises.
* There is no need to manage a separate AD forest; the domain in the cloud can belong to the on-premises forest.
* You can apply group policy defined by on-premises Group Policy Objects to the domain in the cloud.

Considerations:

* You must deploy and manage your own AD DS servers and domain in the cloud.
* There may be some synchronization latency between the domain servers in the cloud and the servers running on-premises.


### AD DS in Azure with a separate forest

An organization that runs Active Directory (AD) on-premises might have a forest comprising many different domains. You can use domains to provide isolation between functional areas that must be kept separate, possibly for security reasons, but you can share information between domains by establishing trust relationships.

An organization that utilizes separate domains can take advantage of Azure by relocating one or more of these domains into a separate forest in the cloud. Alternatively, an organization might wish to keep all cloud resources logically distinct from those held on-premises, and store information about cloud resources in their own directory, as part of a forest also held in the cloud.

Benefits:

* You can implement on-premises identities and separate Azure-only identities.
* There is no need to replicate from the on-premises AD forest to Azure.

Considerations:

* Authentication for on-premises identities in the cloud performs extra network hops to the on-premises AD servers.
* You must deploy your own AD DS servers and forest in the cloud, and establish the appropriate trust relationships between forests.


### AD FS in Azure

AD FS can run on-premises, but in a hybrid scenario where applications are located in Azure, it can be more efficient to implement this functionality in the cloud.

This architecture is especially useful for:

* Solutions that utilize federated authorization to expose web applications to partner organizations.
* Systems that support access from web browsers running outside of the organizational firewall.
* Systems that enable users to access to web applications by connecting from authorized external devices such as remote computers, notebooks, and other mobile devices. 

Benefits:

* You can leverage claims-aware applications.
* It provides the ability to trust external partners for authentication.
* It provides compatibility with large set of authentication protocols.

Considerations:

* You must deploy your own AD DS, AD FS, and AD FS Web Application Proxy servers in the cloud.
* This architecture can be complex to configure.


<!-- Links -->

[aad]: https://azure.microsoft.com/services/active-directory/
