interface CareerModel {
  employeeId: string
}

interface CareerUpdateModel {
  employeeId: string
  cycleCareerId?: string
  walkCareerId?: string
  runCareerId?: string
}

export { CareerModel, CareerUpdateModel }
