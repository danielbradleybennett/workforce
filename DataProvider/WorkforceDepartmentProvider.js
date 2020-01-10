let departments = []

export const useDepartment = () => departments.slice()

export const getDepartment = () => fetch("http://localhost:8088/departments")
    .then(res => res.json())
    .then(parsedDepartment => departments = parsedDepartment)