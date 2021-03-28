const express = require('express');

const db = require('../db/index');
const { Project } = db.models;

/*test I'm linking my tests to code correctly*/
function testMocha() {
    return 2;
}

//gets a list of all projects -> get /projects
function getAllProjects() {
    return Project.findAll();
}

//gets a project by ID -> get /projects/:id
function projectById(id) {
    return Project.findByPk(id);
}

//creates a project -> post /projects
function createProject() {

}

//gets a list of supplies for all projects
function getSupplies() {
    return Project.findAll({
        attributes: ['supplies']
    });
}



module.exports = { testMocha, getAllProjects, projectById, createProject, getSupplies }; 