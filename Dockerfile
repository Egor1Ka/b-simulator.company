FROM node:18
RUN yarn install 
RUN yarn run build
EXPOSE 3000
CMD ["yarn", "run", "start"]