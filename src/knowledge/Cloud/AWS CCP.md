
Cloud computing
- cloud computing is the *on-demand* delivery of compute power, database storage, applications and other IT resources
- pay-as-you-go-pricing
- we can provision exactly the right type and size of computing resources we need
- we can access as many resources instantly
- easily access server, storage, databases and a set of application services

1. Private cloud
2. Public cloud
3. Hybrid cloud

Cloud computing:-
1. on-demand self service
	1. users can provision resources and use them without human interaction from the service provider
2. broad network access
	1. resources available over the network and can be accessed by diverse client platforms
3. multi-tenancy and resource pooling
	1. multiple customers can share the same infrastructure and applications with security and privacy
	2. multiple customers are serviced from the same physical resources
4. rapid elasticity and scalability
	1. automatically and quickly acquire and dispose resources when needed
	2. quickly and easily scale based on demands
5. measured service
	1. usage is measured, users pay correctly for what they have used

*Six advantages for cloud computing:-*
1. trade capital expense (CAPEX) for operational expense (OPEX)
2. benefit from massive economies of scale
3. stop guessing capacity
4. increased speed and agility
5. stop spending money running and maintaining data centers
6. go global in minutes: leveraging the AWS global infrastructure

Problems solved by the cloud:
1. flexibility
2. cost-effectiveness
3. scalability
4. elasticity
5. high availability and fault-tolerance
6. agility

---
## Types of cloud computing

### Infrastructure as a service (IaaS)
- provide building blocks for cloud IT
- provides networking, computer, data storage price
- highest level of flexibility
- easy parallel with traditional on-premises IT

### Platform as a service (PaaS)
- removes the need for the organization to manage the underlying infrastructure
- focus on the deployment and management of the application

### Software as a service (SaaS)
- completed product that is to be run and managed by the service provider

|On-premises|IaaS|PaaS|SaaS|
|:---:|:---:|:---:|:---:|
|Applications|Applications|Applications|~~Applications~~|
|Data|Data|Data|~~Data~~|
|Runtime|Runtime|~~Runtime~~|~~Runtime~~|
|Middleware|Middleware|~~Middleware~~|~~Middleware~~|
|OS|OS|~~OS~~|~~OS~~|
|Virtualization|~~Virtualization~~|~~Virtualization~~|~~Virtualization~~|
|Server|~~Server~~|~~Server~~|~~Server~~|
|Storage|~~Storsge~~|~~Storage~~|~~Storage~~|
|Networking|~~Networking~~|~~Networking~~|~~Networking~~|

IaaS
- Amazon EC2
- GCP, Azure, Rackspace, Digital ocean, Linode

PaaS
- Elastic Beanstalk
- Heroku, Google APP Engine (GCP), Windows Azure (Microsoft)

SaaS
- Rekognition etc.
- Google apps (Gmail), Dropbox, Zoom

Pricing of the cloud
1. compute: pay for compute time
2. storage: pay for the data stored in the cloud
3. data transfer OUT of the cloud: data transfer IN is free

How to choose an AWS region?
- *Compliance* with data governance and legal requirements: data never leaves the region without one's explicit permission
- *Proximity* to customers: reduced latency
- *Available services* within a region: new services and new features aren't available in every region
- *Pricing*: pricing varies from region to region and is transparent in the service pricing page

---
## IAM

### IAM: Users & Groups
- Identity and access management - global service
- Users (people within an organization) - can be grouped together
- Groups contain only users and not other groups
- Users don't have to belong to a group
- A user can belong to multiple groups

### IAM: Permissions
- users and groups can be assigned JSON documents called policies
- these policies define the permissions of the users
- in AWS you apply the *least privilege principle*: don't give more permission than a user needs

### IAM Policies Inheritance
- if we assign a policy to a group, then it will apply to all the users of that group
- inline policy
	- policy attached only to an user

### IAM Policies structure
- Consists of
	- Version: policy language version, always include "2012-10-17"
	- ID: an identifier for the policy (optional)
	- Statement: one or more individual statements (required)
- Statement consists of
	- SID: an identifier for the statement (optional)
	- Effect: whether the statement allows or denies access (ALLOW, DENY)
	- Principal: account/user/role to which the policy is applied to
	- Action: list of api calls allowed or denied
	- Resource: the list of resources the action will be applied to

### IAM Password Policy
- Strong password
	- higher security for account
- setting up a password policy
	- set a minimum password length
	- require a specific character types
		- uppercase letters
		- lowercase letter
		- numbers
		- non-alphanumeric characters
- allow all IAM users to change their own passwords
- require users to change passwords after a period of time (password expiration)
- prevent password reuse

---
## MFA - Multi Factor Authentication

MFA = password you own + security device you own

MFA devices options
- Virtual MFA device
	- Google authenticator (phone only)
	- Authy (multi-device)
		- support for multiple token on a single device
- Universal 2nd Factor (U2F) Security Key
	- YubiKey by Yubico (3rd party)
		- support for multiple root and IAM users using a single security key
- Hardware Key FOB MFA device
	- Provided by Gemalto (3rd party)
- Hardware Key FOB MFA device for AWS GovCloud (US)
	- Provided by SurePassID (3rd party)

To access AWS
- AWS management console
- AWS Command Line Interface (CLI) : protected by access keys
	- Direct access to public APIs of the AWS
- AWS Software Development Kit (SDK) - for code : protected by access keys
	- language specific APIs (set of libraries)
	- to access and manage AWS services programmatically

*AWS CLI is built on AWS SDK for python*

### IAM Roles for Services
- Some AWS services will need to perform actions on our behalf
- To do so, we will assign permissions to AWS services with IAM roles
- Common roles:
	- EC2 instance roles
	- Lambda function roles
	- Roles for Cloudformation

### IAM Security Tools
- IAM Credentials Report (account-level)
	- a report that lists all the account's users and the status of their various credentials
- IAM Access Advisor (user-level)
	- shows the service permissions granted to a user and when the services were last accessed

### Shared Responsibility Model for IAM

|**AWS**|**You**|
|:---:|:---:|
|Infrastructure (global network security)|Users, groups, roles, policies monitoring and management|
|Configuration and vulnerability analysis|Enabling MFA on all accounts|
|Compliance validation|Rotate all your keys often|
||Use IAM tools to apply appropriate permissions|
||Analyze access patterns and review permissions|

---
## Elastic Compute Cloud

It consists of
- renting virtual machines (EC2)
- storing data on virtual drives (EBS)
- distributing load across machines (ELB)
- scaling the services using auto scaling group (ASG)

### EC2 sizing and configuration options
- Operating System (OS)
	- Linux
	- Windows
	- MacOS
- Compute power and CPU
- Random Access Memory (RAM)
- Storage Space
	- EBS and EFS
	- Hardware (EC2 instance store)
- Network Card
	- Speed of the card
	- Public IP Address
- Firewall rules
	- security group
- Bootstrap script (configure at first launch)
	- EC2 user data

### EC2 User Data
- it is possible to bootstrap our instances using an EC2 User Data script
- bootstrapping means launching command when a machine launches
- the script is only run once at the instance first start
- it is used to automate boot tasks
	- installing updates
	- installing software
	- downloading common files from the internet

*t2.micro is a part of the AWS free tier (750 hours per month)*

### EC2 Instance Types
- General Purpose
	- great for a diversity of workloads such as web servers or code repositories
	- balance between
		- compute
		- memory
		- networking
- Compute Optimized
	- great for compute-intensive tasks that require high performance processors
		- batch processing workloads
		- media transcoding
		- high performance web servers
		- high performing computers
		- scientific modeling & machine learning
		- dedicated gaming servers
- Memory Optimized
	- fast performance for workloads that process large datasets in memory
	- use cases:
		- high performance relational/non-relational databases
		- distributed web scale cache stores
		- in-memory database optimized for business intelligence
		- applications performing real-time processing of big unstructured data
- Accelerated Computing
- Storage Optimized
	- great for storage-intensive tasks that require high, sequential read and write access to large datasets on local storage
	- use cases:
		- high frequency online transaction processing (OLTP) systems
		- relational & NoSQL databases
		- cache for in-memory databases (e.g. Redis)
		- data warehousing applications
		- distributed file systems
- Instance Features
- Measuring Instance Performance

e.g.: *m5.2xlarge* $\to$ *m* *5* . *2xlarge*
*m* $\to$ instance class
*5* $\to$ generation
*2xlarge* $\to$ size within the instance class

*security groups act as firewall on EC2 instances*

Security groups regulate
- access to ports
- authorized IP ranges - IPv4 and IPv6
- control of inbound network
- control of outbound network

Security groups
- can attached to multiple instances
- locked down to a region / VPC combination
- lives outside the EC2 instance
	- if traffic is blocked the EC2 instance won't even see it
- it's good to maintain one separate security group for ssh access
- if the application is not accessible (time out), then it is a security group issue
- if the application gives a "connection refused" error, then it's an application error or it is not launched
- all inbound traffic is blocked by default
- all outbound traffic is authorized by default

### Classic ports to know
- 22 = SSH (secure shell) - log into a Linux instance
- 21 = FTP (file transfer protocol) - upload files into a file share
- 22 = SFTP (secure file transfer protocol) - upload files using SSH
- 80 = HTTP - accessing unsecured websites
- 443 = HTTPS - accessing secured websites
- 3389 = RDP (remote desktop protocol) - log into a windows instance

EC2 Instance connect
- upload for us a temporary SSH key and establish a connection

### Shared Responsibility Model for EC2

|**AWS**|**You**|
|:---:|:---:|
|Infrastructure (global network security)|Security Groups rules|
|Isolation on physical hosts|Operating system patches and updates|
|Replacing faulty hardware|Software and utilities on the instance|
|Compliance validation|IAM roles assigned to EC2 and IAM user access management|
||Data security on our instance|

---
## EC2 Instance Storage Section

### EBS Volume
- EBS - Elastic Book Store
- it is a network drive which we can attach to the instances while they run
- it allows the instances to persist data even after termination
- they can only be mounted to one instance at a time (at the CCP level)
- bound to a specific availability zone
- *analogy*: network USB stick
- *free tier*: 30GB of free EBS storage of type General Purpose SSD or Magnetic per month

EBS volume is a network drive:
- it uses to network to communicate the instances, so there might be a bit of latency
- it can be detached from one EC2 instance and attached to another one quickly
- it is locked to an availability zone
- to move a volume across, we first need to snapshot it
- have a provisioned capacity
	- we get billed
	- we can increase the capacity over time

EBS - Delete on termination attribute
- controls the EBS behavior when an EC2 instance is terminated
- by default, the root EBS volume is deleted
- by default, any other attached EBS volume is not deleted
- this can be controlled by the AWS console / AWS CLI

### EBS Snapshot
- backup of the EBS volume at any point of time
- not necessary to detach volume to do snapshot, but recommended
- can copy snapshot across AZ or Region

AMI = Amazon Machine Image
- a customization of EC2 instance
- add our own software, configuration, operating system, monitoring
- faster boot / configuration time because all our software is pre-packaged
- built for a specific region and can be copied across regions
- we can launch EC2 instances from
	- public AMI: AWS provided
	- our own AMI: make and maintain them ourselves
	- aws marketplace AMI: an AMI someone else made

### AMI hands on
- First, create an instance with the user script, to initiate an apache server
```shell
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
```
- Then from this instance, create an image
- Then launch an instance from the image just created with the required task
```shell
#!/bin/bash
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
```

