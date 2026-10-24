# Build the optimized Create React App application.
FROM node:22-alpine AS build
WORKDIR /Kaur_Parneet_ui_garden
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Only the production site and web server are shipped.
FROM nginx:1.27-alpine
WORKDIR /Kaur_Parneet_ui_garden
COPY --from=build /Kaur_Parneet_ui_garden/build ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
