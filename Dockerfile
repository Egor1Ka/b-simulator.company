FROM node:18.18-alpine as build
ARG config
ENV config=$config
WORKDIR /app
COPY . .
RUN yarn install \
    && yarn run build:"$config" \
    && rm -rf .git \
    && rm -rf .gitlab-ci.yml \
    && yarn cache clean

FROM node:18.18-alpine
WORKDIR /app
COPY --from=build /app/dist /app
EXPOSE 3000
CMD ["yarn", "run", "start"]

