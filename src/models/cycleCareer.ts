interface CyclesCareersModel {
  careersId: string
  currentMonth: string
  kilometers: number
}

interface CyclesCareersUpdateModel {
  cycleCareerId: string
  currentMonth: string
  kilometers: number
}

interface OneCyclesCareers {
  cycleCareerId: string
}

export { CyclesCareersModel, OneCyclesCareers, CyclesCareersUpdateModel }
