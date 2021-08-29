const fs = require("fs")
const path = require("path")
const templateFolder = "./templates/"
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
let teamMembers = ""


// different roles
const produceRoleManager = manager => {
    let template = fs.readFileSync(path.resolve(templateFolder, "manager.html"), "utf8");
    var managerAdded = ""
    // replace all the matching values with replace /g
    managerAdded = managerAdded + template.replace(/{{ name }}/g, manager.getName())
        .replace(/{{ role }}/g, manager.getRole())
        .replace(/{{ email }}/g, manager.getEmail())
        .replace(/{{ id }}/g, manager.getId())
        .replace(/{{ officeNumber }}/g, manager.getOfficeNumber())
    teamMembers = teamMembers + managerAdded;
    console.log(managerAdded)
};

const produceRoleEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateFolder, "engineer.html"), "utf8");
    var engineerAdded = ""
    engineerAdded = engineerAdded + template.replace(/{{ name }}/g, engineer.getName())
        .replace(/{{ role }}/g, engineer.getRole())
        .replace(/{{ email }}/g, engineer.getEmail())
        .replace(/{{ id }}/g, engineer.getId())
        .replace(/{{ github }}/g, engineer.getGithub())
    teamMembers = teamMembers + engineerAdded;
    console.log(engineerAdded)
};

const produceRoleIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateFolder, "intern.html"), "utf8");
    var internAdded = ""
    internAdded = internAdded + template.replace(/{{ name }}/g, intern.getName())
        .replace(/{{ role }}/g, intern.getRole())
        .replace(/{{ email }}/g, intern.getEmail())
        .replace(/{{ id }}/g, intern.getId())
        .replace(/{{ school }}/g, intern.getSchool())
    teamMembers = teamMembers + internAdded;
    console.log(internAdded)
};



// create new team members by role
function newManager(name, id, email, officeNumber) {
    const manager = new Manager(name, id, email, officeNumber)
    produceRoleManager(manager)
}

function newEngineer(name, id, email, github) {
    const engineer = new Engineer(name, id, email, github)
    produceRoleEngineer(engineer)
}

function newIntern(name, id, email, school) {
    const intern = new Intern(name, id, email, school)
    produceRoleIntern(intern)
}
// adds Html by selected role
function appendtoMainHTML() {
    let mainTemplate = fs.readFileSync(path.resolve(templateFolder, "main.html"), "utf8")
    var mainAdded = ""
    mainAdded = mainAdded + mainTemplate.replace(/{{ team }}/g, teamMembers)
    // appends selection to index.html for output
    let file = path.join(__dirname, 'dist', "/index.html");
    console.log(file);
    fs.writeFile(file, mainAdded, function (err) {
        if (err) {
            throw new Error(err)
        }
        console.log('done')
    })
}

module.exports = {
    newManager: newManager,
    newEngineer: newEngineer,
    newIntern: newIntern,
    appendtoMainHTML: appendtoMainHTML
}