### EC2 Image Builder
- used to automate the creation of virtual machines or container images

### EC2 Instance Store
High performance hardware disk - **EC2 Instance Store**
- better I/O performance
- lose their storage if they are stopped/terminated (ephemeral)
- good for buffer, cache, scratch data, temporary content
- risk of data loss if hardware fails
- backups and responsibility are our responsibility

### Elastic File System
- managed NFS (Network File System) that can be mounted on 100s of EC2
- EFS works with only Linux EC2 instances
- highly available, scalable, expensive, pay per use, no capacity planning

### EFS Infrequent Access (EFS-IA)
- storage class that is cost-optimized for files files not accessed everyday
- EFS will automatically move files to the EFS-IA based on the last time they were accessed

### Shared Responsibility Model for EC2 Storage

|**AWS**|**You**|
|:---:|:---:|
|Infrastructure|Setting up backup or snapshot procedures|
|Replication of data for EBS volumes and EFS drives|Setting up data encryption|
|Replacing faulty hardware|Responsibility of any data on the drives|
|Ensuring their employees cannot access our data|Understand the risk of using EC2 Instance Store|

### Amazon FSX
- 3rd party high performance file system on AWS
- fully managed service
	- FSX for Lustre
		- fully managed, high performance, scalable file storage for High Performance Computing (HPC)
		- Lustre - 'Linux' and 'Cluster'
		- Machine learning, Video processing, Analytics, Financial modeling
		- stores data in an Amazon S3 bucket
	- FSX for Windows File Server
		- fully managed, highly reliable and scalable, windows native shared file system
		- built on windows file system
		- support SMB protocol and Windows NTFS
		- integrated with Microsoft Active Directory
		- can be accessed from AWS or on-premise infrastructure

---
## ELB & ASG - Elastic Load Balancing & Auto scaling groups

### Scalability and High Availability
- handle greater loads by adapting
- two kinds of scalability
	- vertical scalability
	- horizontal scalability (elasticity)

### Vertical scalability
- increasing the size of the application
- e.g. *t2.micro* $\to$ *t2.large*
- for non-distributed systems - databases
- hardware limit

### Horizontal scalability
- increasing the number of instances of the application
- implies distributed systems
- common for web applications / modern applications

### High availability
- running the application / system in at least 2 AZ
- goal - survive a data center loss

|*Scalability*|*Elasticity*|
|:---:|:---:|
|ability to accommodate a larger load by scaling up (vertically) or scaling out (horizontally)|once a system is scalable, elasticity means that there will be auto-scaling based on the load|

### Load balancer
- spread load across multiple downstream instances
- expose a single point of DNS
- seamlessly handle failure of downstream instances
- provide SSL termination for our website
- high availability across zones

### ELB
- managed load balancer
	- aws
		- guarantees that it will be working
		- takes care of upgrades, maintenance and high availability
		- provides only a few configuration knobs
- costs less to setup our own load balancer but takes a lot of effort
- 4 kinds of load balancers offered by AWS
	- *Application Load Balancer (HTTP / HTTPS only) - Layer 7*
	- *Network Load Balancer (Ultra-high performance, allows for TCP, UDP) - Layer 4*
	- *Gateway Load Balancer - Layer 3*
	- *Classic Load Balancer (retired in 2023) - Layer 4 & 7*

|*ALB*|*NLB*|*GLB*|
|:---:|:---:|:---:|
|HTTP / HTTPS / gRPC protocols (Layer 7)|TCP / UDP protocols (Layer 4)|GENEVE protocol on IP packets (Layer 3)|
|HTTP routing features|High Performance: millions of requests per second|Route traffic to Firewalls that we manage on EC2 instances|
|Static DNS (Url)|Static IP through *Elastic IP*|Intrusion detection|

*ALB Hands on*
- to create a load balancer
	- create a security group
	- create a target group
	- select AZ
	- enter user data

### Auto Scaling Group
- goal
	- scale out to match an increased load
	- scale in to match an decreased load
	- ensure we have a minimum and maximum number of machines running
	- automatically register new instances to a load balancer
	- replace unhealthy instances
- cost savings
	- only run at an optimal capacity

*ASG Hands on*
- create a launch template
	- enter user data
- select AZ
- attach to a load balancer
- health checks
- set capacity limits - minimum, desired, maximum

*instances $\to$ ALB $\to$ ASG*

### ASG - Scaling strategies
- Manual scaling
	- update the size of ASG manually
- Dynamic scaling
	- respond to changing demand
		- Simple / Step scaling
			- e.g. CPU > 70% $\to$ add 2 units
			- e.g. CPU < 40% $\to$ remove 1 unit
		- Target tracking scaling
			- e.g. average ASG CPU remain around 40%
		- Scheduled scaling
			- anticipate a scaling based on known usage patterns
		- Predictive scaling
			- uses Machine Learning to predict future traffic
			- (useful when the load has predictable time based patterns)

---
## Amazon S3

- *one of the main building blocks of AWS*
- *'infinitely scaling' storage*

### Use cases
- Backup and storage
- Disaster recovery
- Archive
- Hybrid cloud storage
- Application hosting
- Media hosting
- Data lakes and big data analytics
- Software delivery
- Static websites

### Amazon S3 buckets
- *stores files (objects) in buckets*
- buckets must have a globally unique name (across all regions all accounts)
- defined at the region level
- S3 looks like a global service but the buckets are created at a region level
- naming convention:
	- no uppercase, no underscore
	- 3-63 characters
	- not an IP
	- must start with lowercase letter or number
	- must not start with the prefix ***xn--***
	- must not end with the suffix ***-s3alias***

### Amazon S3 Objects
- objects (files) have a key
- key is the full path
	- *s3://my-bucket/my_file.txt*
	- *s3://my-bucket/my_folder/my_file.txt* (nesting)
- key = prefix + object name
- there's no concept of directories in buckets (tricky)
- keys are just very long names with slashes '/'
- object values are the content of the body
	- Max object size - 5TB
	- > 5TB - *multi-part upload*
- Metadata - (list of text key/value pairs - system or user metadata)
- Tags - (Unicode key/value pair - up to 10) - useful for security / lifecycle
- Version ID

*S3 Hands on*
- after we have uploaded an object in the S3 bucket, just created, we can only view/access the object using the ***S3 pre-signed URL***, and not the public URL
- the ***S3 pre-signed URL*** contains a signature

### Amazon S3 Security
- User-based
	- IAM policies - which API calls should be allowed for a specific user from IAM
- Resource-based
	- Bucket policies - bucket wide rule from the S3 console - allows cross account
	- Object Access Control List (ACL) - finer grain (can be disabled)
	- Bucket Access Control List (ACL) - less common (can be disabled)
- *NOTE:* an IAM principal can access a S3 object if
	- the user IAM permissions ALLOW it or the resource policy ALLOWs it
	- and there is no explicit DENY
- Encryption
	- encrypt objects in amazon S3 using encryption keys

### S3 bucket policies
- JSON based policies
```json
{
	"Version": "2012-10-17",
	"Statement": [
		"Sid": "PublicRead",
		"Effect": "Allow",
		"Principal": "*",
		"Action": [
			"s3:GetObject"
		],
		"Resource": [
			"arn:aws:s3:::examplebucket/*"
		]
	]
}
```
	- Resources: buckets and objects
	- Effect: ALLOW / DENY
	- Actions: sets of API to allow / deny
	- Principal: the account or user to apply the policy to
- we can use S3 bucket policy to grant public access to the bucket
- to force objects to be encrypted at upload
- grant access to another account (cross account)
- *Hands on (for public access)*
	- unblock public access from *permissions* tab
	- edit bucket policy
	- create policy (policy generator)
		- type of policy - *S3 bucket policy*
		- effect - *Allow*
		- principal - *
		- actions - e.g. *GetObject*
		- ARN:  *bucket-name/\**
		- add statement
		- generate policy

### Amazon S3 - Static Website Hosting
- *enable* - from the properties
- upload the *index.html* or the required file

### Amazon S3 - Versioning
- enabled at the bucket level
- same key overwrite will change the version
	- protect against unintended deletes (ability to restore a version)
	- easy roll back to a previous version
- any file not versioned prior to enabling versioning is versioned "null"
- suspending versioning does not delete the previous versions

### Amazon S3 - Replication (CRR & SRR)
- Cross Region Replication (CRR) and Same Region Replication (SRR)
- must enable versioning in the source and destination buckets
- buckets can be in different AWS accounts
- copying is asynchronous
- must give proper IAM permissions to S3
- *replication hands on*
	- create the origin-bucket
	- create the replica-bucket
	- upload file to origin-bucket
	- origin-bucket $\to$ Management* $\to$ *Replication rules*
		- rule name e.g. *DemoReplicationRule*
		- status $\to$ enable
		- scope $\to$ apply to all objects in the bucket
		- choose target bucket
		- *create new role*
	- version ID is also replicated

### S3 Storage Class
- Amazon S3 Standard - General purpose
- Amazon S3 Standard - Infrequent access
- Amazon S3 One Zone - Infrequent access
- Amazon S3 Glacier Instant Retrieval
- Amazon S3 Glacier Flexible Retrieval
- Amazon S3 Glacier Deep Archive
- Amazon S3 Intelligent Tiering

### S3 Durability & Availability
- Durability
	- how many objects will be lost
	- if we store 10,000,000 objects then 1 object will be lost every 10,000 years
	- same for all storage class
- Availability
	- how readily available a service is
	- varies depending on storage class

*Storage classes hands on*
- create a bucket
- upload file
	- properties
	- we can change the storage class here
- bucket $\to$ *management* $\to$ *create lifecycle rule* $\to$ add transitions *after a days-period*

### S3 Encryption
- Server-side encryption (default)
	- when an object is uploaded in the bucket, it is automatically encrypted
- Client-side encryption
	- encrypt the file before uploading it

### Shared Responsibility Model for S3

|**AWS**|**You**|
|:---:|:---:|
|Infrastructure (global security, durability, availability, sustain concurrent loss of data in two facilities)|S3 versioning|
|Configuration and vulnerability analysis|S3 bucket policies|
|Compliance validation|S3 replication setup|
||Logging and Monitoring|
||Optimal S3 storage classes|
||Data encryption at rest and in transit|

### AWS Snow Family
- highly secure, portable devices to collect and process data at the edge
- migrate data into and out of AWS
- data migration
	- Snowcone
	- Snowball edge
	- Snowmobile
- edge computing
	- Snowcone
	- Snowball edge

---
## Databases & Analytics

### Relational database
- looks like excel spreadsheets, with links between them
- use SQL language to perform queries and lookups

### NoSQL databases
- non-relational databases
- flexible schema for modern application
- benefits:
	- flexibility: easy to evolve data model
	- scalability: designed to scale-out by using distributed clusters
	- high-performance: optimized for specific data model
	- high functional: types optimized for the data model

### Shared responsibility on AWS
- quick provisioning, high availability, vertical and horizontal scaling
- automated backup and restore, operations, upgrades
- operating system patching is enabled by AWS
- monitoring, alerting

### RDS - Relational Database Service - managed service
- automated provisioning, OS patching
- continuous backups and restore to specific timestamps
- monitoring dashboards
- read replicas for improved read service (*scalability*)
- multiple AZ setup for disaster recovery (*high availability*)
- maintenance windows for upgrade
- scaling capability
- storage backed by EBS
- *we can't ssh into the instance*

