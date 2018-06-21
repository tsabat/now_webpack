FROM node:8

# Create app directory
WORKDIR /usr/src/app

ENV wepback_dir=/opt/webpack
COPY webpack "${wepback_dir}"
RUN cd "${wepback_dir}" && yarn install

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY app/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY app .

EXPOSE 8080
CMD [ "npm", "start" ]