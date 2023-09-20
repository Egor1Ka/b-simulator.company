FROM node:18.12.1
COPY . /simulator_company_static
WORKDIR /simulator_company_static
RUN yarn install && yarn run build
EXPOSE 3000
CMD ["yarn", "run", "start"]