### Amazon Aurora
- PostgreSQL and MySQL are supported as Aurora DB
- 5x over MySQL on RDS
- 3x over PostgreSQL on RDS
- automatically grows in increments of 10GB up to 128TB
- costs 20% more than RDS - more efficient
- *not in the free tier*

*database $\to$ snapshot $\to$ database (bigger database / copy database)*

### RDS deployments:
- Read Replica
	- scale the read workload of the DB
	- replicas of the DB are made (up to 15) and data is read from all of them
	- data is written only to the main DB instance
- Multi-AZ
	- Failover in case of AZ outage (high availability)
	- data is only read/written to the main DB
- Multi-Region
	- read replicas in multi region
	- writes happen cross-region
	- disaster recovery in case of region issue
	- local performance for global reads
	- replication cost (transfer over network to different region)

### Amazon Elastic Cache
- managed Redis or Memcached
- cache - in-memory database with high performance, low latency
- reduces load off of databases for read intensive workloads

### Dynamo DB
- fully managed, highly available with replication across 3 AZ
- NoSQL database
- scales to massive workloads, distributed 'server-less' database
- millions of requests per second, trillions of row, 100s of TB storage
- fast and consistent in performance
- single digit millisecond latency - low latency retrieval
- integrated with IAM for security, authorization and administration
- low cost and auto-scaling capabilities
- Standard & Infrequent-Access table class
- key/value database
- Primary key
	- Partition key
	- Sort key
- Products
	- Attributes

### Dynamo DB Accelerator - DAX
- fully managed in-memory cache for Dynamo DB
- microseconds latency
- secure, highly scalable and highly available

### Dynamo DB - Global Tables
- make a Dynamo DB accessible with low latency in multiple regions
- 2-way replication - Active-Active replication

### Redshift
- based on PostgreSQL
- not used for OLTP (Online Transaction Processing)
- used for OLAP (Online Analytical Processing)
	- analytics and data warehousing
- load data once every hour
- scale to PBs of data
- columnar storage of data
- Massively Parallel Query Execution (MPP), highly available
- pay as you go
- has a SQL interface for performing the queries
- BI tools such as AWS Quicksight or Tableau integrate with it

### Amazon EMR
- Elastic Map-Reduce
- helps to create the Hadoop clusters (Big data) to analyze and process vast amount of data
- clusters can be made of 100s of EC2 instances
- EMR takes care of all the provisioning and configuration
- auto-scaling and integrate with spot instances
- use case
	- data processing
	- machine learning
	- web indexing

### Amazon Athena
- serverless query service to perform analytics against S3 objects
- use standard SQL language to query the files
- supports CSV, JSON, ORC, Avro and Parquet
- *user --(load data)$\to$ S3 Bucket $\leftarrow$(Query & Analyze)-- Amazon Athena --(Reporting & Dashboards)$\to$ Amazon Quicksight*

### Amazon Quicksight
- serverless machine learning powered BI service to create interactive dashboards
- fast, automatically scalable, embeddable, with per-session pricing
- integrate with RDS, Aurora, Athena, Redshift, S3

### DocumentDB
- AWS implementation for MongoDB
- fully managed, highly available with replication across 3 AZ
- storage automatically grows in increment of 10GB up to 64TB
- automatically scales to workloads with millions of requests per second

### Amazon Neptune
- fully managed graph database
- highly available across 3 AZ with up to 15 read replicas
- build and run applications working with highly connected databases
- can store up to billions of relations and query the graph with milliseconds latency

### Amazon QLDB
- Quantum Ledger Database
- ledger - book recording financial transactions
- fully managed, serverless, high available, replication across 3 AZ
- immutable system, cryptographically verifiable
- no concept of decentralization, unlike *Amazon Managed Blockchain*

### Amazon Managed Blockchain
- blockchain makes it possible to build applications where multiple parties can execute transactions *without the need for a trusted, central authority
- managed service to
	- join public blockchain networks
	- create our own private scalable network
- compatible with *Hyperledger Fabric* and *Ethereum*

### AWS Glue
- managed extract, transform and load (ETL) service
- used to prepare and transform data for analytics
- fully serverless service
- Glue Data Catalog: catalog of datasets

### DMS - Database Migration Service
- *Source DB $\to$ EC2 instance running DMS $\to$ Target DB*
- quickly and securely migrate databases to AWS, resilient and self-healing
- the source database remains available during the migration
- supports
	- homogeneous migration
	- heterogeneous migration

### Summary
- relational databases - OLTP
	- RDS, Aurora (SQL)
- in-memory database
	- ElastiCache
- key/value database
	- DynamoDB (serverless) and DAX (cache for DynamoDB)
- warehouse - OLAP
	- Redshift (SQL)
- Hadoop cluster
	- EMR
- query data on Amazon S3
	- Athena (serverless and SQL)
- dashboard on the data
	- Quicksight (serverless)
- MongoDB
	- DocumentDB
- financial transaction ledger
	- Amazon QLDB (immutable journal, cryptographically verifiable)
- managed Hyperledger fabric & Ethereum blockchains
	- Amazon Managed Blockchain
- graph database
	- Amazon Neptune
- managed ETL and data catalog service
	- Glue
- database migration
	- Glue

---
## Compute Services

### Docker
- software development platform to deploy apps
- apps are packaged in containers that can be run on any OS
- scale up and down very quickly

### Amazon ECR
- Elastic Container Registry
- private docker repository on AWS

### ECS
- Elastic Container Service
- launch docker containers on AWS
- we must provision and maintain the infrastructure (the EC2 instances)
- AWS takes care of starting / stopping the containers
- has integration with the ALB (Application Load Balancer)

### Fargate
- launch docker containers on AWS
- we do not provision the infrastructure
- serverless offering
- AWS runs the containers based on the CPU / RAM we need

### 'SERVERLESS'
- a new paradigm, where the developers don't manage the servers anymore
- they just deploy code
- pioneered by AWS Lambda
- now includes anything that is managed : database, messaging, storage

### AWS Lambda
- virtual functions - no servers to manage (serverless)
- limited by time - shorter executions
- run on-demand
- scaling is automated
- *event-driven* : functions get invoked by AWS when needed
- easy monitoring through AWS CloudWatch
- up to 10GB of RAM per function
- does not support arbitrary Docker images

*Lambda Container Image*
- allows to run docker containers on top of Lambda
- the image must implement the Lambda Runtime API
- THOUGH - ECS / Fargate preferred
- *Hands on*
	- *use a blueprint*
	- blueprint name
	- function name e.g. *demo-lambda*
	- *create a function*
	- code, monitoring, cloudwatch logs

### Amazon API Gateway
- serverless http API
- *Lambda $\leftarrow$ (CRUD) $\to$ DynamoDB*
- Lambda function is not exposed as an API
	- so, we expose it through API gateway
- *client $\leftarrow$ (REST API) $\to$ API Gateway $\leftarrow$ (PROXY REQUESTS) $\to$ Lambda $\leftarrow$ (CRUD) $\to$ DynamoDB*
- fully managed service for developers to easily create, publish, maintain, monitor and secure APIs
- serverless and scalable
- supports
	- RESTful APIs
	- WebSocket APIs
- support for
	- security
	- user authentication
	- API throttling
	- API keys
	- monitoring

### AWS Batch
- fully managed batch processing at any scale
- efficiently run 100,000s of computing batch jobs in AWS
- batch job - job with a start and an end (opposed to continuous)
- *Batch* will dynamically launch EC2 instances or Spot instances
- *Batch* provisions the right amount of compute / memory
- we just need to submit / schedule batch jobs
- *Batch jobs* are Docker images and run on ECS
- helpful for cost optimization and focusing less on infrastructure
- *Batch is not serverless, but auto-scaling is managed by AWS*

### Amazon Lightsail
- virtual servers, storage, databases and networking
- low and predictable pricing
- simpler alternative to - EBS, RDB, EC2, ELB
- can setup notifications and monitoring for our Lightsail resources
- has high availability, but no auto-scaling, limited AWS integration

### Summary
- Docker
	- container technology to run applications
- ECS
	- run Docker container on EC2 instances
- Fargate
	- run Docker containers without provisioning the infrastructure
	- serverless offering (no EC2 instances)
- ECR
	- private Docker images repository
- Batch
	- run batch jobs on AWS across managed EC2 instances
	- runs on top of ECS services
- Lightsail
	- predictable and low pricing for simple application and DB stacks

---
## CloudFormation

- declarative way of outlining the AWS infrastructure, for any resources
- e.g. within a CloudFormation template
	- a security group
	- 2 EC2 instances within the security group
	- a S3 bucket
	- a load balancer in front of all these machines

### Benefits
- infrastructure as code
- cost
	- each resource in a stack is tagged with an identifier so we can easily see how much a stack costs us
	- we can estimate costs using the CloudFormation template
	- Savings Strategy
- productivity
	- ability to destroy and recreate infrastructure on the cloud on the fly
	- automated generation of diagram for our templates
	- declarative programming
- we don't reinvent the wheel
	- leverage existing templates on the web
- supports all AWS resources
	- custom resources for resources that are not supported

*Hands on*
- create a stack
- template type
- upload template - (yaml file)

### AWS Cloud Development Kit (CDK)
- defining the cloud infrastructure using a familiar language
- the code is *compiled by the CDK into* a usable CloudFormation template
- therefore, we can deploy the infrastructure and application runtime code together

Typical architecture - Web App 3 tier
- user $\to$ *ELB* $\to$ *multiple EC2 instances* $\to$ *Amazon RDS, ElastiCache*

### AWS Elastic Beanstalk
- developer centric view of deploying an application on AWS
- uses the components
	- EC2, ASG, ELB, RDS etc.
- Beanstalk = *Platform as a Service (PaaS)*
- managed service
	- instance configuration / OS is handled by Beanstalk
	- deployment strategy is configurable but performed by Beanstalk
	- capacity provisioning
		- load balancing and auto scaling is done by Beanstalk
	- application health-monitoring & recovering is done by Beanstalk
- three architecture models:
	- single instance deployment - good for dev
	- LB + ASG - great for production or pre-production web application
	- ASG only - great for non-web apps in production (workers etc.)

*Hands on*
- create application
	- **web server environment**
	- worker environment
- application name
- environment name
- domain name
- choose platform type
- configure service access
	- create IAM role for AWS service - EC2 (for *instance profile*)
		- search 'beanstalk'
		- select
			- web tier
			- worker tier
			- multiContainerDocker

*all the resources that beanstalk wants to create are created behind the scenes by CloudFormation*

### AWS CodeDeploy
- to deploy our application automatically
- works with
	- EC2 instances
	- on-premises servers
- Hybrid service
- servers / instances must be provisioned and configured ahead of time with the CodeDeply agent

### AWS CodeCommit
- before pushing the application code to servers, it is needed to be stored somewhere
- Github $\leftrightarrow$ CodeCommit
- fully managed
- scalable and highly available
- private, secured and integrated with AWS

### AWS CodeBuild
- build the code in the cloud
- compile source code, run tests and produce packages that are ready to be deployed
- *CodeCommit $\leftarrow$(retrieve code)-- CodeBuild --(build code)$\to$ \[ready to deploy artifacts\]*
- fully managed and serverless
- continuously scalable and highly available
- secure
- pay as you go
	- only pay for the build time

