FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

# Clean out any pre-existing default configurations completely
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

# Copy your production static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Explicitly place your clean configuration file 
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
