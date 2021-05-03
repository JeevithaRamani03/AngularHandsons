"use strict";
exports.__esModule = true;
var emp = {
    id: 101,
    name: "Jeevitha",
    salary: 2000000,
    permanent: true,
    department: {
        deptId: 202,
        deptName: "Development"
    },
    skills: [{ id: 301, name: "java" }, { id: 302, name: "python" }]
};
console.log("id : " + emp['id']);
console.log("name : " + emp['name']);
console.log("salary : " + emp['salary']);
console.log("permanent : " + emp['permanent']);
console.log("department id : " + emp['department'].deptId);
console.log("department Name : " + emp['department'].deptName);
console.log("skill 1 : " + emp['skills'][0].id + "," + emp['skills'][0].name);
console.log("skill 2 : " + emp['skills'][1].id + "," + emp['skills'][1].name);
//console.log("skill 1 : "+emp['skills'][2].id+","+emp['skills'][2].name);
