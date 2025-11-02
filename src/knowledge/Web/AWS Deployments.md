
# Setting up a small sever
- create an **EC2** instance
- instance type - **t2.micro**
- generate a key-pair
	- to ssh into that server
- in the directory with the *.pem* file
	- change mode of private key file **`chmod 700 <name of pem file>`**
		- the certificate file should be very respective
	- **`ssh -i <name of pem file> ubuntu@<ip>`**
- if not connected to the internet
	- `/etc/resolv.conf` -> add `nameserver 8.8.8.8`
- edit inbound rules

# Reverse proxy
- 80 <- listening to <- 8080, 8081, ...
- ***Nginx***
- point clients tor respective backends
- configuration
	- **`/etc/nginx/nginx.conf`**
```.config
http {
	server {
		listen 80;
		server_name abc.xyz.com;

		location / {
			proxy_pass http://localhost:8080;
			proxy_http_version 1.1;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection 'upgrade';
			proxy_set_header Host $host;
			proxy_cache_bypass $http_upgrade;
		}
	}
}
```
- remove the original conf file, rewrite it
- restart nginx
```shell
sudo nginx -s reload
```

# Certificates
- https
- ***certbot***

# To make sure a site is always up
- in the server
```shell
pm2 start index.js
```

