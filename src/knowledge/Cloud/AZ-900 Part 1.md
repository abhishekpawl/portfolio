
# Describe Cloud Computing
- Delivery model for services like
	- storage
	- compute power resources
	- networking
	- analytics
- (over the internet)
## Describe Scalability
- scaling is a process of
	- *allocating* or
	- *deallocation* resources
- **vertical scaling**
	- increasing the size of the resource basically means adding more power
	- scaling up/down
- **horizontal scaling**
	- scaling by adding more resources
	- increasing the amount
	- scaling out/in

## Describe Elasticity
- users v/s time
- ability to automatically allocate and deallocate resources whenever needed - *automatic scaling*
- scale dynamically

## Describe Agility
- requesting resources takes time

|Cloud|On-premises|
|:---:|:---:|
|seconds, minutes & hours|days, weeks & months|
- the ability to react quickly
- in the cloud - the ability to allocate and deallocate resources quickly

## Describe Fault Tolerance
- the services that we use from the cloud are stored or run on servers in data centres
- the data is stored in disk arrays
- whenever there is any component failure they are automatically moved on to others to ensure no data is lost
- the ability of the system to *remain up and running during component and service failures*

## Describe Disaster Recovery
- simply means creating *two copies of the same application* in two azure regions and then setting up *replication in between them*
- setting up *DNS routing* for the two applications
- the ability of the system to *recover* from an event that has taken down the service

## Describe High Availability
- uptime v/s downtime of the system
- availability = *uptime / (uptime + downtime)*
- availability is a measure of system uptime for users/services
- the ability to *keep services running* for *extended periods of time with very little downtime*

---

# Describe the Principle of Economies of Scale
- as the company grows, they become more effective at managing shared components
- so companies save more, which in return, allows for reduction in cost of their services
- as the company grows, the price per unit lowers

---

# Describe CapEx v/s OpEx
- Capital Expenditure **CapEx**
	- own infrastructure
	- big initial investment
	- buy static server capacity
	- lots of maintenance required
		- support staff
		- power & networking
		- hardware failures etc.
- Operational Expenditure **OpEx**
	- rent infrastructure
	- no initial investment, only pay for what we use
	- minimal maintenance
		- operations team

|Differences|CapEx|OpEx|
|:--:|:--:|:--:|
|Up front cost|Significant|None|
|Ongoing cost|Low|Based on usage|
|Tax Deduction|Over time|Same year|
|Early termination|No|Anytime|
|Maintenance|Significant|Low|
|Value over time|Lowers|No change|

---

# Describe Consumption-based Model
- no upfront costs
- no wasted resources
- pay for additional resources when needed
- stop paying at any time
- pricing is based on
	- compute
	- storage
	- network
- multiple pricing components per service
- very granular usage measurement

---

# Cloud Service Models

## Describe On-Premises
- cloud provider manages nothing
- we manage everything
	- infrastructure
	- platform
	- software

## Describe IaaS
- infrastructure - all the layers that are related to infrastructure and hardware
	- virtualisation
	- servers
	- networking
	- storage
- cloud provider manages infrastructure
- use cases
	- migration of workloads
	- test & development
	- storage, backups and recovery

## Describe PaaS
- platform
	- runtime
	- middleware
	- operating system
- cloud provider manages infrastructure and platform
- use cases
	- development framework
	- analytics & business intelligence
- e.g. SQL, App Service, Logic Apps, Function Apps

## Describe SaaS
- software - data & applications
- cloud provider manages infrastructure, platform & software
- use cases
	- buying of-the-shell applications
- e.g. OneDrive, OutLook, Skype

---

# Cloud Deployment Models

## Describe Public Cloud
- all the resources are hosted on the public cloud
- no local hardware
- T.B. in public cloud some services share the hardware with other customers
- **Advantages**
	- no CapEx
	- high availability and agility
	- pay as you go pricing
	- no hardware maintenance
	- no deep technical knowledge required
- **Disadvantages**
	- security & compliance
	- ownership
	- specific scenarios with unique business requirement

## Describe Private Cloud
- everything runs on our own datacenter
- self-service should be provided
- we maintain the hardware
- **Advantages**
	- can support any scenario
	- control over security
	- can meet any security & compliance requirements
- **Disadvantages**
	- initial CapEx
	- limited agility
	- IT skills & expertise mandatory

## Describe Hybrid Cloud
- combines public and private cloud
- great flexibility
- **Advantages**
	- great flexibility
	- run legacy apps
	- utilize existing infrastructure
	- meet any security requirements
- **Disadvantages**
	- can be more expensive
	- complicated to manage
	- IT skills & expertise are mandatory

---

# Azure Physical Infrastructure

