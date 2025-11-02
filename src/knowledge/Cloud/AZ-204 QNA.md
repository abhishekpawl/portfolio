
# Azure App Service Overview

- shared responsibility model
	- on-premises
	- IaaS
	- PaaS
		- e.g. Azure SQL
	- SaaS
		- e.g. Office365

## App Service
- http-based service for hosting applications, RestAPIs, mobile backends
- development can be done in various languages
	- .Net, Java, Ruby, NodeJS, PHP, Python
- adds the power of Azure and DevOps capabilities
- **Web App**

## Key features
- *ability to use multiple language and frameworks*
- *managed production environment*
	- app services automatically patches and maintains the OS and language frameworks
- *containerisation and docker*
	- we can dockerise our app and host a custom windows or linux container
- *DevOps optimisation*
	- we can set up CI/CD with Azure DevOps, GitHub, Bitbucket, Docker Hub, or Azure Container Registry
- *global scale with high availability*
	- scale up or out/in manually and automatically
- *connections to SaaS platforms and on-premises*
	- more than 50 connectors for enterprise (such as SAP), SaaS services (such as Salesforce), and internet services (such as Facebook)
- *security and compliance*
	- App Service is ISO, SOC and PCI compliant
- *application templates*
	- templates are available in the Azure Marketplace, such as WordPress, Joomla, and Drupal
- *Visual Studio and Visual Studio Code integration*
	- dedicated tools streamline the work of creating, deploying and debugging
- *API and mobile features*
	- provides turn-key Cross-Origin resource sharing (CORS) support for RESTful API scenarios, and enables authentication, offline data sync, push notifications and more
- *serverless code*
	- we can run a code snippet on-demand without having to explicitly provision or manage infrastructure

---

# App Service Plan

the pricing tiers available to our app service plan depend on the operating system selected at the creation time

## Pricing tiers
- **Shared Compute**
	- Free
	- Shared
	- (resources can not scale out)
- **Dedicated Compute**
	- Basic
	- Standard
	- Premium
	- Premium V2
	- (only apps in the same app service plan shares the same compute resources)
- **Isolated**
	- (run dedicated azure virtual machines on dedicated azure virtual networks)
	- (provides the maximum scale out capabilities)

---

# OS and runtime patching

- OD and application stack are managed by Azure
- Monthly OS patching
	- physical servers
	- guest virtual machines
- Stable versions of application runtimes are periodically added to App Services
	- some are installed side by side, while others replace existing versions
	- we can manually migrate from one application runtime to another 

## Inbound and Outbound IP addresses
- each app has a single inbound IP address
	- regardless of scale-out quantity 