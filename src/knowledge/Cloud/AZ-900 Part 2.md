
# Security Groups

*rules within a network security group are evaluated based on their priority*

## Describe Network Security Groups
- designed to filter traffic to (*inbound*) and from (*outbound*) Azure resources located in Azure Virtual Network
- filtering controlled by rules
- ability to have multiple inbound and outbound rules
- rules are created by specifying
	- source/destination
	- protocol
	- port
	- direction

## Describe Application Security Groups
- feature that allows us to group virtual machines located in the Azure Virtual Network
- designed to reduce the maintenance effort

---

# Describe User-defined routes
- custom routes
- designed to override the default routing in Azure
	- add new routes
- managed via Azure Route Table resource
- associated with a zero or more Virtual Network subsets

---

# Describe Azure Firewall
- managed, cloud-based firewall service (PaaS)
- built-in high availability
- highly scalable
- inbound & outbound traffic filtering rules
- support for FQDN (*Fully Qualified Domain Name*)
- fully integrated with Azure monitor for logging and analytics

*by default all traffic through the firewall is blocked*

*Azure NSGs do not offer features for creating rules based on FQDN*

---

# DDoS Protection

DoS - denial of service

## Describe Azure DDoS protection service
- DDoS protection service in Azure
- designed to 
	- detect malicious traffic and block it while still allowing legitimate users to connect
	- prevent additional costs for auto-scaling environments
- two tiers
	- *Basic* - automatically enabled for Azure platform
	- *Standard* - additional mitigation and monitoring capabilities for Azure Virtual Network resources
- *Standard* tier uses ML to analyse traffic patterns for better accuracy

---

# Azure Identity Services

## Describe Azure AD
- identity and access management service in Azure
- identities management - users, groups and applications
- access management - subscriptions, resource groups, roles, role assignments, authentication and authorization settings etc.
- used by multiple Microsoft cloud platforms
- syncs with on-premises Active Directory via Sync services

## Describe Multi-factor Authentication
- process of authentication using more than one factor to prove identity
- factor types
	- knowledge factor
	- possession factor
	- physical characteristic factor
	- location factor
- supported by Azure AD

---

# Describe Azure Security Center
- centralised/unified infrastructure and platform security management service
- natively embedded in Azure services
- integrated with Azure Advisor
- two tiers
	- *Free* (Azure Defender OFF)
		- included in all Azure services, provides continuous assessments, security score and actionable security recommendations
	- *Paid* (Azure Defender ON)
		- hybrid security, threat protection alerts, vulnerability scanning, just in time (JIT) VM access, etc.

---

# Describe Azure Key Vault
- it is the secure storage for disk encryption keys in Azure
- it stores and manages the secrets for applications
- it is the secure storage for certificates
- managed service for securing sensitive information (PaaS)
- highly integrated with other Azure Services
	- VMs, Logic Apps, Data Factory, Web Apps
- centralisation
- access monitoring and logging

---

# Role-Based Access Control

*role*
- a collection of actions that the assigned identity will be able to perform

## Describe Role-Based Access Control
- authorisation system built on Azure Resource Manager
- designed for fine-grained access management of Azure resources
- role assignment is combination of
	- role definition
	- security principal
	- scope
- scopes are hierarchical
	- Management Groups > Subscriptions > Resource Groups > Resources
- built-in and custom roles are supported

---

# Describe Resource Locks
- designed to prevent accidental deletion and/or modification
- used in conjunction with RBAC
- two types of locks
	- *Read-only*
	- *Delete*
		- all actions except delete are allowed
- scopes are hierarchical (inherited)
	- Subscriptions > Resource Groups > Resources
- management groups can't be locked
- only **Owner** and **User Access Administrator** roles can manage locks (built-in roles)

---

# Describe Azure Resource Tags
- multiple resource tags to a single resource
- can also be used on a resource group level, and subscriptions
- simple *key-value* pairs
- designed to help with the organisation of Azure resources
- used for resource governance, security, operations management, cost management, automation etc.
- typical tagging strategies
	- *functional* - mark by function (ex: `environment=production`)
	- *classification* - mark by policies used (ex: `classification=restricted`)
	- *finance/accounting* - mark for billing purposes (ex: `department=finance`)

