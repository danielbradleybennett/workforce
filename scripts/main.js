import EmployeeList from "../WorkforceData/CustomerList.js"
import { getEmployees } from "../DataProvider/WorkforceEmployeesProvider.js"
// import { getComputers } from "../DataProvider/WorkforceComputersProvider.js"
// import {getDepartment} from "../DataProvider/WorkforceDepartmentProvider.js"
// import { getLocations } from "../DataProvider/WorkforceLocation.js"
import { getCustomers } from "../DataProvider/CustomerProvider.js"
import {getEmployeeCustomers} from "../DataProvider/EmployeeCustomerProvider.js"



getCustomers()
.then(getEmployeeCustomers)
.then(getEmployees)
.then(EmployeeList)

// getComputers()
// .then(getDepartment)
// .then(getLocations)

