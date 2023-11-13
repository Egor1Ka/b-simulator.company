FROM node:18.18
ARG config
ENV config=$config
COPY . /simulator_company_static
WORKDIR /simulator_company_static
RUN yarn install && yarn run build:"$config"
RUN rm -rf /simulator_company_static/.git
EXPOSE 3000
CMD ["yarn", "run", "start"]
