FROM node:18.16
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
COPY . /simulator_company_static
WORKDIR /simulator_company_static
RUN yarn install && yarn run build
EXPOSE 3000
CMD ["yarn", "run", "start"]