### AWS CodePipeline
- *how do we know that CodeCommit and CodeBuild are connected*
- orchestrate the different steps to automatically push the code to production
	- *code $\to$ build $\to$ test $\to$ provision $\to$ deploy*
	- basis for CI/CD
- ***CodePipeline*** : \[ *CodeCommit $\to$ CodeBuild $\to$ CodeDeploy $\to$ Elastic Beanstalk* \]
- fully managed
- compatible with CodeCommit, CodeBuild, CodeDeploy, Elastic Beanstalk, CloudFormation, GitHub, 3rd party services and custom plugins etc.

### AWS CodeArtifact
- storing and retrieving the code dependencies is called artifact management
- secure, scalable and cost-effective artifact management for software development
- works with common dependency management tools

### AWS CodeStar
- unified UI to easily manage software development activities in one place
- can edit code in the cloud directly using AWS Cloud9

### AWS Cloud9
- cloud IDE for writing, running and debugging code
- allows for code collaboration in real-time

### AWS Systems Manager (SSM)
- helps us manage EC2 instances and on-premises systems at scale
- hybrid AWS service
- operational insights about the state of our infrastructure
- most important features
	- patching automation for enhanced compliance
	- run commands across an entire fleet of servers
	- store parameter configuration with the SSM parameter store
- SSM agent needs to be installed

### SSM Session Manager
- allows us to start secure shell on EC2 instances and on-premises servers
	- without having ssh access, bastion hosts or SSH keys needed
- no port 22 needed (better security)
- *Hands on*
	- launch an EC2 instance
	- disable ports for connection : ssh, http, https
	- create role (IAM instance profile for EC2)
	- filter: SSM
		- AmazonSSMManagedInstanceCore
	- *Systems Manager $\to$ Fleet Manager*
	- Fleet Manager - a service where all EC2 instances that are registered with SSM appears here
	- Session Manager
		- start session

### AWS OpsWork
- *Chef* & *Puppet* helps us perform server configuration automatically, or repetitive actions
- they work great with EC2 instances and on-premises VM
- AWS OpsWork = managed Chef & Puppet
- an alternative to AWS SSM
- only provision standard AWS resources
	- EC2 instances, Databases, Load Balancers, EBS Volumes etc.

### Summary (Deployment)
- CloudFormation - AWS only
	- Infrastructure as code
- Beanstalk - AWS only
	- PaaS
	- deploy code consistently with known architecture
- CodeDeploy - Hybrid
	- deploy & upgrade any application onto servers
- Systems Manager - Hybrid
	- patch, configure and run commands at scale
- OpsWork - Hybrid
	- managed Chef & Puppet in AWS

### Summary (Developer)
- CodeCommit
	- store code in a private git repository (version controlled)
- CodeBuild
	- build and test code in AWS
- CodeDeploy
	- deploy code onto the servers
- CodePipeline
	- orchestration of pipeline (from code to build to deploy)
- CodeArtifact
	- store software packages / dependencies on AWS
- CodeStar
	- unified view for allowing developers to do CI/CD and code
- Cloud9
	- cloud IDE with real-time collaboration

---
## Global Infrastructure in AWS

- decreased latency
- disaster recovery
	- fail-over to another region and the application will still be working
- attack protection
	- distributed global infrastructure is harder to attack

### Amazon Route 53
- managed DNS
- most common records
	- www.google.com $\to$ 12.34.56.78 == A record (IPv4)
	- www.google.com $\to$ 2001:0db8:85a3:0000:0000:8a2e:0370:7334 == AAAA IPv6
	- search.google.com $\to$ www.google.com == CNAME:hostname to hostname
	- example.com $\to$ AWS resource == Alias
- routing policies
	- SIMPLE ROUTING POLICY
		- no health checks
	- WEIGHTED ROUTING POLICY
		- distributed traffic according to weight
		- effectively some kind of load balancing
	- LATENCY ROUTING POLICY
		- user redirected to the closest server
		- based on the latency
	- FAILOVER ROUTING POLICY
		- disaster recovery
		- health check on primary instance
			- if failed - redirected to the failover instance

### AWS CloudFront
- Content Delivery Network (CDN)
- improves read performance by caching the content of the website at the edge locations
- improves user experience - lower latency
- 216 points of presence globally
- DDoS protection (AWS Shield)

### CloudFront - Origins
- S3 bucket
	- for distributing files and caching them at the edge
	- enhanced security with the CloudFront Origin Access Control (OAC)
	- can be used as an ingress (to upload files to S3)
- Custom origin - HTTP
	- application load balancer (ALB)
	- EC2 instance
	- S3 website (must first enable the bucket as a static S3 website)
	- any HTTP backend we want

|**CloudFront**|**S3 Cross Region Replication**|
|:---:|:---:|
|Global Edge network|must be setup for each region we want replication to happen|
|files are cached for a TTL (each day)|files are updated in near real-time|
|great for static content that must be available everywhere|read only and great for dynamic content that needs to available at low latency in few regions|

*CloudFront Hands on*
- create S3 bucket
- upload the files
- we can visit the index file using the pre-signed url
- now comes in the picture - CloudFront
	- create a distribution
	- choose origin domain - (S3 bucket)
	- origin access - ***OAC***
	- create OAC setting (as recommended)
	- set default root object - ***index.html***
	- copy policy from notification
	- update S3 policy

### S3 Transfer Acceleration
- increase transfer speed by transferring the files to an AWS edge location which will forward the data to the S3 bucket in the target region

### AWS Global Accelerator
- improve global application performance and availability using the AWS global network
- 2 Anycast IP are created for our application and traffic is sent through the edge locations
- the edge locations send the traffic to our application

### AWS Outposts
- Hybrid cloud
- server racks that offer the same infrastructure, services, APIs, & tools to build our own applications on-premises just as in the cloud
- AWS will come and setup and manage 'Outpost Racks' within our on-premises architecture
- benefits:
	- low-latency access to on-premises systems
	- local data processing
	- data residency
	- easier migration from on-premises to cloud
	- fully managed service

### AWS WaveLength
- infrastructure deployments embedded within the telecommunication providers' data centers at the edge of 5G networks
- brings AWS services to the edge of 5G networks
- ultra-low latency applications through 5G networks
- traffic doesn't leave the Communication Service Provider's (CSP) network
- high bandwidth and secure connection to the parent AWS region
- no additional charges

### AWS LocalZones
- places AWS compute, storage, database, and other AWS services closer to end-users to run latency-sensitive applications
- extension of an AWS region

### Global Application Architecture
- Single Region, Single AZ
	- \[NOT\] high availability
	- \[NOT\] global latency
	- low difficulty
- Single Region, Multi AZ
	- high availability
	- \[NOT\] global latency
	- higher difficulty than Single Region, Single AZ
- Multi Region, Active-Passive
	- global read latency
	- \[NOT\] global write latency
	- high difficulty
- Multi Region, Active-Active
	- global read latency
	- global write latency
	- higher difficulty

### Summary
- Global DNS: Route 53
	- great to route users to the closest deployment with least latency
	- disaster recovery
- Global Content Delivery Network (CDN): CloudFront
	- replicate part of our application data into edge locations - decrease latency
	- cache common requests - improved user experience and decrease latency
- S3 Transfer Acceleration
	- accelerate global uploads and downloads into S3
- AWS Global Accelerator
	- improve global application availability and performance using the AWS global network
- AWS Outposts
	- deploy outpost racks into our on-premises
- AWS WaveLength
	- brings AWS services to the edge of 5G networks
	- ultra-low latency applications
- AWS LocalZones
	- brings AWS resources closer to users
	- good for latency-sensitive applications

---
## Cloud Integration

communication between applications
- Synchronous communication (application to application)
	- problematic if sudden spike in traffic
- Asynchronous / event-based communication (application to queue to application)
	- using SQS: queue model
	- using SNS: pub-sub model
	- using Kinesis: real-time data streaming model

### Amazon SQS
- Simple Queue Service
- fully managed service ~ serverless - use to ***decouple*** applications
- scales from 1 message/sec to 10,000s per second
- default retention of messages - 4 days (max. 14 days)
- no limit to how many messages in the queue
- messages are deleted after they are read by the consumers
- low latency
- consumers share the messages and scale horizontally

### Amazon Kinesis
- real-time big data streaming
- managed service to collect, process and analyze real-time streaming data at any scale
- Kinesis Data Streams
	- low latency streaming to ingest data at scale from hundreds of thousands of sources
- Kinesis Data Firehouse
	- load streams into S3, RedShift, ElasticSearch etc.
- Kinesis Data Analytics
	- perform real-time analytics on streams using SQL
- Kinesis Video Streams
	- monitor real-time video streams for analytics or ML

### Amazon SNS
- Simple Notification Service
- the 'event-publishers' only sends message to one SNS topic
- many 'event-subscribers'
- each subscriber to the topic will get all the messages
- up to 12,500,000 subscriptions per topic - 100,000 topics limit

### Amazon MQ
- managed message broker service for
	- RabbitMQ
	- ActiveMQ
- doesn't scale as much as SQS / SNS
- runs on servers, can run in Multi-AZ with failover
- has both queue feature (~SQS) and topic feature (~SNS)

### Summary
- SQS
	- queueing service in AWS
	- multiple producers - messages are kept up to 14 days
	- consumers can share the read and delete messages when done
	- used to decouple applications in AWS
- SNS
	- notification service in AWS
	- subscribers: email, HTTP, HTTPS, Lambda, Mobile...
	- multiple subscribers, send all messages to all of them
	- no message retention
- Kinesis
	- real-time data streaming, persistence and analysis
- Amazon MQ
	- managed message broker service for RabbitMQ and ActiveMQ in the cloud

---
## Amazon CloudWatch Metrics

- CloudWatch provides metrics for every service in AWS
- can create CloudWatch dashboards

### Important metrics
- EC2 instances
	- CPU utilization, Status Checks, Network
- EBS volumes
	- Disk Read/Writes
- S3 buckets
	- BucketSizeBytes, NumberOfObjects, AllRequests
- Billing
	- Total estimated charge (only in us-east-1)
- Service limits
	- how much we've been using a service API
- Custom metrics
	- push our own metrics

### Amazon CloudWatch Alarms
- alarms actions
	- Auto-Scaling
	- EC2 instances
	- SNS notifications
- alarm states
	- OK
	- INSUFFICIENT_DATA
	- ALARM

### Amazon CloudWatch Logs
- collect logs - troubleshooting
- collect logs from
	- Elastic Beanstalk: collection from application
	- ECS: collection from containers
	- AWS Lambda: collection from function logs
	- CloudTrail based on filter
	- CloudWatch log agents: on EC2 machines or on-premises servers
	- Route53: log DNS servers
- enables real-time monitoring of logs
- adjustable retention
- hybrid agent

### Amazon EventBridge
- (formerly) CloudWatch events
- schedule Cron jobs
- event pattern: event rules to react to a service doing something
- trigger lambda functions, send SNS function
- Schema Registry: model event schema
- archive events sent to an event bus
- replay archived events

### AWS CloudTrail
- provides governance, compliance and audit for our AWS account
- enabled by default
- get the history of all API calls
- can put logs from CloudTrail into CloudWatch logs or S3
- trail can be applied to all the regions or a single region

### AWS X-Ray
- debugging in production:
	- test locally
	- add log statements everywhere
	- re-deploy in production
- debugging for distributed systems is hard
	- therefore - X-Ray
- visual analysis of our applications
- troubleshooting performances (bottlenecks)
- understand dependencies in a microservice architecture
- pinpoint service issues
- review request behavior
- find errors and expectations
- identify users that are impacted

