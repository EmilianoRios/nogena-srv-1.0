import { prisma } from '../database/config.ts'
import { OneCareerModel, CareerUpdateModel } from '../models/career.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewCareer(data: OneCareerModel) {
  try {
    const careerEmployee = await prisma.careers.findUnique({
      where: {
        employeeId: data?.employeeId
      }
    })

    if (careerEmployee) {
      throw new Error('El ya tiene una carrera.')
    }

    const newCareer = await prisma.careers.create({
      data: {
        employeeId: data?.employeeId
      }
    })

    return newCareer
  } catch (error) {
    throw new Error(error)
  }
}
async function getAllCareers(pagination: PaginationModel) {
  try {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

    const allCareers = await prisma.careers.findMany({
      take: +pagination?.take,
      skip: +pagination?.take * +pagination?.skip,
      select: {
        employee: {
          select: {
            id: true,
            fullName: true,
            dni: true,
            phone: true,
            username: true
          }
        },
        cycleCareer: {
          select: {
            id: true,
            points: true,
            currentMonth: true,
            kilometers: true,
            createAt: true,
            updateAt: true
          }
        },
        runCareer: {
          select: {
            id: true,
            points: true,
            currentMonth: true,
            kilometers: true,
            createAt: true,
            updateAt: true
          }
        },
        walkCareer: {
          select: {
            id: true,
            points: true,
            currentMonth: true,
            kilometers: true,
            createAt: true,
            updateAt: true
          }
        }
      }
    })

    let rankNumber: number
    let index: number = 0
    let lenAllCareers = allCareers.length

    for (let i = 0; i < lenAllCareers; i++) {
      let lenCycle = allCareers[i].cycleCareer.length
      for (let a = 0; a < lenCycle; a++) {
        const cycleCareerEmployee = await prisma.cycleCareer.findUnique({
          where: {
            id: allCareers[i].cycleCareer[a]?.id
          },
          select: {
            points: true,
            currentMonth: true,
            kilometers: true
          }
        })

        const rank = await prisma.cycleCareer.count({
          where: {
            currentMonth: allCareers[i]?.cycleCareer[a].currentMonth,
            points: {
              gt: cycleCareerEmployee.points
            }
          }
        })

        const equalRanks = await prisma.cycleCareer.count({
          where: {
            currentMonth: allCareers[i]?.cycleCareer[a].currentMonth,
            points: cycleCareerEmployee.points,
            id: {
              lt: cycleCareerEmployee.id
            }
          }
        })

        rankNumber = rank + equalRanks

        allCareers[i].cycleCareer[a].rank = rankNumber

        index++
      }
    }

    for (let i = 0; i < lenAllCareers; i++) {
      let lenWalk = allCareers[i].walkCareer.length
      for (let a = 0; a < lenWalk; a++) {
        const walkCareerEmployee = await prisma.walkCareer.findUnique({
          where: {
            id: allCareers[i].walkCareer[a]?.id
          },
          select: {
            points: true,
            currentMonth: true,
            kilometers: true
          }
        })

        const rank = await prisma.walkCareer.count({
          where: {
            currentMonth: allCareers[i]?.walkCareer[a].currentMonth,
            points: {
              gt: walkCareerEmployee.points
            }
          }
        })

        const equalRanks = await prisma.walkCareer.count({
          where: {
            currentMonth: allCareers[i]?.walkCareer[a].currentMonth,
            points: walkCareerEmployee.points,
            id: {
              lt: walkCareerEmployee.id
            }
          }
        })

        rankNumber = rank + equalRanks

        allCareers[i].cycleCareer[a].rank = rankNumber

        index++
      }
    }

    for (let i = 0; i < lenAllCareers; i++) {
      let lenRun = allCareers[i].runCareer.length
      for (let a = 0; a < lenRun; a++) {
        const runCareerEmployee = await prisma.runCareer.findUnique({
          where: {
            id: allCareers[i].runCareer[a]?.id
          },
          select: {
            points: true,
            currentMonth: true,
            kilometers: true
          }
        })

        const rank = await prisma.runCareer.count({
          where: {
            currentMonth: allCareers[i]?.runCareer[a].currentMonth,
            points: {
              gt: runCareerEmployee.points
            }
          }
        })

        const equalRanks = await prisma.runCareer.count({
          where: {
            currentMonth: allCareers[i]?.runCareer[a].currentMonth,
            points: runCareerEmployee.points,
            id: {
              lt: runCareerEmployee.id
            }
          }
        })

        rankNumber = rank + equalRanks

        allCareers[i].runCareer[a].rank = rankNumber

        index++
      }
    }

    return allCareers
  } catch (error) {
    throw new Error(error)
  }
}
async function getOneCareer(data: OneCareerModel) {
  try {
    const careerEmployee = await prisma.careers.findMany({
      where: {
        employeeId: data?.employeeId
      },
      include: {
        cycleCareer: {
          select: {
            id: true,
            points: true,
            currentMonth: true,
            kilometers: true,
            createAt: true,
            updateAt: true
          },
          orderBy: {
            currentMonth: 'desc'
          }
        },
        runCareer: {
          select: {
            id: true,
            points: true,
            currentMonth: true,
            kilometers: true,
            createAt: true,
            updateAt: true
          },
          orderBy: {
            currentMonth: 'desc'
          }
        },
        walkCareer: {
          select: {
            id: true,
            points: true,
            currentMonth: true,
            kilometers: true,
            createAt: true,
            updateAt: true
          },
          orderBy: {
            currentMonth: 'desc'
          }
        }
      }
    })

    let rankNumber: number
    let index: number = 0
    let lenCareerEmployee = careerEmployee.length

    for (let i = 0; i < lenCareerEmployee; i++) {
      let lenCycle = careerEmployee[i].cycleCareer.length
      for (let a = 0; a < lenCycle; a++) {
        const cycleCareerEmployee = await prisma.cycleCareer.findUnique({
          where: {
            id: careerEmployee[i].cycleCareer[a]?.id
          },
          select: {
            points: true,
            currentMonth: true,
            kilometers: true
          }
        })

        const rank = await prisma.cycleCareer.count({
          where: {
            currentMonth: careerEmployee[i]?.cycleCareer[a].currentMonth,
            points: {
              gt: cycleCareerEmployee.points
            }
          }
        })

        const equalRanks = await prisma.cycleCareer.count({
          where: {
            currentMonth: careerEmployee[i]?.cycleCareer[a].currentMonth,
            points: cycleCareerEmployee.points,
            id: {
              lt: cycleCareerEmployee.id
            }
          }
        })

        rankNumber = rank + equalRanks

        careerEmployee[i].cycleCareer[a].rank = rankNumber

        index++
      }
    }

    for (let i = 0; i < lenCareerEmployee; i++) {
      let lenWalk = careerEmployee[i].walkCareer.length
      for (let a = 0; a < lenWalk; a++) {
        const walkCareerEmployee = await prisma.walkCareer.findUnique({
          where: {
            id: careerEmployee[i].walkCareer[a]?.id
          },
          select: {
            points: true,
            currentMonth: true,
            kilometers: true
          }
        })

        const rank = await prisma.walkCareer.count({
          where: {
            currentMonth: careerEmployee[i]?.walkCareer[a].currentMonth,
            points: {
              gt: walkCareerEmployee.points
            }
          }
        })

        const equalRanks = await prisma.walkCareer.count({
          where: {
            currentMonth: careerEmployee[i]?.walkCareer[a].currentMonth,
            points: walkCareerEmployee.points,
            id: {
              lt: walkCareerEmployee.id
            }
          }
        })

        rankNumber = rank + equalRanks

        careerEmployee[i].cycleCareer[a].rank = rankNumber

        index++
      }
    }

    for (let i = 0; i < lenCareerEmployee; i++) {
      let lenRun = careerEmployee[i].runCareer.length
      for (let a = 0; a < lenRun; a++) {
        const runCareerEmployee = await prisma.runCareer.findUnique({
          where: {
            id: careerEmployee[i].runCareer[a]?.id
          },
          select: {
            points: true,
            currentMonth: true,
            kilometers: true
          }
        })

        const rank = await prisma.runCareer.count({
          where: {
            currentMonth: careerEmployee[i]?.runCareer[a].currentMonth,
            points: {
              gt: runCareerEmployee.points
            }
          }
        })

        const equalRanks = await prisma.runCareer.count({
          where: {
            currentMonth: careerEmployee[i]?.runCareer[a].currentMonth,
            points: runCareerEmployee.points,
            id: {
              lt: runCareerEmployee.id
            }
          }
        })

        rankNumber = rank + equalRanks

        careerEmployee[i].runCareer[a].rank = rankNumber

        index++
      }
    }

    return careerEmployee
  } catch (error) {
    throw new Error(error)
  }
}
async function deleteOneCareer(data: OneCareerModel) {
  try {
    const careerEmployee = await prisma.careers.findUnique({
      where: {
        employeeId: data?.employeeId
      }
    })

    if (!careerEmployee) {
      throw new Error('Usuario no encontrado.')
    }

    await prisma.career.delete({
      where: {
        employeeId: data?.employeeId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}
async function updateOneCareer(data: CareerUpdateModel) {
  try {
    const careerEmployee = await prisma.careers.findUnique({
      where: {
        employeeId: data?.employeeId
      }
    })

    if (!careerEmployee) {
      throw new Error('Usuario no encontrado.')
    }

    const updateCareerEmployee = await prisma.careers.update({
      where: {
        employeeId: data?.employeeId
      },
      data: {
        cycleCareerId: data?.cycleCareerId,
        walkCareerId: data?.walkCareerId,
        runCareerId: data?.runCareerId
      }
    })
    return updateCareerEmployee
  } catch (error) {
    throw new Error(error)
  }
}

export {
  createNewCareer,
  getAllCareers,
  getOneCareer,
  deleteOneCareer,
  updateOneCareer
}
