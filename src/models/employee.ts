interface EmployeeModel {
  fullName: string
  dni: number
  phone: string
  email: string
  password: string
}

interface EmployeeUpdateModel {
  fullName?: string
  dni?: number
  phone?: string
  email?: string
}

export { EmployeeModel, EmployeeUpdateModel }