---

# Describe Azure Policy
- policies do not check for user permissions
- initiative - bundle multiple policies
- designed to help with resource governance, security, compliance, cost management etc.
- policies focus on resource properties
- policy *definition* - defines which properties should be checked and what should happen
	- define the condition and the effect (deny, audit, append, modify, etc.)
	- ex: *allowed resource types*, *allowed locations*, *allowed SKUs*, *inherit resource tags*
	- built-in and custom policies are supported
- policy *assignment* - assignment of a policy definition/initiative to a scope
	- scopes can be assigned to management groups, subscriptions, resource groups and resources
	- policies allow for exclusion of scopes

---

# Describe Azure Blueprints
- package of various Azure components (artifacts)
	- resource groups
	- ARM templates
	- policy assignments
	- role assignments
- centralised storage for organisationally approved design patterns
- blueprint *definition* - describing what should happen (reusable package)
- blueprint *assignment* - describing where it should happen (package deployment)

---

# Describe Cloud Adoption Framework
- set of tools, best practices, guidelines and documentation to help companies with the cloud adoption journey
- stages
	- *strategy* - understand why move and how to provide business value
	- *plan* - prepare actionable plan based on current digital assets and supporting current strategy
	- *ready* - prepare and align users, processes and environment (azure landing zone)
	- *adopt* - start move (migrate/innovate) based on the plan (implement the plan)
	- *govern* - align compliance and security standards and tools
	- *manage* - manage, monitor and optimise environment
- *Organise* - ensure everyone knows what to do and when (*RACI* matrix)
- documentation and communication of every stage is critical requirement for the process
- living document

## Strategy
(STEPS)
1. Motivations (*why move?*)
	- Motivation triggers
		- Migration
			- cost savings
			- reduction in complexity
			- operation optimised
			- increased business agility
		- Innovation
			- global scale
			- customer experience improvements
			- transformation of products or services
			- market disruption
2. Business Outcomes (*what to measure?*)
	- defined, concise and observable outcome captured by a specific measure
		- revenue
		- profit
		- cost
		- global access
		- new markets
3. Business Justification (*what is my ROI?*)
	- develop a business case to validate the financial model that supports our *motivations* and *outcomes*
		- **Azure TCO** (total cost of ownership calculator)
		- **Azure Pricing Calculator**
		- **Azure Cost Management**
4. First Project
	- Business Criteria
		- currently operating
		- dedicated owner
		- strong motivation to move
	- Technical Criteria
		- minimum dependencies and assets

## Plan
(STEPS)
1. Digital Estate (*inventory of assets*)
	- five R's of rationalisation
		- *Rehost* - take the existing application and move it to the cloud (IaaS)
		- *Refactor* - make small changes in the existing application in order to fit it into the PaaS offering from Azure
		- *Rearchitect* - make complex changes to the codebase (introduce new services) or the application strongly depends on the physical infrastructure of the company and is incompatible with the cloud
		- *Rebuild* - create application from scratch
		- *Replace*
2. Initial Organisational Alignment
3. Skills Readiness Plan
4. Cloud Adoption Plan

## Ready
(STEPS)
(all about preparing the first Azure env)
1. Azure Setup Guide
2. Azure Landing zone
3. Extend Landing zone
4. Best Practices

## Adopt
(STEPS)
- **Migrate**
	1. first migration
	2. migration scenarios
	3. best practices
	4. process improvements
- **Innovate**
	1. business value consensus (*value to strategy*)
	2. innovation guide (*tools*)
	3. best practices
	4. process improvements

## Govern & Manage
(STEPS)
1. define governance steps
	- comply, control and secure
2. manage cloud environment (*cloud operations*)
	- operate & optimize

---

# Security, Privacy & Compliance

**Microsoft Privacy Statement**
- personal data - collection, purpose and usage across different services
- describes the aforementioned information in the context of following Microsoft offerings
	- services
	- apps
	- website
	- software
	- servers
	- devices
- for *everyone*

**Online Services Terms**
- describes the legal agreement - licensing terms
	- what are allowed/disallowed
- describes the usage rights in context of online services of Microsoft
	- Azure
	- Dynamics 365
	- Office 365
	- Bing Maps
