# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar el resto del código después de instalar las dependencias
COPY . .

# Ejecutar las pruebas (esto se podría hacer en el pipeline también)
RUN npm run lint && npm test

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copiar solo lo necesario desde la etapa de construcción
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["node", "src/app.js"]
