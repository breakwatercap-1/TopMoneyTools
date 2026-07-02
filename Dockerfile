# Stage 1: Build the Vite application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve assets with Diagnostic Reporting
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

EXPOSE 8080

# DIAGNOSTIC BOOT SEQUENCE
CMD echo "=== 🩺 STARTING CONTAINER DIAGNOSTICS ===" && \
    echo "1. Working Directory: $(pwd)" && \
    echo "2. Listing contents of the deployment folder:" && \
    ls -la ./dist && \
    echo "3. Verifying index.html presence:" && \
    (test -f ./dist/index.html && echo "✅ SUCCESS: index.html exists") || echo "❌ ERROR: index.html is MISSING" && \
    echo "=== 🚀 END DIAGNOSTICS - LAUNCHING SERVER ===" && \
    serve -s dist -l 8080
