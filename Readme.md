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

![Screenshot (175)](https://user-images.githubusercontent.com/89533221/213900284-dd80647d-9a3b-4cf9-b25b-591da7fe10e7.png)
<br>
create interview
![image](https://user-images.githubusercontent.com/89533221/213900333-e9f8822f-034f-475a-a7a9-9556d086a71d.png)
<br>
add students
![image](https://user-images.githubusercontent.com/89533221/213900351-fcd347de-78d8-4485-bc90-a810089b45aa.png)

<br>
view all students
![image](https://user-images.githubusercontent.com/89533221/213900363-f641e6fd-d498-48e7-9d9c-b3959b7a5dda.png)

<br>
view interview and add studnts to it link
![image](https://user-images.githubusercontent.com/89533221/213900376-7f3c9a23-0895-4688-83b6-8b6ef977669b.png)

<br>
add student to particular interview
![image](https://user-images.githubusercontent.com/89533221/213900386-748bc250-821d-4e33-83a0-f3c5adcfe97e.png)



