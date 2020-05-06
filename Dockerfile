FROM node:13-alpine

COPY . .

RUN rm -rf node_modules \
    && npm install

RUN rm -rf dist \
    && npm run build \
    && rm -rf src

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]