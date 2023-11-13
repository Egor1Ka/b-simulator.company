FROM node:18.18-alpine
ARG config
ENV config=$config
COPY . /simulator_company_static
WORKDIR /simulator_company_static
RUN yarn install \
    && yarn run build:"$config" \
    && rm -rf .git \
    && rm -rf .gitlab-ci.yml \
    && yarn cache clean
EXPOSE 3000
CMD ["yarn", "run", "start"]
