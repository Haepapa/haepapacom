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
FROM node:20-alpine AS runner

WORKDIR /app

# Copy built files and necessary runtime deps from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expose port 3000 to match Traefik config
EXPOSE 3000
ENV ASTRO_TLEMETRY_DISABLED=1
ENV __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS=test.haepapa.com,haepapa.com

# Serve the built site with Astro preview on port 3000
CMD ["npm", "run", "preview", "--port", "3000", "--host", "0.0.0.0"]
