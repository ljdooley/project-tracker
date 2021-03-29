# Project Tracker
Project tracker is a REST API that alows a user to create and track projects, including a list of supplies needed.  

## Features
* Local data connection: Sequelize
* Three Routes: 
    * /projects
        * Read all projects
        * Create a project
    * /projects/:id
        * Read a specific project
    * /supplies
        * Read a list of supplies for all projects


# How to Run Project Tracker & Unit tests
To run the API, or run the unit tests: 

1. Clone repo
2. Run npm install
3. Follow directions for running API, or unit tests.

To run the program:
1. Run node proejctapp.js
2. Make Make requests to http://localhost:3000

To run the unit tests:
1. Run npm test

Note: Postman is useful for interacting w/the API, posts to the projects route should be made with JSON. https://www.postman.com/