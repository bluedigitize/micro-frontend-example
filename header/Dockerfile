FROM node:10.15.0-alpine as development
RUN mkdir -p /var/app
COPY package*.json /var/app/
WORKDIR /var/app
RUN npm install --silent
ENV PATH /var/app/node_modules/.bin:$PATH
COPY . .
CMD ["npm", "run", "serve"]

FROM development as build
RUN npm run build

FROM nginx:1.16.0-alpine as production
RUN rm -v /etc/nginx/conf.d/default.conf
ADD files/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/
COPY --from=build /var/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
