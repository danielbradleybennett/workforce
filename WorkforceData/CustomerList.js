// import { useComputers } from "../DataProvider/WorkforceComputersProvider.js"
import { useEmployees } from "../DataProvider/WorkforceEmployeesProvider.js"
// import { useDepartment} from "../DataProvider/WorkforceDepartmentProvider.js"
// import {useLocations} from "../DataProvider/WorkforceLocation.js"
import WorkforceInfo from "../WorkforceData/Customer.js"
import {useEmployeeCustomers} from "../DataProvider/EmployeeCustomerProvider.js"
import {useCustomers} from "../DataProvider/CustomerProvider.js"




const contentTarget = document.querySelector(".employeeList")

export const EmployeeList = () => {
    // const computerInfo = useComputers()
    const employeesInfo = useEmployees()
    // const departmentInfo = useDepartment()
    // const locationInfo = useLocations()
    const customersInfo = useCustomers()
    const empCust = useEmployeeCustomers()



    const render = () => {
        contentTarget.innerHTML = customersInfo.map(customer => {
            // // Find the employee's computer
            // const computer = computerInfo.find(computer => computer.id === employee.computerId)
            // // find the employee's department
            // const department = departmentInfo.find(department => department.id === employee.departmentId)
            // // find the employee's city
            // const location = locationInfo.find(location => location.id === employee.locationId)
            //  // Find all customer relationships for the current 
        
            const customerRelationships = empCust.filter(ec => ec.customerId === customer.id)
            // For each relationship, find the corresponding company
            const foundEmployeeArray = customerRelationships.map(rc => {
                const foundEmployee = employeesInfo.find(employee => employee.id === rc.employeeId)
                return foundEmployee})

            // Get HTML representation of employee
            const html = WorkforceInfo(customer, foundEmployeeArray)

            return html
        }).join("")
    }

    render()


}

export default EmployeeList