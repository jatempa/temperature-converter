# It uses node:alpine as the base image for the Node.js application
FROM node:alpine

# Creating the working directory named `app`
WORKDIR /app

# Copying all the tools and dependencies in the package.json file to the working directory `app`
COPY package.json .

#Installing all the tools and dependencies in the container
RUN npm install

#Copying all the application source code and files to the working directory `app`
COPY . .

#Exposing the container to run on this port 4000
EXPOSE 4000

#Command to start the Docker container for the backed server application
CMD ["node", "./src/index.js"]