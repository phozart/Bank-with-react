#  Bank with react 3 tier application

## Description
 Description: This project is build as exercise for the MIT xpro full stack developer program. The project is representing a basing banking app including security, database and server.

## How to run
 To run the project, fork the project and clone to local repository.
 Prior to running the project, the following should be adapted:
 2.    Link to mongoDB in ./dal.js
 3.    Firebase config in ./public/firebase/config.js 

To run the project locally, after the previous steps in a terminal go to your root folder of the project and execute 'node index.js'

## Demo
The project opens by default on the landing page:
<img width="545" alt="Screenshot 2022-03-16 at 07 28 28" src="https://user-images.githubusercontent.com/87307429/158530909-1629c652-a6a7-4978-bd2a-d643145ae9c2.png">
The navbar has different options, at the moment only All data and create account is functional:
<img width="585" alt="Screenshot 2022-03-16 at 07 29 06" src="https://user-images.githubusercontent.com/87307429/158531015-691007c0-e48c-40ba-bcda-95e1539f60e0.png">
<img width="578" alt="Screenshot 2022-03-16 at 07 29 12" src="https://user-images.githubusercontent.com/87307429/158531041-11fb227b-0f39-4346-990a-6bb1977895cc.png">

Other options will provide a fail:
<img width="601" alt="Screenshot 2022-03-16 at 07 29 29" src="https://user-images.githubusercontent.com/87307429/158531117-154a6cb2-0ab5-469c-850b-b7912583fad4.png">

The All data option will display all data from customers in the database:
<img width="1061" alt="Screenshot 2022-03-16 at 07 30 01" src="https://user-images.githubusercontent.com/87307429/158531149-a9f16f62-265a-461e-8d8a-6a6fe9624501.png">


## Technology used
The project is using React with React router for front end rendering, Express as server, Mongodb as database and firebase as authentication server (not operational yet). Authorisation still needs to be added 

## Features
Only Create account and all data tabs are currently functionning, the other components (withdraw, login, deposit and balance) are still work in progress

## License
 License: MIT
