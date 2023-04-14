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

interface EmployeeUpdatePasswordModel {
  id: string
  password: string
  newPassword: string
}

export { EmployeeModel, EmployeeUpdateModel, EmployeeUpdatePasswordModel }