### Amazon CodeGuru
- ML-powered service for automated code reviews and application performance recommendations
- two functionalities
	- CodeGuru Reviewer
		- automated code reviews for static code analysis (development)
	- CodeGuru Profiler
		- visibility/recommendations about application performance during runtime (production)

### AWS Health Dashboard - Service History
- shows all regions, all services health
- has an RSS feed that can be subscribed to

### AWS Health Dashboard - Your Account
- provides alerts and remediation guidance when AWS is experiencing events that may impact the user
- for the services underlying our AWS resources

---
## VPC & Networking

### VPC
- Virtual Private Cloud

### IP Addresses in AWS
- IPv4
	- Internet Protocol version 4
	- Public IPv4
	- Private IPv4
		- fixed for EC2 instances
- Elastic IP
	- allows to attach a fixed IPv4 address to EC2 instances
- IPv6
	- Internet Protocol version 6
	- each IP is public

### VPC & Subnets Primer
- VPC
	- private network to deploy our resources
	- regional resource
- Subnets
	- allow to partition our network inside the VPC
	- availability zone resource
	- public subnet
		- accessible from the internet
	- private subnet
		- not accessible from the internet
	- to define access to the internet and b/w the subnets - Route Table

### Internet gateways & NAT gateways
- Internet Gateways help to connect the VPC instances with the internet
- public subnets have a route to the internet gateway
- NAT Gateways (AWS-managed) & NAT Instances (self-managed) allow instances in the private subnets to access the internet while remaining private

### Network ACL & Security Groups
- NACL - (first line of defense)
	- a firewall which controls traffic to and from subnet
	- can have ALLOW & DENY rules
	- are attached at the subnet level
	- rules can only include IP addresses
- Security Groups - (second line of defense)
	- a firewall which controls traffic to and from an ENI (Elastic Network Interface) & an EC2 instance
	- can only have ALLOW rules
	- rules include IP addresses and other security groups
	- operates at the instance level

### VPC Flow Logs
- information about IP traffic going into our instances
	- VPC flow logs
	- Subnet flow logs
	- Elastic Network Interface flow logs
- help to monitor and troubleshoot connectivity issues

### VPC Peering
- connect two VPC privately, using AWS' network
- make them behave as they are the same network
- must not have overlapping CIDR
- VPC peering connection is not transitive

### VPC Endpoints
- endpoints allows to connect to AWS services using a private network
- enhanced security
- lower latency
- VPC Endpoint Gateway: S3 and DynamoDB
- VPC Endpoint Interface: (the rest)

### AWS PrivateLink
- VPC Endpoint Services
- private access to VPC
- most secure and scalable way to expose a service to 1000s of VPCs
- does not require VPC peering, internet gateway, NAT, route tables...
- requires a network load balancer (service VPC) and ENI (customer VPC)

### Site to Site VPN & Direct Connect
- to connect on-premises DC to VPC
	- Site to Site VPN
		- connect on premises VPN to AWS
		- the connection is automatically encrypted
		- goes over the public internet
		- on-premises: Customer Gateway (CGW)
		- AWS: Virtual Private Gateway (VGW)
	- Direct Connect (DX)
		- establish physical connection b/w on-premises and AWS
		- connection is fast, private and secure
		- goes over a private network
		- takes at least a month to establish

### AWS ClientVPN
- connect from our computer using OpenVPN to our private network in AWS or on-premises
- allows to connect to our EC2 instances over a private IP
- goes over public internet

### Transit Gateway
- to solve the mess of network topology
- for having transitive peering b/w 1000s of VPCs and on-premises with a hub-and-spoke star connection
- one single gateway

---
## Security & Compliance

### AWS Shared Responsibility Model
- AWS responsibility - security ***of*** the cloud
	- protecting infrastructure that runs all the AWS services
	- managed services like S3, DynamoDB, RDS etc.
- Customer responsibility - security ***in*** the cloud
	- for EC2 instance, customer is responsible for management of the guest OS (including security patches and updates), firewall & network configuration, IAM
	- encrypting application data
- Shared controls
	- patch management, configuration management, awareness & training

*DDoS attack: Distributed Denial of Service attack*

### DDoS Protection on AWS
- AWS Shield Standard
	- protects against DDoS attack for our website and applications, for all customers at no additional costs
- AWS Shield Advanced
	- 24/7 premium DDoS protection
- AWS WAF
	- filter specific requests based on rules
- CloudFront and Route 53
	- availability protection using global edge network
	- combined with AWS Shield, provides attack mitigation at the edge
- *be ready to scale*
	- leverage AWS Auto-Scaling

### AWS Shield Standard
- free service that is activated for every AWS customer
- provides protection from attacks such as SYN/UDP floods, reflection attacks and other layer 3/layer 4 attacks

### AWS Shield Advanced
- optional DDoS mitigation service
- protect against more sophisticated attack in Amazon EC2, Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator and Route 53
- 24/7 access to AWS DDoS response team
- protect against higher fees during usage spikes due to DDoS

### AWS WAF
- Web Application Firewall
- protects our web application from common web exploits (layer 7)
- deploy on Application Load Balancer (ALB), API Gateway, CloudFront
- define Web ACL
	- rules can include IP addresses, HTTP headers, HTTP body or URI strings
	- protects from common attacks: SQL attacks and Cross-Site scripting (XSS)
	- size constraints, geo-match (block countries)
	- rate-based rules for DDoS protection

### Penetration Testing on AWS Cloud
- without prior approval on 8 services
	- Amazon EC2 instances, NAT Gateways, Elastic Load Balancers
	- Amazon RDS
	- Amazon CloudFront
	- Amazon Aurora
	- Amazon API Gateways
	- AWS Lambda and Lambda edge functions
	- Amazon Lightsail resources
	- Amazon Elastic Beanstalk environments
- prohibited activities
	- DNS zone walking via Amazon Route 53 hosted zones
	- DoS, DDoS, Simulated DDoS
	- port flooding
	- protocol flooding
	- request flooding

*Two types of encryption:*
- encryption at rest
- encryption at transit

### AWS KMS
- Key Management Service
- (software)

### AWS CloudHSM
- Hardware Security Module
- provisions encryption hardware

### CMK - Customer Managed Keys
- Customer managed CMK
- AWS managed CMK
- AWS owned CMK
- CloudHSM keys (custom keystore)

### AWS Certificate Manager (ACM)
- easily provision, manage and deploy SSL/TLS certificates
- provide in-flight encryption for websites (HTTPS)
- supports both public and private TLS certificates
- free of charge for public TLS certificates
- automatic TLS certificate renewal
- integrations with
	- Elastic Load Balancers
	- CloudFront Distributions
	- APIs on API Gateway

### AWS Secrets Manager
- store secrets
- force rotation of secrets every X number of days
- automate generation of secrets of rotate (using Lambda)
- integration with Amazon RDS
- secrets are encrypted with KMS
- mostly meant for RDS integration

### AWS Artifact
- (not really a service)
- portal that provides customers on-demand access to AWS compliance documents and AWS agreements
- Artifact reports
- Artifact agreements
- used to support internal audit or compliance

### Amazon GuardDuty
- intelligent threat discovery to protect our AWS account
- uses machine learning algorithm, anomaly detection, 3rd party data
- input data includes
	- CloudTrail event logs
	- VPC flow logs
	- DNS logs
	- Optional features
- can setup EventBridge rules
	- target AWS Lambda or SNS
- can protect against cryptocurrency attacks

### Amazon Inspector
- automated security assessments
- for EC2 instances
- for container images push to Amazon ECR
- for Lambda functions
- reporting and integration with AWS Security Hub
- send findings to Amazon EventBridge
- continuous scanning of the infrastructure only when needed

### AWS Config
- helps with auditing and recording compliance of our AWS resources
- helps record configurations and changes over time
- possibility of storing configuration data into S3
- per-region service

### Amazon Macie
- fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect our sensitive data in AWS
- alert us to sensitive data, such as personally identifiable information (PII)

### AWS Security Hub
- central security tool to manage security across several AWS accounts and automate security checks
- integrated dashboard showing current security and compliance status to quickly take actions
- automatically aggregate alerts in predefined or personal findings formats from AWS services & AWS partner tools

### Amazon Detective
- analyzes, investigates and quickly identifies the root cause of security issues or suspicious activities (using ML and graphs)
- automatically collects and processes events from VPC flow logs, CloudTrail, GuardDuty and create a unified view
- produce visualizations with details and context to get the root cause

### AWS Abuse
- abusive and prohibited behaviors are
	- spam
	- port scanning
	- DDoS attack
	- intrusion attempts
	- hosting objectionable and copyrighted content
	- distributing malware
- AWS Abuse form
- abuse@amazonaws.com

### Root use privileges
- actions that can be performed only by the root user
	- ***change account settings***
	- view certain tax invoices
	- ***close the AWS account***
	- restore IAM user permissions
	- ***change or cancel AWS support plan***
	- ***register as a seller in the Reserved Instance Marketplace***
	- configure an S3 bucket to enable MFA
	- edit or delete an S3 bucket policy that includes an invalid VPC ID or VPC endpoint ID
	- sign up for GovCloud

### IAM Access Analyzer
- Zone of trust = AWS account or AWS organization
- access outside zone of trusts => findings

### Summary
- Shared Responsibility on AWS
- Shield
	- automatic DDoS protection + 24/7 support for Advanced
- WAF
	- firewall to filter incoming requests based on rules
- KMS
	- encryption keys managed by AWS
- CloudHSM
	- hardware encryption
	- we manage encryption keys
- AWS Certificate Manager
	- provision, manage and deploy SSL/TLS certificates
- Artifact
	- get access to compliance reports
- GuardDuty
	- find malicious behavior with VPC, DNS & CloudTrail logs
- Inspector
	- find software vulnerabilities in EC2, ECR images and Lambda functions
- Config
	- track configuration changes and compliance against rules
- Macie
	- find sensitive data in Amazon S3 bucket
- CloudTrail
	- track API calls made by users within account
- AWS Security Hub
	- gather security findings from multiple AWS accounts
- Amazon Detective
	- find the root cause of security issues or suspicious activities
- AWS Abuse
	- report AWS resources used for abusive and illegal purposes
- Root user privileges
	- change account settings
	- close AWS account
	- change or cancel AWS support plan
	- register as a seller in the Reserved Instance Marketplace
- IAM Access Analyzer
	- identify which resources are shared externally

---
## Machine Learning

### Amazon Rekognition
- find objects, people, text, scenes in images and videos using ML
- facial analysis and facial search to do user verification, people counting
- create a database of 'familiar faces'

### Amazon Transcribe
- automatically convert speech to text
- uses a deep learning process called automatic speech recognition (ASR) to convert speech to text quickly and accurately
- automatically remove Personally Identifiable information (PII) using redaction
- supports automatic language identification for multi-lingual audio

### Amazon Polly
- turn text into lifelike speech using deep learning
- allows to create application that will talk

### Amazon Translate
- natural and accurate language translation
- allows us to localize content

### Amazon Lex & Connect
- Amazon Lex
	- same tech that powers Amazon Alexa
	- Automatic Speech Recognition (ASR) to convert speech to text
	- Natural Language Understanding to recognize the intent of text, callers
	- helps build chatbots
