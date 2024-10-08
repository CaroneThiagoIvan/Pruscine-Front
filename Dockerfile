FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --omit=dev

FROM nginx:alpine

COPY --from=build /app/dist/proyecto/browser /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]