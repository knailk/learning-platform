FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Install Python using the apk package manager
RUN apk update && apk add python

# Copy the app source code to the container
COPY . .

# Expose the port of your application to bind with the host port
EXPOSE 3001

# Define the command to start your React app
CMD ["npm", "start"]
