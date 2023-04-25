interface RunsCareersModel {
  careersId: string
  currentMonth: string
  kilometers: number
}

interface RunsCareersUpdateModel {
  runCareerId: string
  currentMonth: string
  kilometers: number
}

interface OneRunCareers {
  runCareerId: string
}

export { RunsCareersModel, RunsCareersUpdateModel, OneRunCareers }
