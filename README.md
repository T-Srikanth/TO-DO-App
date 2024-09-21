# MERN stack To-Do-App
**M**ongoDB: document-based open source database  
**E**xpress: web application framework for Node.js  
**R**eact: javascript frontend library  
**N**ode.js: javascript runtime environment  
Frontend will be running on port 3000; backend on port 5001 on the same AWS ubuntu server. Database on MongoDB Atlas.

## Prerequisites:
1. Ubuntu EC2 instance with node installed. (node version used: v22.9.0)
    * Add inbound rules in the security group to allow TCP traffic from anywhere on port 3000 & 5001, frontend will be on 3000 and backend on 5001 by default.
    * If node isn't installed, install using [nvm](https://github.com/nvm-sh/nvm).
2. A database in MongoDB Atlas.
    * Create a free tier database in MongoDB Atlas preferably on AWS as our frontend and backend will be on AWS.
    * Create database user, allow network access either from anywhere or just from the CIDR of network of EC2 instance.
        - get **connection url** that looks like this `mongodb+srv://<username>:<db_password>@cluster0.ycitk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

## On the server(AWS instance):
1. clone [git repo](https://github.com/T-Srikanth/TO-DO-App.git) using git clone command.
2. change directory: `cd TO-DO-App/backend` 
3. edit `~/TO-DO-App/backend/.env` file with mongoDB database **connection url**.
4. change directory: `cd ~/TO-DO-App/frontend`
5. to install dependencies: `npm install` 
6. change directory: `cd ~/TO-DO-App`
7. run: `npm install express mongoose cors dotenv axios`
8. make shell script an executable: `chmod +x start_app.sh` 
9. start the app: `./start_app.sh` 
10. access app using this url `http://<instance_public_ip>:3000`
`start_app.sh` starts both the frontend and backend.

## Run the application on containers:
1. Install docker [Installation Guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
2. Install docker compose [Installation Guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04)
3. Clone [git repo](https://github.com/T-Srikanth/TO-DO-App.git) using git clone command.
4. There will be separate `Dockerfile`s for backend and frontend in their respective directories.
5. There will be a `docker-compose.yml` file that is used to manage multiple containers.
6. Update the ATLAS_URL in the backend `Dockerfile`
7. To start the app run `MONGO_USERNAME=myusername MONGO_PASSWORD=mypassword docker compose up --build` with username and password as arguments
8. Access app using this url `http://<instance_public_ip>:3000`