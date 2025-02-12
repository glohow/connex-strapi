FROM node:20-alpine3.20
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

# Set environment variables
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /opt/

# Copy dependencies and install
COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn install

# Copy application files
WORKDIR /opt/app
COPY . .

# Set PATH for global modules
ENV PATH /opt/node_modules/.bin:$PATH

# Grant full permissions to `node` user on `/opt/app`
RUN chown -R node:node /opt/app && chmod -R 777 /opt/app

# Switch to non-root user `node`
USER node

# Run build process
RUN yarn build

# Expose necessary ports
EXPOSE 1337
EXPOSE 5173

# Start Strapi in development mode
CMD ["yarn", "develop"]