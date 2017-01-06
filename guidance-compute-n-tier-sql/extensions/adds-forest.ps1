[CmdletBinding()]
Param(
	[string]$SafeModePassword = "SafeModeP@ssw0rd",
	[string]$DomainName = "contoso.com",
	[string]$DomainNetbiosName = "CONTOSO"
)

$ErrorActionPreference = "Stop"

Install-windowsfeature -name AD-Domain-Services -IncludeAllSubFeature -IncludeManagementTools

Import-Module ADDSDeployment

$secSafeModePassword = ConvertTo-SecureString $SafeModePassword -AsPlainText -Force

Install-ADDSForest `
-SafeModeAdministratorPassword $secSafeModePassword `
-CreateDnsDelegation:$false `
-DomainMode "Win2012R2" `
-DomainName $DomainName `
-DomainNetbiosName $DomainNetbiosName `
-ForestMode "Win2012R2" `
-InstallDns:$true `
-NoRebootOnCompletion:$false `
-Force:$true