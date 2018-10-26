#Nodejs image
FROM node:8.12.0

#override the base log
ENV NPM_CONFIG_LOGLEVEL warn

#create app directory
WORKDIR /usr/src/ReactApp

#install all dependencies
COPY package.json package-lock.json 

#copy all local files into the image
#COPY . /reactApp
COPY . . 

RUN npm install

#make port available to outside
EXPOSE 3001

CMD ["npm", "start"]
