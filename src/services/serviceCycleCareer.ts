import { prisma } from '../database/config.ts'
import { OneCyclesCareers, CyclesCareersModel } from '../models/cycleCareer.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewCycleCareer(data: CyclesCareersModel) {
  try {
    const currentMonth = new Date(data?.currentMonth)

    const newCycleCareer = await prisma.cycleCareer.create({
      data: {
        careersId: data?.careersId,
        points: Math.round(+data?.kilometers * 1.33589),
        currentMonth: currentMonth,
        kilometers: data?.kilometers
      }
    })
    return newCycleCareer
  } catch (error) {
    throw new Error(error)
  }
}
async function getAllCyclesCareers(pagination: PaginationModel) {
  try {
    const allCycleCareers = await prisma.cycleCareer.findMany({
      take: +pagination.take,
      skip: +pagination.take * +pagination.skip,
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      },
      orderBy: {
        points: true
      }
    })
    return allCycleCareers
  } catch (error) {
    throw new Error(error)
  }
}
async function getOneCycleCareer(data: OneCyclesCareers) {
  try {
    const cycleCareerEmploye = await prisma.cycleCareer.findUnique({
      where: {
        careersId: data?.careersId
      },
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      }
    })

    const rank = await prisma.cycleCareer.count({
      where: {
        points: {
          gt: cycleCareerEmploye.points
        }
      }
    })

    const equalRanks = await prisma.cycleCareer.count({
      where: {
        points: cycleCareerEmploye.points,
        id: {
          lt: cycleCareerEmploye.id
        }
      }
    })

    return { cycleCareerEmploye, rank: +rank + +equalRanks + 1 }
  } catch (error) {
    throw new Error(error)
  }
}
async function deleteOneCycleCareer(data: OneCyclesCareers) {
  try {
    const cycleCareerEmploye = await prisma.cycleCareer.findUnique({
      where: {
        careersId: data?.careersId
      }
    })

    if (!cycleCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    await prisma.cyclecareer.delete({
      where: {
        careersId: data?.careersId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}
async function updateOneCycleCareer(data: CyclesCareersModel) {
  try {
    const cycleCareerEmploye = await prisma.findUnique({
      where: {
        careersId: data?.careersId
      }
    })

    if (!cycleCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    const updateCycleCareer = await prisma.cycleCareer.update({
      where: {
        careersId: data?.careersId
      },
      data: {
        points: Math.round(+data?.kilometers * 1.33589),
        currentMonth: data?.currentMonth,
        kilometers: data?.kilometers
      }
    })

    return updateCycleCareer
  } catch (error) {
    throw new Error(error)
  }
}

export {
  createNewCycleCareer,
  getAllCyclesCareers,
  getOneCycleCareer,
  deleteOneCycleCareer,
  updateOneCycleCareer
}
