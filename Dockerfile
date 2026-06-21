<<<<<<< HEAD
# Multi-stage build for optimized production image
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Clean build: ONLY copy the public folder contents directly to the web server root
COPY public/ /usr/share/nginx/html/

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Tell Cloud Run to use port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
=======
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["sh", "-c", "sed -i 's/__PORT__/'\"$PORT\"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
>>>>>>> 59e71e3 (Add Cloud Run deployment files to project root)