- Amazon Connect
	- receive calls, create contact flows, cloud-based virtual contact center
	- can integrate with other Customer Relationship Management (CRM) systems or AWS
	- no upfront payments

### Amazon Comprehend
- for Natural Language Processing (NLP)
- fully managed and serverless service
- uses machine learning to find insights and relationships in text

### Amazon SageMaker
- fully managed service for developers / data scientists to build ML models

### Amazon Forecast
- fully managed service that uses ML to deliver highly accurate forecasts
- 50% more accurate than looking at the data itself
- reduce forecasting from months to hours

### Amazon Kendra
- fully managed document search service powered by ML
- extract answers from within a document
- Natural Language Search capabilities
- learn from user interactions/feedback to promote preferred results (incremental learning)
- ability to manually fine-tune search results

### Amazon Personalize
- fully managed ML-service to build apps with real-time personalized recommendations
- same tech used by Amazon.com
- integrates into existing websites, applications, SMS, email marketing systems...
- implement in days

### Amazon Textract
- automatically extracts text, handwriting, and data from any scanned documents using AI and ML
- extract data from forms and tables
- read and process any type of document

### Summary
- Rekognition
	- face detection, labeling, celebrity recognition
- Transcribe
	- audio to text
- Polly
	- text to audio
- Translate
	- translations
- Lex
	- build chatbots
- Connect
	- cloud contact center
- Comprehend
	- Natural Language Processing
- SageMaker
	-  machine learning for every developer / data scientist
- Forecast
	- highly accurate forecasts
- Kendra
	- ML-powered search engine
- Personalize
	- real-time personalized recommendations
- Textract
	- detect text and data in documents

---
## Account Management

### AWS Organizations
- global service
- allows to manage multiple AWS accounts
- main account = master account
- cost benefits
	- consolidated billing across all accounts - single payment method
	- pricing benefits from aggregated usage
	- pooling of reserved EC2 instances for optimal savings
- API available to automate AWS account creation
- restrict account privileges using Service Control Policies (SCP)

### Multi Account Strategies
- create account per department, per cost center, per dev / test / prod, based on regulatory restrictions for better resource isolation to have separate per account usage limits, isolated account for logging
- *Multi account* vs *One account multi-VPC*
- use tagging standards for billing purposes
- enable CloudTrail on all accounts, send logs to central S3 account
- send CloudWatch logs to central logging account

### AWS Organization - structure
Root OU - Master Account
	$\to$ Dev OU
	$\to$ Prod OU
		$\to$ Finance OU
		$\to$ HR OU *etc.*

Service Control Policies
- whitelist or blacklist IAM actions
- applied at the OU or account level
- does not apply to the master account
- SCP is applied to all the Users and Roles of the account, including the root
- SCP doesn't apply to service linked roles
	- service linked roles allow other AWS services to integrate with AWS organizations and can't be restricted by SCPs
- SCP must have an explicit ALLOW
	- doesn't allow anything by default
- use cases:
	- restrict access to certain services
	- enforce PCI compliance by explicitly disabling services

**T.B.:** *As the master account is inherited from the root OU, the SCP does not apply to the master account and so it is not taken into account*

**T.B.:** *SCP hierarchy goes down like a tree, so one service DENIED at an earlier stage, if ALLOWED at a later stage, the ALLOW is not taken into account*

### AWS Organization - Consolidated Billing
- on *enabling*
	- Combined Usage
		- combine the usage across all AWS accounts in the AWS organization to share 
			- the volume pricing
			- Reserved instances and Savings plans discounts
	- One Bill
		- get one bill for all the AWS accounts in the AWS organization
- the management account can turn off Reserved Instances discount for any account in the AWS organization, including itself

### AWS Control Tower
- easy way to set up and govern a secure and compliant *multi-account AWS environment* based on best practices
- benefits
	- automate the set up of our environment in a few clicks
	- automate ongoing policy management using guardrails
	- detect policy violations and remediate them
	- monitor compliance through an interactive dashboard
- it runs on top of AWS Organizations
	- it automatically sets up AWS Organizations to organize account and implement SCPs

### AWS Service Catalog
- a quick self-service portal to launch a set of authorized products pre-defined by admins

### Pricing Models
- Pay as you go
	- pay for what you use, remain agile, responsive, meet scale demands
- Save when you reserve
	- minimize risks, predictably manage budgets, comply with long-term requirements
- Pay less by using more
	- volume-based discounts
- Pay less as AWS grows

### Free Service & Free Tier
- IAM
- VPC
- Consolidated billing
- Elastic Beanstalk
- CloudFormation
- Auto Scaling Groups
- Free tier:
	- EC2 t2.micro instance for a year
	- S3, EBS, ELB, AWS Data Transfer

### Compute Pricing - EC2
- only charged for what we use
- number of instances
- instance configuration
	- physical capacity
	- region
	- OS and software
	- instance type
	- instance size
- ELB running time and amount of data processed
- detailed monitoring
- MODELS:
	- *On-demand instances*
		- minimum of 60s
		- then, pay per sec (Linux/Windows) or pay per hour (other)
	- *Reserved instances*
		- up to 75% discount compared to *On-demand* on an hourly rate
		- 1 or 3-years of commitment
		- all upfront, partial upfront or no upfront
	- *Spot instances*
		- up to 90% discount compared to *On-demand* on an hourly rate
		- bid for unused capacity
	- *Dedicated host*
		- On-demand
		- reservation for 1 or 3 years of commitment
	- *Savings plans*
		- as an alternative to save on sustained image

### Compute Pricing - Lambda & ECS
- Lambda
	- pay per call
	- pay per duration
- ECS
	- EC2 launch type model
		- no additional fees
		- we pay for AWS resources stored and created in our application
- Fargate
	- Fargate launch type model
		- pay for vCPU and memory resources allocated to our applications in our containers

### Storage Pricing - S3
- number and size of the objects
	- price can be tiered (based on volume)
- number and type of requests
- data transfer OUT of the S3 region
- S3 Transfer Acceleration
- lifecycle transitions

### Storage Pricing - EBS
- volume type (based on performance)
- storage volume in GB per month provisioned
- IOPS (performance of the volumes)
	- general purpose SSD: *included*
	- provisioned IOPS SSD: *provisioned amount in IOPS*
	- Magnetic: *number of requests*
- Snapshots
	- added data cost per GB per month
- Data transfer
	- outbound data transfer are tiered for volume discounts
	- inbound is free

### Database Pricing - RDS
- per hour billing
- database characteristics
	- engine
	- size
	- memory class
- purchase type
	- on-demand
	- reserved instances (1 or 3 years) with required up-front
- backup storage
	- no additional charge up to 100% for a database for a region
- additional storage
	- per GB per month
- number of input and output requests per month
- deployment type
	- single AZ
	- multiple AZs
- Data transfer
	- outbound data transfer are tiered for volume discount
	- inbound is free

### Content Delivery - CloudFront
- pricing is different across different geographic regions
- aggregated for each edge location, then applied to the bill
- data transfer out (volume discount)
- number of HTTP/HTTPS requests

### Networking Costs in AWS per GB
- outside region to AZ-1 (inbound)
	- free
- between two instances in AZ-1
	- free
- between an instance in AZ-1 and another in AZ-2 in the same region
	- over a public IP
		- $0.02
	- over a private IP
		- $0.01
- from an instance in AZ-2 to outside (inter-region cost)
	- $0.02
- *trade-off between cost and high availability*

### Savings Plan
- commit a certain $ amount per hour for 1 or 3 years
- easiest way to setup long-term commitments on AWS
- EC2 savings plan
	- up to 72% discount compared to on-demand
	- commit to usage of individual instance families in a region (e.g. C5 or M5)
	- regardless of AZ, size, OS or tenancy
	- all upfront, partial upfront or no upfront
- Compute savings plan
	- up to 66% discount compared to on-demand
	- regardless of family, region, size, OS, tenancy, compute options
	- compute options
		- EC2 instances
		- Fargate containers
		- Lambda functions
- Machine learning savings plan
	- SageMaker...
- setup from the AWS cost explorer console

### AWS Compute Optimizer
- reduces costs and improve performance by recommending optimal AWS resources for our workloads
- helps us choose optimal configurations and right-size our workloads
- uses machine learning to analyze our resources' configuration and track their CloudWatch metrics to understand their utilization
- supported resources
	- EC2 instances
	- EC2 auto-scaling groups
	- EBS volumes
	- Lambda functions
- lower our costs by up to 25%
- recommendations can be exported to S3

### Billing and Costing Tools
- estimating costs in the cloud
	- Pricing Calculator
		- estimate the cost for our solution architecture
- tracking costs in the cloud
	- Billing Dashboard
		- cost forecast for the month
		- AWS free tier dashboard
	- Cost Allocation Tags
		- track AWS costs on a detailed level
		- AWS generated tags
			- automatically applied to a resource created
			- starts with prefix *aws:*
		- user-defined tags
			- defined by the user
			- starts with prefix *user:*
	- Cost and Usage Reports
		- dive deeper into AWS costs and usage
		- it contains the most comprehensive set of AWS cost and usage data available, including additional metadata about AWS servicing, pricing, and reservations
		- it lists AWS usage for each service category used by an account and its IAM users in hourly or daily line items, as well as any tags that we have activated for cost allocation purposes
		- can be integrated with Athena, Redshift or QuickSight
	- Cost Explorer
		- visualize, understand and manage AWS cost and usage over time
		- create custom reports that analyze cost and usage data
		- analyze data at a high level
			- total cost and usage across all accounts
		- choose an optimal savings plan
		- forecast usage up to 12 months based on previous usage
- monitoring against cost plans
	- Billing Alarms
		- billing data metric is stored in CloudWatch *us-east-1*
		- billing data are for overall worldwide AWS costs
		- it's for actual costs, not projected costs
		- intended as a simple alarm
	- Budgets
		- create budget and send alarms when cost exceeds the budget
		- 4 types of budget
			- usage
			- cost
			- reservation
			- savings plan
		- for reserved instances (RI)
			- track utilization
			- supports EC2, ElastiCache, RDS, Redshift
		- up to 5 SNS notification per budget
		- same options as AWS cost explorer
		- first 2 budgets are free, then $0.02/day/budget

### AWS Cost Anomaly Detection
- continuously monitor our cost and usage using ML to detect unusual spends
- it learns our unique, historic spend patterns to detect one-time cost spike and/or continuous cost increases
- we don't need to define thresholds
- monitor AWS services, member accounts, cost allocation tags, or cost categories
- sends us the anomaly detection report with root-cause analysis
- get notified with individual alerts or daily/weekly summary (using SNS)

### AWS Service Quotas
- notify us when we are close to a service quota threshold
- create CloudWatch alarms on the Service Quotas Console
- request a quota increase from the AWS Service Quotas or shutdown resources before the limit is reached

### Trusted Advisor
- no need to install anything
	- high level AWS account assessment
- analyze our AWS account and provides recommendations on 5 categories
	- ***Cost optimization***
	- ***Performance***
	- ***Security***
	- ***Fault tolerance***
	- ***Service limits***
- Support plans
	- 7 core checks - (*Basic* & *Developer* Support plan)
		- S3 Bucket Permissions
		- Security Groups - Specific ports unrestricted
		- IAM use - (one IAM user minimum)
		- MFA on root account
		- EBS Public Snapshots
		- RDS Public Snapshots
		- Service limits
	- Full checks - (*Business* & *Enterprise* Support plan)
		- Full Checks available on  the 5 categories
		- Ability to set CloudWatch alarms when reaching limits
			- Programmatic Access using *AWS Support API*

