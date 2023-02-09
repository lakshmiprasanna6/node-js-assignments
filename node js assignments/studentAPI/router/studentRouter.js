let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController")

// http://localhost:3000/api/student/getStudent 

router.get("/getStudent",studentController.getAllStudents);

//http://localhost:3000/api/student/getStudent/21 
router.get("/getStudent/:age",studentController.getAllStudents);

//http://localhost:3000/api/student/getStudent/salary 
router.get("/getStudent/salary",studentController.getAllStudents);

// http://localhost:3000/api/student/findStudentById/1
// http://localhost:3000/api/student/findStudentById/7

router.get("/findStudentById/:_id",studentController.findStudentById);

// http://localhost:3000/api/student/storeStudent 
router.post("/storeStudent",studentController.storeStudent);


// http://localhost:3000/api/employees/deleteEmployeeById/1 
router.delete("/deleteEmployeeById/:_id",employeeController.deleteEmployee);


// http://localhost:3000/api/employees/updateEmployeeSalary
router.patch("/updateEmployeeSalary",employeeController.updateEmployee);

module.exports=router;