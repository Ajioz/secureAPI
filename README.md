# REST API Tutorial

This is a simple secure API a tutorial from (https://www.toptal.com/nodejs/secure-rest-api-in-nodejs) 

## Before using

- Please make sure that you have:
 - Node.js installed (https://nodejs.org/)
 - MongoDB installed and running locally (https://www.mongodb.com/)
   - Using Windows, just open the terminal at where you installed mongo and run `mongod.exe`
 - Run `npm install` or `yarn` in your root project folder

## Usage

To run the project, please use a command line the following:
 - `npm start`
    - It will run the server at port 3600.


### update

- Refactored mongoose to a proper common service.
- Added a Dockerfile and docker-compose configuration.

If you are familiar to docker and you have docker installed on your machine and just want to run the project without issues please do:

 - docker-compose build
 - docker-compose up
 - It will run the mongodb at port 27017 (for testing purposes only).
 - It will run the server at port 3600.

### Update 2

A version of this project using Typescript. If you might be interested on it, please check the following repository: https://github.com/makinhs/expressjs-api-tutorial

### Update 3

- Updated and pruned dependencies.
- Fixed deprecation warnings.
- Leveraged `findOneAndUpdate` to simplify PATCH code.
- Changed default MongoDB server name to `localhost` to simplify first-time setup.
- Checked that it works with the latest version of Node.js, 14.9.0.


### Update 4

- Accepted changes in the docker file that was causing MongoDB issues on Windows Subsystem Linux (WSL2) - Ubuntu.
- If you are new to this project, I highly recommend starting with Typescript first, like it is discussed here: https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1