### AWS Support Plans Pricing
- Basic Support
	- free
	- customer service & communities - 24x7 access
	- AWS trusted advisor - 7 core checks
	- AWS personal health dashboard
- AWS Developer Support Plan
	- All Basic Support Plan +
	- business hours email access to Cloud Support Associates
	- unlimited cases / 1 primary contact
	- cases severity / response times:
		- general guidance: <24 business hours
		- system impaired: <12 business hours
- AWS Business Support Plan (24/7)
	- intended to be used in case of production workload
	- Trusted Advisor
		- full set of checks
		- API access
	- 24x7 phone, email, and chat access to Cloud Support Engineers
	- unlimited case / unlimited contacts
	- access to infrastructure event management for additional fee
	- cases severity / response time:
		- general guidance: <24 business hours
		- system impaired: <12 business hours
		- production system impaired: <4 hours
		- production system down: <1 hour
- AWS Enterprise On-Ramp Support Plan (24/7)
	- intended to be used in case of production or business critical workloads
	- all of Business Support Plan +
	- access to a pool of Technical Account Managers (TAM)
	- Concierge Support Team
	- infrastructure event management, well-architected & operations reviews
	- cases severity / response time:
		- general guidance: <24 business hours
		- system impaired: <12 business hours
		- production system impaired: <4 hours
		- production system down: <1 hour
		- business critical system down: <30 minutes
- AWS Enterprise Support Plan (24/7)
	- intended to be used in case of mission critical workloads
	- all of Business Support Plan +
	- access to designated Technical Account Manager (TAM)
	- Concierge Support Team
	- infrastructure event management, well-architected & operations reviews
	- cases severity / response time:
		- general guidance: <24 business hours
		- system impaired: <12 business hours
		- production system impaired: <4 hours
		- production system down: <1 hour
		- business critical system down: <15 minutes

### Summary - Account Best Practices
- operate multiple accounts using ***Organizations***
- use SCP to restrict account power
- easily setup multiple accounts with best-practices with AWS control tower
- use ***tags*** & ***cost allocation tags*** for easy management and billing
- IAM guidelines
	- MFA
	- least-privilege
	- password policy
	- password rotation
- ***Config*** to record all resource configurations & compliance over time
- ***CloudFormation*** to deploy stacks across multiple accounts and regions
- ***Trusted Advisor*** to get insights, Support Plans adapted to our needs
- send service logs and access logs to ***S3*** or ***CloudWatch logs***
- ***CloudTrail*** to record API calls made within the account
- if the account is compromised
	- change the root password, delete and rotate all passwords / keys, contact AWS support
- allow users to create pre-defined stacks by admins using ***AWS Service Catalog***

### Summary - Billing and Costing tools
- ***Compute Optimizer***
	- recommends resources' configurations to reduce cost
- ***Pricing Calculator***
	- cost of services on AWS
- ***Billing Dashboard***
	- high level overview + free tier dashboard
- ***Cost Allocation Tags***
	- tag resources to create detailed reports
- ***Cost and Usage reports***
	- most comprehensive billing dataset
- ***Cost Explorer***
	- view current usage and forecast usage
- ***Billing Alarms***
	- in us-east-1
	- track overall and per-service billing
- ***Budgets***
	- more advanced
	- track usage, costs, RI, and get alerts
- ***Savings Plans***
	- easy way to save based on long-term usage of AWS
- ***Cost Anomaly Detection***
	- detect unusual spends using ML
- ***Service Quotas***
	- notify when we are close to a service quota threshold

---
## Advanced Identity

### AWS STS (Security Token Service)
- enables us to create temporary, limited-privileges credentials to access our AWS resources
- short-term credentials
	- we configure expiration periods
- use cases:
	- identity federation: manage user identities in external systems
	- IAM roles for cross/same account access
	- IAM roles for Amazon EC2

### Amazon Cognito
- a way to provide for our Web and Mobile applications users
- instead of creating them an IAM user, we create a user in Cognito

### Microsoft Active Directory
- found on any windows server with AD Domain Services
- database of objects: user account, computers, printers, file shares, security groups
- centralized security management, create account, assign permissions

### (Extension) - AWS Directory Services
- ***AWS Managed Microsoft AD***
	- create our own AD in AWS, manage users locally, supports MFA
	- establish 'trust' connections with out on-premise AD
- ***AD Connector***
	- Directory Gateway (proxy) to redirect to on-premise AD, supports MFA
	- users are managed on the on-premise AD
- ***Simple AD***
	- AD-compatible manage directory on AWS
	- cannot be joined with on-premise AD

### AWS IAM Identity Center
- (successor to AWS single sign-on)
- one login for all the
	- AWS accounts in the AWS organization
	- business cloud applications
	- SAML2.0-enabled applications
	- EC2 Windows instances
- identity providers
	- built-in identity store in IAM Identity Center
	- 3rd party: Active Directory (AD), OneLogin, Okta

### Summary
- IAM
	- for users that we trust and belong to our company
- Organizations
	- manage multiple AWS accounts
- Security Token Service (STS)
	- temporary, limited privileges credentials to access AWS resources
- Cognito
	- create a database of users for our mobile & web applications
- Directory Services
	- integrate Microsoft Active Directory in AWS
- IAM Identity Center
	- one login for multiple AWS accounts & applications

---
## Other AWS Services

### Amazon Workspaces
- managed Desktop as a Service (DaaS) solution to easily provision Windows or Linux desktops
- great to eliminate management of on-premise VDI (Virtual Desktop infrastructure)
- fast and quickly scales to thousand of users
- secured data - KMS
- pay-as-you-go service (monthly or hourly rates)

### Amazon AppStream 2.0
- desktop application streaming service
- delivering to any computer without acquiring, provisioning infrastructure
- the application is delivered from within a web browser

|**Workspaces**|**AppStream 2.0**|
|:---:|:---:|
|fully managed VDI and desktop available|stream a desktop application to web browsers|
|the users connect to a VDI and open native or WAM applications|works with any device that has a web browser|
|workspaces are on-demand and always on|allow to configure an instance type per application type|

### AWS IoT Core
- allows to connect IoT devices into the AWS cloud
- serverless, secure and scalable to billions of devices and trillions of messages
- the applications can communicate with our devices even when they are not connected
- integrates with a lot of AWS services
- build IoT applications that gather, process, analyze and act on data

### Amazon Elastic Transcoder
- convert media files stored in S3 into media files in the formats required by consumer playback devices (phones etc.)
- benefits
	- easy to use
	- highly scalable
	- cost effective
		- duration-based pricing model
	- fully managed and secure, pay for what you use

### AWS AppSync
- to build backend for mobile application
- store and sync data across mobile and web apps in real-time
- makes use of GraphQL
- client code can be generated automatically
- integrations with DynamoDB / Lambda
- real-time subscriptions
- offline data synchronization (replaces Cognito Sync)
- fine grained security
- AWS Amplify can leverage AWS AppSync in the background

### AWS Amplify
- a set of tools and services that helps develop and deploy full stack web and mobile applications
- authentication, storage, API (REST, GraphQL), CI/CD, PubSub, Analytics, AI/ML predictions, monitoring, source code from AWS, GitHub etc.
- *Elastic Beanstalk for mobile applications*

### AWS Device Farm
- fully managed services that test our web and mobile applications against desktop browsers, real mobile devices and tablets
- run tests concurrently on multiple devices
- ability to configure devices

### AWS Backup
- fully managed service to centrally manage and automate backups across AWS services
- on-demand and scheduled backups
- supports PITR (point-in-time recovery)
- retention periods, lifecycle management, backup policies
- cross-region backup
- cross-account backup
	- using AWS organizations

### Disaster Recovery Strategies
- Backup and Restore
	- S3 $\to$ servers
	- cost - minimal
- Pilot Light
	- core functions of the app
- Warm Standby
	- full version of the app but at minimum size
- Multi-site / Hot-site
	- full version of the app at full size

### AWS Elastic Disaster Recovery (DRS)
- quickly and easily recover our physical, virtual and cloud-based servers into AWS
- continuous block-level replication of our servers

### AWS DataSync
- move large amount of data from on-premises to AWS
- can synchronize to
	- Amazon S3
	- Amazon EFS
	- Amazon FSx for Windows
- replications tasks can be scheduled hourly, daily or weekly
- the replication tasks are incremental after the first full load

### AWS Application Discovery Service
- plan migration projects by gathering information about on-premises data centers
- server utilization data and dependency mapping are important for migration
	- Agentless Discovery (AWS Agentless Discovery Connector)
	- Agent-based Discovery (AWS Application Discovery Agent)
- resulting data can be viewed within AWS migration hub
- Simplest way
	- *AWS Application Migration Service (MGN)*

### AWS Application Migration Service
- lift-and-shift (rehost) solution which simplify migrating applications to AWS
- converts our physical, virtual and cloud-based servers to run natively on AWS

### AWS Migration Evaluator
- helps build a data-driven business case for migration to AWS
- provides a clear baseline of what our organization is running today
- install agentless collector to conduct broad-based discovery
- take a snapshot of on-premises footprint, server dependencies,...
- analyze current state, define target state, then develop migration plan

### AWS Fault Injection Simulator (FIS)
- fully managed service for running fault injection experiments on AWS workloads
- based on ***chaos engineering***
	- stressing an application by creating disruptive events, observing how the system responds, and implementing improvements
- helps uncover hidden bugs and performance bottlenecks
- supports many AWS services
	- EC2
	- ECS
	- EKS
	- RDS

### AWS Step Functions
- build serverless visual workflow to orchestrate our Lambda functions
- features
	- sequence
	- parallel
	- conditions
	- timeouts
	- error handling
- can integrate with EC2, ECS, on-premises servers, API gateway, SQS queues, etc.
- possibility of implementing human approval feature

### AWS Ground Station
- fully managed service that lets us control satellite communications, process data, and scale our satellite operations
- provides a global network of satellite ground stations near AWS regions
- allows us to download the satellite data into the AWS VPC within seconds
- send satellite data to S3 or EC2 instances

### AWS Pinpoint
- scalable 2-way (outbound/inbound) marketing communications service
- supports SMS, email, push, voice, and in-app messaging
- ability to segment and personalize messages with the right content to customers
- possibility to receive replies
- scales to billions of messages per day

---
## AWS Architecting and Ecosystem

### General Guiding Principles
- stop guessing capacity needs
- test systems at production scale
- automate to make architectural experimentation easier
- allow for evolutionary architectures
	- design based on changing requirements
- drive architecture using data
- improve through game days
	- simulate application for flash sale days

### AWS Cloud Best Practices - Design Principles
- scalability
	- vertical & horizontal
- disposable resources
	- servers should be disposable and easily configured
- automation
	- serverless, infrastructure as a service (IaaS), auto-scaling...
- loose coupling
	- *Monolith* are applications that can do more and more, becomes bigger
	- break it down into smaller, loosely coupled components
	- a change or failure in one component should not cascade to the other components
- services, not servers
	- don't use just EC2
	- use managed services, databases, serverless etc.

### Well Architected Framework - 6 Pillars
- ***Operational Excellence***
- ***Security***
- ***Reliability***
- ***Performance Efficiency***
- ***Cost Optimization***
- ***Sustainability***

**T.B.:** *not to balance or trade-off b/w them, they are a* ***synergy***

