# Use an official Node.js image as the base image
FROM node:18

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Next.js app will run on
EXPOSE 3000


# Define the command to start your app
CMD ["npm", "run", "dev"]