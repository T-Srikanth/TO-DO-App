# MERN stack To-Do-App
**M**ongoDB: document-based open source database
**E**xpress: web application framework for Node.js
**R**eact: javascript frontend library
**N**ode.js: javascript runtime environment
Frontend will be running on port 3000; backend on port 5001 on the same AWS ubuntu server. Database on MongoDB Atlas.

## Prerequisites:
1. Ubuntu EC2 instance with node installed
    * add inbound rules in the security group to allow TCP traffic from anywhere on port 3000 & 5001, frontend will be on 3000 and backend on 5001 by default.
    * install [nvm](https://github.com/nvm-sh/nvm) to maintain node version on the server.
    * `source .bashrc file`
    * install [node](https://nodejs.org/en) using: `nvm install node` (installs latest node version) [node -v: v22.9.0, npm -v: 10.8.3]
2. A database in MongoDB Atlas.
    * create a free tier database in MongoDB Atlas preferably on AWS as our frontend and backend will be on AWS.
    * In MongoDB Atlas - create database user, allow network access either from anywhere or just from the CIDR of network of EC2 instance
        - get connection url that looks like this `mongodb+srv://<username>:<db_password>@cluster0.ycitk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

## On the server(AWS instance):
1. clone [git repo](https://github.com/T-Srikanth/TO-DO-App.git) using git clone command
2. change directory: `cd TO-DO-App/backend` 
3. edit `~/TO-DO-App/backend/.env` file with mongoDB database connection url
4. change directory: `cd ~/TO-DO-App/frontend`
5. to install dependencies: `npm install` 
6. change directory: `cd ~/TO-DO-App`
7. run: `npm install express mongoose cors dotenv axios`
8. make shell script an executable: `chmod +x start_app.sh` 
9. start the app: `./start_app.sh` 
10. access app using this url `http://<instance_public_ip>:3000`