### Pillar 1: Operational Excellence
- includes the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures
- design principles
	- perform operations as code - Infrastructure as code (***CloudFormation***)
	- annotate documentation - automate the creation of annotated documentation after every build
	- make frequent, small, reversible changes - so that in case of failure, we can reverse it
	- refine operations procedures frequently - ensure that team members are familiar with it
	- anticipate failure
	- learn for all operational failures

### Operational Excellence - AWS Services
- Prepare
	- AWS CloudFormation
	- AWS Config
- Operate
	- AWS CloudFormation
	- AWS Config
	- AWS CloudTrail
	- AWS CloudWatch
	- AWS X-Ray
- Evolve
	- AWS CloudFormation
	- AWS CodeBuild
	- AWS CodeCommit
	- AWS CodeDeploy
	- AWS CodePipeline

### Pillar 2: Security
- includes the ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies
- design principles
	- implement a strong identity foundation - centralize privilege management and reduce or even eliminate reliance on a long-term credential - *Principle of least privilege* - **IAM**
	- enable traceability - integrate logs and metrics with systems to automatically respond and take actions
	- apply security at all layers - like edge network, VPC, subnet, load balancer, every instance, operating system, and application
	- automate security best practices
	- protect data in transit and at rest - encryption, tokenization, and access control
	- keep people away from data - reduce or eliminate the need for direct access or manual processing of data
	- prepare for security events - run incident response simulations and use tools with automation to increase speed for detection, investigation, and recovery

### Security - AWS Services
- Identity and Access Management
	- IAM
	- IAM STS
	- MFA Token
	- AWS Organizations
- Detective Controls
	- AWS Config
	- AWS CloudTrail
	- AWS CloudWatch
- Infrastructure Protection
	- Amazon CloudFront
	- Amazon VPC
	- AWS Shield
	- AWS WAF
	- Amazon Inspector
- Data Protection:
	- KMS
	- S3
	- Elastic Load Balancing (ELB)
	- Amazon EBS
	- Amazon RDS
- Incident Response
	- IAM
	- AWS CloudFormation
	- Amazon CloudWatch Events

### Pillar 3: Reliability
- ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues
- design principles
	- test recovery procedures - use automation to simulate different failures  or to recreate scenarios that led to failures before
	- automatically recover from failure - anticipate and remediate failures before they occur
	- scale horizontally to increase aggregate system availability - distribute requests across multiple, smaller resources to ensure that they don't share a common point of failure
	- stop guessing capacity - maintain the optimal level to satisfy demand without over or under provisioning - use auto scaling
	- manage change in automation - use automation to make changes to infrastructure

### Reliability - AWS Services
- Foundations
	- IAM
	- Amazon VPC
	- Service Limits
	- Trusted Advisor
- Change Management
	- AWS Auto Scaling
	- Amazon CloudWatch
	- AWS CloudTrail
- Failure Management
	- Backups
	- AWS CloudFormation
	- Amazon S3
	- Amazon S3 Glacier
	- Amazon Route 53

### Pillar 4: Performance Efficiency
- includes the ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve
- design principles
	- democratize advanced technologies - advance technologies become services and hence we can focus more on product development
	- go global in minutes - easy deployment in multiple regions
	- use serverless architectures - avoid burden of managing servers
	- experiment more often - easy to carry out comparative testing
	- mechanical sympathy - be aware of all AWS services

### Performance Efficiency - AWS Services
- Selection
	- AWS Auto Scaling
	- AWS Lambda
	- Amazon Elastic Book Store (EBS)
	- Amazon Simple Storage Service (S3)
	- Amazon RDS
- Review
	- AWS CloudFormation
	- AWS New Blog
- Monitoring
	- Amazon CloudWatch
	- AWS Lambda
- Trade-offs
	- Amazon RDS
	- Amazon ElastiCache
	- AWS Snowball
	- Amazon CloudFront

### Pillar 5: Cost Optimization
- includes the ability to run systems to deliver business value at the lowest price point
- design principles
	- adopt a consumption mode - pay for what you use
	- measure overall efficiency - use CloudWatch
	- stop spending money on data center operations - AWS does the infrastructure part and enables customer to focus on organization projects
	- analyze and attribute expenditure - accurate identification of system usage and costs, helps measure return on investment (ROI) - make sure to use tags
	- use managed and application level services to reduce cost of ownership - as managed services operate at cloud scale, they can offer a lower cost per transaction or service

### Cost Optimization - AWS Services
- Expenditure Awareness
	- AWS Budgets
	- AWS Cost and Usage Report
	- AWS Cost Explorer
	- Reserved Instance Reporting
- Cost Effective Resources
	- Spot Instances
	- Reserved Instances
	- Amazon S3 Glacier
- Matching Supply and Demand
	- AWS Auto Scaling
	- AWS Lambda
- Optimizing Over Time
	- AWS Trusted Advisor
	- AWS Cost and Usage Report
	- AWS News Blog

### Pillar 6: Sustainability
- it focuses on minimizing the environmental impacts of running cloud workloads
- design principles
	- understand your impact - establish performance indicators, evaluate improvements
	- establish sustainability goals - set long-term goals for each workload, model return on investment (ROI)
	- maximize utilization - right size each workload to maximize the energy efficiency of the underlying hardware and minimize idle resources
	- anticipate and adopt new, more efficient hardware and software offerings - and design for flexibility to adopt new technologies over time
	- use managed services - shared services reduce the amount of infrastructure; managed services help automate sustainability best practices as moving infrequent accessed data to cold storage and adjusting compute capacity
	- reduce the downstream impact of cloud workloads - reduce the amount of energy or resources required to use your services and reduce the need for your customers to upgrade their devices

### Sustainability - AWS Services
- EC2 Auto Scaling, Serverless offering (Lambda, Fargate)
- Cost Explorer, AWS Graviton 2, EC2 T instances, & Spot Instances
- EFS-IA, Amazon S3 Glacier, EBS Cold HDD Volumes
- S3 Lifecycle Configurations, S3 Intelligent Tiering
- Amazon Data Lifecycle Manager
- Read Local, Write Global
	- RDS Read Replicas, Aurora Global DB, DynamoDB Global Table, CloudFront

### AWS Well-Architected Tool
- free tool to review our architectures against the 6 pillars in Well-Architected framework and then adopt architectural best practices

### AWS Cloud Application Framework
- e-book (not a service)
- helps build and then execute a comprehensive plan for our digital transformation through innovative use of AWS
- created by AWS professionals by takin advantage of AWS Best Practices and lessons learned from 1000s of customers
- AWS CAF identifies specific ***(1)*** organization capabilities that underpin successful cloud transformations
- AWS CAF groups its ***(2)*** capabilities in six perspectives: Business, People, Governance, Platform, Security, and Operations

### Business Capabilities
- ***Business Perspective*** helps ensure that our cloud investments accelerate our digital transformation ambitious and business outcomes
- ***People Perspective*** serves as a bridge between technology and business, accelerating the cloud journey to help organizations more rapidly evolve to a culture of continuous growth, learning, and where change becomes business-as-normal, with focus on culture, organizational structure, leadership, and workforce
- **Governance Perspective** helps us orchestrate our cloud initiatives while maximizing organizational benefits and minimizing transformation related risks

### Technical Capabilities
- ***Platform Perspective*** helps us build an enterprise-grade, scalable, hybrid cloud platform; modernize existing workloads; and implement new cloud-native solutions
- ***Security Perspective*** helps us achieve the confidentiality, integrity, and availability of your data and cloud workloads
- ***Operations Perspective*** helps ensure that our cloud services are delivered at a level that meets the needs of your business

### AWS CAF - Transformation Domains
- **Technology** - using the cloud to migrate and modernize legacy infrastructure, applications, data and analytics platforms…
- **Process** - digitizing, automating, and optimizing our business operations
	- leveraging new data and analytics platforms to create actionable insights
	- using machine learning (ML) to improve our customer service experience…
- **Organization** - reimagining our operating mode
	- organizing our teams around products and value streams
	- leveraging agile methods to rapidly iterate and evolve
- **Product** - reimagining our business model by creating new value propositions (products & services) and revenue models

### AWS Right Sizing
- EC2 has many instance types, but choosing the most powerful instance type isn’t the best choice, because the cloud is elastic
- Right sizing is the process of matching instance types and sizes to our workload performance and capacity requirements at the lowest possible cost
- Scaling up is easy so always start small
- It’s also the process of looking at deployed instances and identifying opportunities to eliminate or downsize without compromising capacity or other requirements, which results in lower costs
- It's important to right size
	- before a Cloud Migration
	- continuously after the cloud onboarding process (requirements change over time)
- CloudWatch, Cost Explorer, Trusted Advisor, 3rd party tools can help

### AWS Ecosystem
- AWS Blogs
- AWS Forums
- AWS Whitepapers & Guide
- AWS Partner Solutions
- AWS Solutions

### AWS Ecosystem - AWS Support
*discussed earlier*

### AWS Marketplace
- digital catalog with thousands of software listings from independent software vendors (3rd Party)
	- Custom AMI
	- CloudFormation templates
	- Software as a Service
	- Containers
- if we buy through the AWS Marketplace, it goes to the AWS bill
- we can sell our own solutions in the AWS Marketplace

### AWS Training
- AWS Digital (*online*) or Classroom training (*in-person or virtual*)
- AWS Private Training (*for our organization*)
- Training and Certification for the U.S. Government
- Training and Certification for the Enterprise
- AWS Academy
	- helps universities teach AWS

### AWS Professional Services & Partner Network
- The AWS Professional Services organization is a global team of experts
- They work alongside your team and a chosen member of the APN
- APN = AWS Partner Network
- APN Technology Partners
	- providing hardware, connectivity, and software
- APN Consulting Partners
	- professional services firm to help build on AWS
- APN Training Partners
	- find who can help you learn AWS
- AWS Competency Program
	- AWS Competencies are granted to APN Partners who have demonstrated technical proficiency and proven customer success in specialized solution areas
- AWS Navigate Program: help Partners become better Partners

### AWS Knowledge Center
- contains the most frequent & common questions and requests

### AWS IQ
- quickly find professional help for our AWS projects
- engage and pay AWS certified 3rd party experts for on-demand project work
- video-conferencing, contract management, secure collaboration, integrated billing
- for customer
	- *submit request* $\to$ *review responses* $\to$ *select expert* $\to$ *work securely* $\to$ *pay per milestone*
- for experts
	- *create profile* $\to$ *connect with customers* $\to$ *start a proposal* $\to$ *work securely* $\to$*get paid*

### AWS re:Post
- community forum
- AWS-managed Q&A service offering crowd-sourced, expert-reviewed answers to our technical questions about AWS that replaces the original AWS Forums
- part of the AWS free tier
- community members can earn reputation points to build up their community expert status by providing accepted answers and reviewing answers from other users
- questions from AWS Premium Support customers that do not receive a response from the community are passed on to AWS Support engineers
- AWS re:Post is not intended to be used for questions that are time-sensitive or involve any proprietary information

### AWS Managed Services
- provides infrastructure and application support on AWS
- AMS offers a team of AWS experts who manage and operate our infrastructure for security, reliability, and availability
- helps organizations offload routine management tasks and focus on their business objectives
- fully managed service, so AWS handles common activities such as change requests, monitoring, patch management, security, and backup services
- implements best practices and maintains our AWS infrastructure to reduce our operational overhead and risk
- AMS business hours are 24/365

---
