const mysql = require('mysql');
const inquirer = require('inquirer');
const logo = require("asciiart-logo");

const connection = mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'root',
  password:'root',
  database: 'systemsDB'
});

//display 
init();
 
function init() {
  const logoText = logo({ name: "Employee Managment" }).render();

  console.log(logoText);
}

//Start prompt
const start = () =>{

  inquirer.prompt({
    name : 'options',
    type : 'list',
    message: 'These are your options when accessing your employee management system?',
    choices: [ "Add department", "Add role", "Add employee", "View departments", "View roles", "View employees", "Exit"]
  }).then((choice) => {

    if (choice.options === "Add department"){
      addDepartment();
    }else if (choice.options === "Add role"){
      addRole();
    }else if (choice.options === "Add employee"){
      addEmployee();
    }else if (choice.options === "View departments"){
      viewDepartments();
    }else if (choice.options === "View roles"){
      viewRoles();
    }else if (choice.options === "View employees"){
      viewEmployees();
    }else if(choice.options === "Update Employee Role"){
      updateEmployeeRole();
    }else {
      connection.end()
    }
  });

};

const addDepartment = () =>{
  inquirer.prompt({
    name : "name",
    type : "input",
    message : "Enter department name:"
  }).then((department) =>{
    connection.query(
      'INSERT INTO department SET ?',
      { name: `${department.name}`},
      (err, res) =>{
        if (err) throw err;
        console.log(`${res.affectedRows} department added!\n`);
        start();
      }
    )
  })

};

const addRole = () =>{
  inquirer.prompt([
    {
      name : "title",
      type : "input",
      message : "What is the Role?"
    },
    {
      name : "salary",
      type : "input",
      message : "What is the Salary"
    },
    {
      name : "departmentId",
      type : "input",
      message : "What is the Department id"
    }
  ]).then((role) =>{
    connection.query(
      'INSERT INTO role SET ?',
      {
        title: `${role.title}`,
        salary: `${role.salary}`,
        department_id: `${role.departmentId}`,
      },
      (err, res) =>{
        if (err) throw err;
        console.log(`${res.affectedRows} role added!\n`);
        start();
      }
    )
  })
};

const addEmployee = () =>{
  inquirer.prompt([
    {
      name : "firstName",
      type : "input",
      message : "What is the first name?"
    },
    {
      name : "lastName",
      type : "input",
      message : "What is the last name?"
    },
    {
      name : "roleID",
      type : "input",
      message : "What is the role id?"
    },
    {
      name : "managerID",
      type : "input",
      message : "What is the manager id?"
    }
  ]).then((employee) =>{
    connection.query(
      'INSERT INTO employee SET ?',
      {
        first_name: `${employee.firstName}`,
        last_name: `${employee.lastName}`,
        role_id: `${employee.roleID}`,
        manager_id: `${employee.managerID}`
      },
      (err, res) =>{
        if (err) throw err;
        console.log(`${res.affectedRows} employee added!\n`);
        start();
      }
    )
  })
};

const viewDepartments = () =>{
  connection.query( 'SELECT * FROM department', (err, res) => {
      if (err) throw err;
      console.log("Department id| Department ")
      console.log("____________________________")
      res.forEach(({department_id, name}) =>{
        console.log(`${department_id} | ${name}`);
      });
      start();
  });

};

const viewRoles = () =>{
  connection.query( 'SELECT * FROM role', (err, res) => {
      if (err) throw err;
      console.log("Role id| Title | Salary | Department iD ")
      console.log("_________________________________________")
      res.forEach(({role_id, title, salary, department_id}) =>{
        console.log(`${role_id} | ${title} | ${salary} | ${department_id}`);
      });
      console.log("__________________________________________")
      start();
  });
};

const viewEmployees = () =>{
  connection.query( 'SELECT * FROM employee', (err, res) => {
      if (err) throw err;
      console.log("Employee id| First Name | Last Name | Role id | Manager id ")
      console.log("___________________________________________________________")
      res.forEach(({employee_id, first_name, last_name, role_id, manager_id}) =>{
        console.log(`${employee_id} | ${first_name} | ${last_name} | ${role_id} | ${manager_id}`);
      });
      console.log("_________________________________________________________________________")
      start();
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connection as id ${connection.threadId}\n`);
  start();
});