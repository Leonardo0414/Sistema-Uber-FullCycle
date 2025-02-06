FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Add more verbose error output
RUN npm run build || (echo "Build failed with error code $?" && npm run build --verbose && exit 1)

CMD ["npm", "start"]