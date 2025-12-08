# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# clean install to ensure no stale dependencies
RUN rm -rf node_modules package-lock.json && npm install

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