- designed for organisation's legal teams

**Data Protection Addendum**
- information of obligation between the company and Microsoft
	- processing & security
- appendix to Online Services Terms - describes the obligations in the context of the online services that we purchase from Microsoft
- focuses on data and security of the data when using those online

**Trust Center**
- one-stop shop for the company to review all of the information regarding security, compliance, privacy policies and best practices around Microsoft services
- provides information for all online services
	- Azure
	- Dynamics 365
	- Office 365
	- Bing Maps
- designed for anyone in the organisation

---

# Cost affecting factors
(*Key characteristics*)
- base cost
	- *resource types* - all Azure services (resources) have resource-specific pricing models, typically consisting of one or more metrics
	- *services* - Azure specific offers (Enterprise, Web Direct, CSP, etc.) have different cost and billing components like prepaid, billing cycles, discounts, etc.
	- *location* - running Azure services vary between Azure regions
	- *bandwidth* - network traffic when uploading (inbound/ingress) data to Azure or downloading (outbound/egress) from Azure
- savings
	- reserved instances
	- hybrid benefits

---

# Azure Cost Management
- centralised service for reporting usage and billing of Azure environment
- self-service cost exploration capabilities
- budgets & alerts
- cost recommendations - (*integrated with Azure Advisor*)
- automated exports

## Minimising costs
- *Azure Pricing Calculator* to choose low-cost region
	- good latency
	- where all the services are available
	- data sovereignty/compliance requirements
- hybrid use benefit and Azure reservations
- *ACM* monitoring, budgets, alerts and recommendations
- understand service lifecycle and automate environments 
- use autoscaling features to our advantage
- Azure Monitor to find and scale down underutilised resources
- usage of tags and policies for effective governance

---

# Azure Service Level Agreement (SLA)

*formal agreement between a service provider and a customer*

## Describe SLA
- promise of availability calculated per month
- each service has its own SLA
- ranges from 99% - 99.999%
- most of the free services don't have an SLA
- broken SLA means service credit return (discount)

**e.g.**
scenario: *users -> web app (99.95%)*
availability = 99.95%
unavailability = 100% - availability
				= 100% - 99.95%
				= 0.05%
unavailability in month = 730 *hours* \* 60 *minutes* \* 0.0005 *unavailability*
						= 43800 *minutes* \* 0.0005
						= 21.9 *minutes*
						= 21 *minutes* 54 *seconds*

**e.g. (Composite SLA) AND**
scenario: *users -> web app [S1] (99.95%) -> SQL [S2] (99.95%)*
availability = A[S1] \* A[S2]
				= 99.95% \* 99.95%
				= 0.9995 \* 0.9995
				= 0.99900025
				~ 99.9%

**e.g. OR**
scenario: *users -> load balancer (99.99%) -> web apps [S1,S2] (99.95% each)*
availability[S1,S2] = 100% - (U[S1] \* U[S2])
					= 100% - (0.05% \* 0.05%)
					= 1 - (0.0005 \* 0.0005)
					= 0.99999975
					~ 99.9999%
availability = 99.99% \* 99.9999%
				= 0.9999 \* 0.999999
				= 0.99989901
				~ 99.98%

## Factors that impact our SLA
- *To lower the SLA*
	- adding more services
	- using free/preview services
- *To raise the SLA*
	- adding redundancy
	- changing service config (e.g. zone redundant SLAs)

## SLA for Azure
- formal agreement between Microsoft and the customer
- calculated as a percentage of service availability
- higher tier services offer better SLAs
- free/preview services have no SLA
- composite SLA is combined SLA of all the application components

---

# Service lifecycle in Azure

*process of how every Azure service is released for public use*

*development -> public review -> general availability*
	*a part in dev = private preview*

## Public Preview
- no SLA
- some services have no support coverage
- limited region availability
- limited functionality
- pricing charges
- direction changes
- Azure Portal Previews

## Service Lifecycle
- every service in Azure follows its own lifecycle
- *Public Preview* is a 'beta' stage. of the service available to general public use
	- features can also be in its preview stages
	- designed for testing, not prod conditions
- *General Availability* is a 'production' release of the service

---
