FROM node:18.16
ARG config
ENV config=$config
COPY . /simulator_company_static
WORKDIR /simulator_company_static
RUN yarn install && yarn run build:"$config"
EXPOSE 3000
CMD ["yarn", "run", "start"]