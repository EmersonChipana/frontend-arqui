FROM node:16-alpine as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration docker

FROM nginx:1.17.0-alpine
##COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend-arqui /usr/share/nginx/html