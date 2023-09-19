FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Set the maximum heap memory size for Node.js
ENV NODE_OPTIONS="--max-old-space-size=900"

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy the app source code to the container
COPY . .

# Expose the port of your application to bind with the host port
EXPOSE 3000

# Build the React app for production
RUN npm run build

# Define the command to start your React app
CMD ["npm", "--max-old-space-size=900" ,"start"]
