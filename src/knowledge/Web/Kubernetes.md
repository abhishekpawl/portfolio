
# Container orchestration
- e.g. if a container (somewhere - EC2/GCP/Datacenter) goes down, then it will restart the container
- constantly looking at the *cluster*
- *spec*
- k8s - cloud orchestration engine
- lets us create, delete and update containers
- system - autoheal
- frontend and backend are all **pods** in our *kubernetes cluster*

# k8s
- i have 4 machines (k8s cluster)
	- worker 1, 2, 3 nodes
	- master node
		- the developer talks to the master

## Master Node
- API Server
	- developer sends an http request to the API server
	- does authorization checks
	- puts the info in etcd - like - a pod needs to be started
- etcd
	- key-value store
	- distributed database
	- multiple master nodes can share data amongst each other
- kube-scheduler
	- keep on infinitely running and checking if there is a pod that needs to be started on the machine
- kube-controller-manager
	- infinite loop
	- deployment controller
	- jobs controller
	- replica sets controller

## Worker Node
- container runtime
	- where the containers run
- kubelet
	- to be able to put containers in container runtime
	- process running on the worker node
- kube-proxy
	- to reach the container running in the worker node

# Single node setup
- `kind create cluster --name local`
- one master node will be created
	- it will suffice as the worker node too
	- but it's not ideal

# Multi-node setup
- config file
```yml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: controle-plane
- role: worker
- role: worker
```
- `kind create cluster --config clusters.yml --name local`

# kubectl
- kind puts the creds in the file `~/.kube.config`
- kubectl automatically takes the creds
- to get info about nodes
	- `kubectl get nodes`
- **to create a pod**
	- `kubectl run nginx --image=nginx --port=80`
	- image name
	- the port I want to expose on the container
- **to get info about the pod**
	- `kubectl describe pod nginx`

## kubernetes manifest file
- an yaml file, where we can describe what to run
```yml
apiVersion: v1
kind: Pod
metadata:
	name: nginx
spec:
	containers:
	- name: nginx
	  image: nginx
	  ports:
	  - containerPort: 80
```
- *Pod* was defined in *v1* of kubernetes
- `kubectl apply -f manifest.yml` - to run acc to the manifest file

## Deployment
- it takes care of
	- replicas
	- starting pods
	- rolling them back
	- updating pods
	- bringing them back up
- it manages *pods*
	- pod is the smallest unit in k8s
- a deployment *creates a replica set*
- a replica set manages the pods
- the blueprint of a deployment e.g.
```yml
apiVersion: apps/v1
kind: Deployment
metadata:
	name: nginx-deployment
spec:
	replicas: 3
	selector:
		matchLabels:
			app: nginx
	template:
		metadata:
			labels:
				app: nginx
		spec:
			containers:
			- name: nginx
			  image: nginx:latest
			  ports:
			  - containerPort: 80
```
![[k8s-deployment.png]]
- deployment created a rs (replica set)
- on deleting the deployment it will delete everything it created

## Replica set
- stable set of pods

## Difference
- on updating a deployment, it creates a new replica set so that there is a option to *rollback*

## Services
- to expose
```yml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
    nodePort: 30007
  type: NodePort
```
- types of services
	- NodePort
	- ClusterIP
	- Loadbalancer
- for the worker container to listen on a port
```yml
# config file - kind.yml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 30007
    hostPort: 30007
- role: worker
  extraPortMappings:
  - containerPort: 30007
    hostPort: 30008
- role: worker
```
- run the command with this configuration - `kind create cluster --config kind.yml --name local`


