FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
ADD ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /myapp/dist /var/www/app/
EXPOSE 80