## Describe Data Center
- if we purchase services from azure, all those services run on servers
	- a physical facility that hosts all those servers is called a data center
- hosting for a group of networked servers
- has its own power, cooling & networking infrastructure
- data centers are building blocks of global azure infrastructure

## Describe Azure Regions
- data centers connected with each other
- they can contain a single data center or multiple data centers
- globally distributed
- geographical area on the planet
	- that consists of one or usually more data centers connected with low latency network (<2 milliseconds)
- location for our services
- some services are available only in certain regions
- some services are global services
- azure is globally available with 50+ regions
- special government regions
- special partnered regions

## Describe Availability Zones
- a regional feature where each data center gets a number that represents a grouping of physically separate facilities
- designed to protect from data center failures
- two service categories
	- *zonal* services
		- we can choose to which availability zones are we doing the deployment to
	- *zone-redundant* services
		- these services allow us to take advantage of multiple availability zones
		- these services automatically replicate data across multiple availability zones
- not all regions are supported
- supported regions has three or more zones
- an availability zone is built of one or more data centers

## Describe Region Pairs
- for region-level failures
- paired regions are at least 300 miles from each other
- region pairs are static and can't be chosen
- each region pair resides within the same geography
- some services have platform-level replication
- planned updates across the pairs

*Geography > Region Pair > Region > Availability Zone > Data Center*

## Describe Geographies
- discrete market
- typically contains two or more regions
- ensure all data-level requirements are met
	- data residency
	- sovereignty
	- resiliency
	- compliance
- fault-tolerant to protect from region wide failures

---

# Resources, Resource Groups & Resource Managers

## Describe Resources
- objects that are used to represent services in Azure
- represents service lifecycle
- azure uses resources to save all the configuration that we make for our services
- every resource can be presented as a json template
- the four common properties across all resources
	- type
	- api version
	- name
	- location

*no resources can be created without a resource group*

## Describe Resource Groups
- a logical container for resources
- logically group related resources
- strategy to group resources
	- by type
	- by application lifecycle
	- by department name
	- billing, location or combination of those

### Additional Information
- each resource must be in only one resource group
- resource groups have their own location assigned
	- this location is only to store the metadata
- resources in a resource group can reside in different locations
- resources can be moved between the resource groups
- resource groups can't be nested

## Describe Resource Manager
- to manage azure services
- a centralised service governing all the services in azure
- management layer for all resources and resource groups
- unified language
- responsible for controlling the access and resources

---

# Describe Compute Services
- category of on-demand services used to run cloud-based applications

## Describe Virtualisation
- emulation of physical machines
- different virtual hardware configuration per machine
- different OS per machine
- total separation of environments, so each machine has its own
	- file systems
	- services
	- ports
	- middleware
	- configuration

## Describe Virtual Machines
- Infrastructure as a Service (IaaS)
- total control over the OS and the software
- supports marketplace and custom images
- this service is best suited for
	- custom software require custom system configuration
	- lift-and-shift scenarios
- can run any application/scenario
	- web apps & web services
	- databases
	- desktop applications
	- jumpboxes
	- gateways

## Describe VM Scale Sets
- Infrastructure as a Service (IaaS)
- set of identical VMs
- built-in auto-scaling features
- designed for manual and auto-scaled workloads like web-services, batch processing etc.

## Describe Containers
- use host's OS
- emulate OS whereas VMs emulate hardware
- lightweight (no OS)
- respond quicker to demand changes
- designed for almost any scenario
- service - Azure Container Instances

## Describe Azure Container Instances
- simplest and fastest way to run a container in azure
- Platform as a Service (PaaS)
- Serverless Containers
- Designed for
	- small and simple web apps/services
	- background jobs
	- scheduled scripts

## Describe Azure Kubernetes Service 
- open-source container orchestration platform
- Platform as a Service (PaaS)
- highly scalable and customisable
- designed for high scale container deployments

## Describe App Service
- designed as enterprise grade web application service
- Platform as a Service (PaaS)
- supers multiple programming languages and containers

## Describe Azure Functions
- Platform as a Service (PaaS)
- serverless
- two hosting/pricing models
	- consumption-based plan
	- dedicated plan
- designed for micro/nano services

## Summary
- *Virtual Machines* - IaaS
	- custom software, custom requirements, very specialised, high degree of control
- *VM Scale Sets* - IaaS
	- auto-scaled workloads for VMs
- *Container Instances* - PaaS
	- simple container hosting, easy to start
- *Kubernetes Service* - PaaS
	- highly scalable and customisable container hosting platform
- *App Service* - PaaS
	- web applications, a lot of enterprise web hosting features, easy to start
- *Azure Functions* - PaaS, Function as a Service, Serverless
	- micro/nano-services, excellent consumption-based pricing, easy to start

