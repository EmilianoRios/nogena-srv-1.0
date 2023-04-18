interface OneCareerModel {
  employeeId: string
}

interface CareerUpdateModel {
  employeeId: string
  cycleCareerId?: string
  walkCareerId?: string
  runCareerId?: string
}

export { OneCareerModel, CareerUpdateModel }
