
# Virtual machines

*simply virtualised servers running on Azure hardware*

## Virtual machines provide flexible options
- IaaS
	- scalable
	- flexible
	- more responsibility lies with the customer
- many sizes for different workloads
- customisable from OS to purpose-built images

## Deploying VMs
- Azure Console - *deployment wizard*
- scripted deployments via *Azure CLI* or *PowerShell*
- Azure Resource Manager (ARM) templates
- third party tools such as Ansible or Terraform

## Deploying with PowerShell
- *Az.Compute* module
	- *New-*
	- *Get-*
	- *Start-AzVM*
	- *Stop-AzVM* - this does not deallocate the VM
- **Lab -** creating a virtual machine
	- to get the existing resource group
		`Get-AzResourceGroup`
	- to create a new Azure VM
		`new-azvm -ResourceGroupName '{resource group name}' -Name 'TestVM' -VirtualNetworkName 'MyVNet' -SubnetName 'MySubnet' -PublicIpAddressName 'myPubIP' -OpenPorts 80,3389`
	- then asked for user and password
		- user - `azureuser`
		- password
	- to get public IP address
		`Get-AzPublicIpAddress`

## Deploying with Azure CLI
- `az vm show`
	- *az* - initiator
	- *vm* - module
	- *show* - command
- interactive mode - `az interactive`

## Deploying with ARM Templates
- pre-configured scripts to deploy single machines or whole environments
- written in JSON
- templates can be
	- single file
	- multiple modularised templates
- can be deployed via
	- Azure Portal
	- Azure CLI
	- PowerShell
	- RestAPI
	- GitHub
	- Cloud Shell

## System Availability
- *virtual machine scale sets*
	- rapid and automated performance scaling
- backups of data
- build with an expectation of failure

## **LAB -** Backup policy for an Azure VM
- *scenario* - VM to be backed up on a basis of every 24 hours
- To do
	- configure recovery services vault
	- configure backup policy
- **Steps**
	- create - *Backup and Site Recovery*
	- *Recovery Services Vault*
		- Subscription
		- Resource group
		- Vault name
		- Region
	- go to resource
	- navigate to *Backup policies*
		- *Add*
		- policy type - *Azure Virtual Machine*
	- navigate to *Virtual Machines*
	- *Operations -> Backup*
		- choose vault
		- choose backup policy

## **Lab -** Virtual Machine monitoring
- to enable monitoring for a VM
	- send OS-level logs and metrics data to Azure Monitor Logs (Log Analytics) for advanced analysis
- VM extensions - leveraged *to gain access to guest* OS-level metrics and logs
- Log Analytics Workspace - the Log Analytics agent *sends metrics and log data from the OS to a Log Analytics workspace*
- **Steps**
	- to create Log Analytics workspace
		- Subscription
		- Resource Group
		- Name
		- Region
	- *go to resource*
		- connect to a data source - (virtual machine)

## ARM Templates
- templates are divided into 8 JSON elements
- only 3 required elements
	- *$schema* - version of the template language
	- *contentVersion* - version of the template
	- *resources* - defines what is to deployed or updated
```json
{
	"$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json",
	"contentVersion": "1.0.0",
	"apiProfile": "",
	"parameters": { },
	"variables": { },
	"functions": [ ],
	"resources": [ ],
	"outputs": { }
}
```

## **Lab -** Deploy a small environment using ARM template
- *scenario*
	- deploy three things
		- Virtual Network with 2 subnets
		- Storage account
		- fully configured Virtual Machine
- **Steps**
	- *Home* -> *Deploy a custom template* -> build our own template
	- Add resource
		- Virtual Network
		- Windows Virtual Machine

---

# Containers

## Creating container using Azure CLI
- `az container create` command
```shell
az container create \
	--resource-group AzureDale \
	--name Compute-WoodContainer \
	--image <path or URL to container image> \
	--dns-name-label azdl-container \
	--ports 80
```

## Creating container using PowerShell
- `New-AzContainerGroup`
```PowerShell
New-AzContainerGroup
-ResourceGroup AzureDale
-Name Compute-WoodContainer
-Image <path or URL to container image>
-OsType Windows
-DnsNameLabel azdl-container
```
- using PowerShell, container is going to default port 80

*Container groups* - all the resources that are pertinent to our container

## **Lab -** Deploy a container to Azure Container Instances
- **Steps**
	- navigate to *Container instances*
	- *Create container instances*
	- ...

## **Lab -** Using Azure Web Apps with Containers, Linux and Cloud Shell
- *Create Linux App Service Plan*
	- **Steps**
		- navigate to