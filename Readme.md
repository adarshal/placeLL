# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT                           | Port for running on localhost       | "8000"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies (follwing command will install all dependecies as in package.json file)
```
cd <project_name>
npm install 
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:8000`


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **assets**               | contains asset file for frontend css& js  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **uploads**              | Contains  img files of avatar                              |
| **config**               | Application configuration including environment-specific configs 
| **controllers**          | Controllers define functions to serve various express routes. 
| **routes**               | Contain all express routes, separated by module/area of application                       
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| ** **/index.ss           | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts] 


## functionality
sign,signup for company user, 
create session, logut
add students,
create intervies
add students to interview,
view all students
view all intervies
download data as csv