---

# Describe Azure Networking Services
- category of services with capability to
	- connect cloud and on-premises resources
	- protect and monitor services
	- help with application delivery

## Describe Azure Virtual Network
- create, manage and monitor secure connectivity between azure resources
- it can only reside within a single region and can span resources from that specific region
- to connect multiple virtual networks
	- VNET Peering
	- VPN Gateway
- emulation of a physical networking infrastructure
- designed for *isolation*, *segmentation*, *communication*, *filtering*, *routing* between resources
- scoped to a single region
- segmented into one or more subnets
- subnets are discrete sections used for
	- effective address allocation
	- network filtering via Network Security Groups(NSG) and Application Security Groups (ASG)

## Describe Azure VPN Gateway
- on-premises to assure traffic over the public internet
- cross-regional communication of azure virtual networks
	- VNet peering vs VPN Gateway should be chosen based on the organisation needs

## Describe Azure Load Balancer
- distribution of traffic among the resources
- reasons
	- scalability
	- high availability
- supports both inbound and outbound traffic
- supports both TCP and UDP applications
- supers both internal and external traffic

## Describe Application Gateway
- http traffic - instead of load balancer, Application Gateway
- designed to support web traffic
- has features like web application firewall
- redirection capabilities
- session affinity - when we want to be sure that the users are always directed to the same servers
- URL routing
- SSL termination

## Describe Content Delivery Network
- deliver web content to users
- minimise latency
- The content is spread across multiple POP (points of presence) locations

- - -

# Azure Storage Services

## Types of Data
- structured
- semi-structured
- unstructured

## Describe Azure BLOB Storage
- binary large object
- any kind of file
- blobs in container -> containers on Azure blob storage
- a service designed to store any kind of file
- three storage tiers
	- *Hot* - frequently accessed data
	- *Cool* - infrequently accessed data
		- lower availability
		- high durability
	- *Archive* - rarely (if-ever) accessed data

## Describe Azure Queue Storage
- storage for small pieces of data - *messages*
- designed for scalable asynchronous processing

## Describe Azure Table Storage
- storage for semi-structured data (NoSQL)
	- we use this kind of database when we don’t need foreign joints, foreign keys, relationships or strict schema
	- designed for fast access
- many programming interfaces and SDKs

## Describe Azure File Storage
- difference from blob storage
	- instead of blobs - files
	- instead of containers - shares
	- instead of blob storage - file storage
- storage for file accessed via shared drive protocols
- designed to extend on-premises file shares
- designed to implement list-and-shift scenarios

## Describe Azure Storage Account
- group of services which include
	- blob storage
	- queue storage
	- table storage
	- file storage
- used to store
	- files
	- messages
	- semi-structured data
- highly scalable
- highly durable
- cheapest per GB storage

## Describe Azure Disk Storage
- disk emulation in cloud
- persistent storage for virtual machines
- different
	- sizes
	- types
	- performance tiers
- disk can be unmanaged or managed
	- unmanaged - each disk is stored as a file on a blob storage
	- managed - Microsoft is managing all the storage

- - -

# Database Services

## Describe Azure Cosmos DB
- very similar to Table Storage
- instead of Table -> Collection
- replication available
- read & write globally
- low latency database
- globally distributed NoSQL database service
- schema-less
- multiple APIs

## Describe Azure SQL Database
- relational database service in the cloud (PaaS)
- structured data service using schema and relationships
- rich query capabilities (SQL)
- high performance, reliable, fully managed and secure database for building applications

## Additional Summary
- Azure *Database for MySQL*
	- Azure SQL version for MySQL database engine
- Azure *Database fro PostgreSQL*
	- Azure SQL version for PostgreSQL database engine
- Azure *SQL Managed Instance*
	- fully fledged SQL Server managed by cloud provider
- Azure *SQL om VM*
	- fully fledged SQL server on IaaS
- Azure *SQL Data Warehouse*
	- big-data
	- massively parallel processing version of SQL server

---

# Describe Azure Marketplace
- azure shop
- first and third-party products
- products in the Azure Marketplace consists of IaaS, PaaS and SaaS
- it is a part of the *commercial marketplace*
- commercial marketplace
	- azure marketplace
		- developers &. IT pros
	- microsoft app-source
		- products for Azure, Power BI, Dynamics 365, Microsoft 365
		- business users

---

# IOT services

## Describe Azure IoT Hub
- managed service for bi-directional communication
- Platform as a Service (PaaS)
- highly secure, scalable and reliable
- integrates with a lot of Azure Services
- programmable SDKs for popular languages
- has support for multiple protocols (HTTPS, AMQO, MQTT)

