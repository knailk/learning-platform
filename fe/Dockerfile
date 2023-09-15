FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app source code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Define the command to start your React app
CMD ["npm", "start"]
