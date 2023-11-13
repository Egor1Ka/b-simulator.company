FROM node:18.18-alpine as build
ARG config
ENV config=$config
WORKDIR /simulator_company_static
COPY . .
RUN yarn install \
    && yarn run build:"$config" \
    && rm -rf .git \
    && rm -rf .gitlab-ci.yml \
    && yarn cache clean

FROM node:18.18-alpine
WORKDIR /simulator_company_static
COPY --from=build /simulator_company_static /simulator_company_static
EXPOSE 3000
CMD ["yarn", "run", "start"]

