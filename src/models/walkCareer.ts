interface WalksCareersModel {
  careersId: string
  currentMonth: string
  kilometers: number
}

interface WalksCareersUpdateModel {
  walkCareerId: string
  currentMonth: string
  kilometers: number
}

interface OneWalkCareers {
  walkCareerId: string
}

export { WalksCareersModel, WalksCareersUpdateModel, OneWalkCareers }
