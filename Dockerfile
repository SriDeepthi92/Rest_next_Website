# --------- Stage 1: Build ---------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps for node-gyp if needed
RUN apk add --no-cache python3 make g++

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the Next.js app
RUN npm run build


# --------- Stage 2: Runtime ---------
FROM node:20-alpine

WORKDIR /app

# Install only production deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy build output from previous stage
COPY --from=builder /app ./

# Expose the Next.js default port
EXPOSE 3000

# Run Next.js in dev or prod mode (adjust as needed)
CMD ["npm", "run", "dev"]
