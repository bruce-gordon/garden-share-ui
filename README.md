# Garden-Share: FrontEnd

## Overview

This repository represents the frontend portion of a capstone project for the Turing School of Software & Design.

Garden-Share is an application designed to function as an informal marketplace to barter and exchange homegrown produce.

The repository for the backend server can be found [here](https://github.com/garden-share-08/garden-share-be)

## Table of Contents
  - [Design](#design)
  - [Wireframe](#wireframe)
  - [Setup](#setup)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Authors](#authors)

### Design

Garden-Share utilizes a service-oriented architecture to ensure future scalability.

The back-end is written primarily in Ruby on Rails/GrahphQL and deployed via [Heroku](https://garden-share-be.herokuapp.com/)

The front-end is written primarily in JavaScript/Node.js and is deployed via [Heroku](https://garden-share-ui.herokuapp.com/)

The microservice is written primarily in Python/Flask and is deployed via [Heroku](https://gardeen-location-microservice.herokuapp.com/)

To see all available endpoints the `Garden-Share-BE.postman_collection.json` file (located in the root directory) can be imported into Postman.

### Wireframe 

<img width="717" alt="Garden-Share-FE-Wireframe1" src="https://user-images.githubusercontent.com/68203435/110031817-fe00cc00-7cfc-11eb-8e3d-43f82d0ad605.png">
<img width="717" alt="Garden-Share-FE-Wireframe2" src="https://user-images.githubusercontent.com/68203435/110030882-d9582480-7cfb-11eb-856c-6f1dc6e830a3.png">

### Setup
#### Prerequisites
These setup instructions are for Mac OS.

This project requires the use of `React 17.0.1` and `React Redux 7.2.2`.
We also use `PostgreSQL` as our database.

##### Local Repo Setup
1. Fork & Clone Repo
2. Run `npm install`
3. To view the site locally, run `npm start`

### Testing 

This app utilizes [Travis CI](travis-ci.com) for integrated testing.

Run the test suite with `npm test`

#### The Garden Share FE utilizes the following libraries in testing:
 
- [React](https://github.com/testing-library/react-testing-library)
- [Redux](https://testing-library.com/docs/example-react-redux/)

### Deployment

For local deployment run your development server with `npm start` and visit [localhost:3000](http://localhost:3000) to see the app in action.

[Garden Share](https://garden-share-ui.herokuapp.com/) is deployed remotely via Heroku

### My Contributions
  - **Bruce Gordon** - [GitHub Profile](https://github.com/bruce-gordon) - [Turing Alum Portfolio](https://alumni.turing.io/alumni/bruce-gordon) - [LinkedIn](https://www.linkedin.com/in/brucemgordon/)
  - Redux implementation
  - React component design
  - React-cookie implementation
  - Api CRUD functionality
  - Sass design and styling

### Collaborators 
  - **Aaron Townsend** - [GitHub Profile](https://github.com/atownse) - [LinkedIn](https://www.linkedin.com/in/aaron-townsend-667604176/)
  - **Chadrick Dickerson** - [GitHub Profile](https://github.com/chadrick-d-dev) - [Turing Alum Portfolio](https://alumni.turing.io/alumni/chadrick-dickerson) - [LinkedIn](https://www.linkedin.com/in/chadrick-dickerson/)
  - **Christopher Allbritton** - [GitHub Profile](https://github.com/Callbritton) - [Turing Alum Portfolio](https://alumni.turing.io/alumni/christopher-allbritton) - [LinkedIn](https://www.linkedin.com/in/christopher-allbritton)
  - **Dani Coleman** - [GitHub Profile](https://github.com/dcoleman21) - [Turing Alum Portfolio](https://alumni.turing.io/alumni/dani-coleman) - [LinkedIn](https://www.linkedin.com/in/dcoleman-21/)
  - **Joshua Carey** - [GitHub Profile](https://github.com/jdcarey128) - [Turing Alum Portfolio](https://alumni.turing.io/alumni/joshua-carey) - [LinkedIn](https://www.linkedin.com/in/carey-joshua/)