## Describe Azure IoT Central
- application delivery platform for IoT
- IoT App Platform as a Service
- allows us to use industry specific app templates and manage them at scale in the cloud
- no deep technical knowledge required
- service for connecting, management and monitoring IoT devices
- highly secure, scalable and reliable
- built on top of IoT hub

## Describe Azure Sphere
- a set of components allowing us to build secure IoT applications
- to build secure end-to-end IoT solutions
	- *Azure Sphere* certified chips (microcontroller units)
	- *Azure Sphere OS* based on linux
	- *Azure Security Service* trusted device-to-cloud communication

---

# Big Data & Analytics

## Describe Big Data
- Big Data is a field of technology that helps with extraction, processing and analysis of information that is too large or complex to deal with traditional software

## Describe Azure Synapse Analytics
- the process starts with identifying where is their data
- then the development process starts
	- ingest data from the sources to the cloud
	- transform the datasets
	- store
	- expose the data to other tools
- provides pipelines
- *big data analytics platform* (PaaS)
- multiple components
	- Spark
	- Synapse SQL
		- SQL pools
		- SQL on-demand
	- Synapse Pipelines
	- Studio

## Describe Azure HDInsight
- flexible multi-purpose big data platform (PaaS)
- supports multiple technologies (Hadoop, Spark, Kafka, HBase, Hive, Storm, ML)

## Describe Azure Databricks
- clusters are built only on Apache Spark
- unified workspace for notebook, cluster, data, access management and collaboration
- based on spark
- integrates very well with common Azure services

---

# Describe Serverless Computing
- it is cloud-hosted execution environment that allows customers to run their applications in the cloud while completely abstracting the underlying infrastructure

## Describe Azure Functions
- function apps
- small pieces of code packaged as web services
- serverless coding platform (Function as a Service, FaaS)
- designed for nano-service architectures and event-based applications
- scales up and down very quickly
- highly scalable
- supports most of the popular languages and frameworks

## Describe Azure Logic Apps
- allows us to build workflows using visual interface
	- business scenarios
	- cross-application integration
- serverless enterprise integration service (PaaS)
- 200+ connectors for popular service
- no-code solution

## Describe Event Grid
- topics & subscribers
- fully managed serverless event routing service
- uses publish-subscribe model
- designed for event-based and near-realtime applications
- has support for a lot of built-in events from most common Azure services

---

# Describe DevOps
- set of practices that combine both development (Dev) and operations (Ops)
- DevOps aims to shorten the development lifecycle by providing CI/CD capabilities while ensuring high quality of deliverables

## Describe Azure DevOps
- features
	- *boards*
		- allows to track the work, progress
		- manage the deliverables
	- *repos*
		- manage code repos and versioning
	- *pipelines*
		- create automated builds and deployment processes
	- *artifacts*
		- create, host and share packages
	- *test plans*
		- track testing progress
- collection of services for building solutions using DevOps practices
- evolved from TFS (Team Foundation Server), through VSTS (Visual Studio Team Services)

## Describe Azure DevTest Labs
- service within Azure that allows developers/testers to provision and manage sandbox environment for testing and development purposes
- quick setup of self-managed VMs
- preconfigured templates for VMs
- plenty of additional artifacts
- lab policies
- share and automate labs via custom images
- premade plugins/API/tools for CI/CD pipeline automation

---

# Azure Tools

## Describe Azure Portal
- publicly accessible web interface for management of Azure platform
- designed for self-service
- customisable
- help customers with simple tasks

## Describe Azure PowerShell
- module for PowerShell
- designed to help with automation tasks
- simple-to-use
	- *Connect-AzAccount* - log into Azure
	- *Get-AzResourceGroup* - list resource groups
	- *New-AZResourceGroup* - create new resource group
	- *New-AzVm* - create virtual machine
- multi-platform - PowerShell Core

## Describe Azure CLI
- command line interface for Azure
- designed for automation
- multi-platform - based on Python
- simple-to-use
	- *az login* - log into Azure
	- *az group list* - list resource groups
	- *az group create* - create new resource group
	- *az vm create* - create virtual machine
- native OS terminal scripting

## Describe Azure CloudShell
- accessed through a web browser
- cloud-based scripting environment
- completely free
- supports both Azure *PowerShell* and Azure *CLI*
- dozen of additional tools
- multiple client interfaces
	- *Azure Portal integration*
	- *Shell Portal*
	- *Visual Studio Code Extension*
	- *Windows Terminal*
	- *Azure Mobile App*
	- *Microsoft Docs Integration*

---

# Describe Azure Advisor
- personalised consultant service
- designed to provide recommendations and best practices for
	- *cost*
	- *security*
	- *reliability*
	- *performance*
	- *operational excellence*
- actionable recommendations
- free service

---