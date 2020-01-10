const WorkforceInfo = (customer, employees) => {
  
  return `
     
  <section class="customer">
  <div>
      ${customer.businessName}
  </div>

    <section class="employee">
    
    <div>
    
    <ol>
        ${
            employees.map(e => {
                return `<li>${e.firstName} ${e.lastName}</li>`
            }).join("")
        }
    </ol>



    
  `
  
}

export default WorkforceInfo