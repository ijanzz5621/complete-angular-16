# Stage 1: Build the Angular App
FROM node:18 as build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN chmod -R 777 /app
RUN useradd -m appuser
USER appuser

RUN npm run build

# Stage 2: Server the app using Node.js
FROM node:18
WORKDIR /app

# Copy the built app from the build stage
COPY --from=build-stage /app/dist/complete-angular-16/browser /app/browser
COPY --from=build-stage /app/dist/complete-angular-16/server /app/server

# Copy package.json and install production dependencies
COPY package.json ./
RUN npm install --production

# Expose the port your app runs on
EXPOSE 4000

# Start the server
CMD ["node", "/app/server/server.mjs"]
