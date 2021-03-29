const express = require('express');

const db = require('../db/index');
const { Project } = db.models;

//gets a list of all projects -> get /projects
function getAllProjects() {
    return Project.findAll();
}

//gets a project by ID -> get /projects/:id
function projectById(id) {
    return Project.findByPk(id);
}

//creates a project -> post /projects
async function createProject(req) {
    const newProject = await Project.create(req);
    return newProject;
}

//gets a list of supplies for all projects
async function getSupplies() {
    const supplyList = await Project.findAll({
        attributes: ['supplies'],
        raw: true  //allows for variation of property name in unit testing
    });
    return supplyList;
}



module.exports = { getAllProjects, projectById, createProject, getSupplies }; 