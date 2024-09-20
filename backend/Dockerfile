# Use an official node image as a base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 5001
EXPOSE 5001

# Declare build-time arguments for MongoDB username and password
ARG MONGO_USERNAME
ARG MONGO_PASSWORD

# Set environment variables during build time using arguments
ENV ATLAS_URL=mongodb+srv://$MONGO_USERNAME:$MONGO_PASSWORD@cluster0.ycitk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# Start the backend server
CMD ["npm", "start"]