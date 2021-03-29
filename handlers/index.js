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
function getSupplies() {
    return Project.findAll({
        attributes: ['supplies']
    });
}



module.exports = { getAllProjects, projectById, createProject, getSupplies }; 