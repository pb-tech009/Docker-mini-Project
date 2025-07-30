# this is  abase ing 
FROM node:20-alpine3.18

# this is the working directoru
WORKDIR /nodeapp

# this is for the copy
COPY  package.json .
COPY  package-lock.json .

# this is for donwload the dependency
RUN npm install

# also this copy for the code copy
COPY  . .

# this is fot the how much port you want to gave the app or web so we can use this 
# EXPOSE 3001-3009

# this is for the run the app
CMD [ "npm","start" ]