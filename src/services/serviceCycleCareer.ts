import { prisma } from '../database/config.ts'
import { OneCyclesCareers, CyclesCareersModel } from '../models/cycleCareer.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewCycleCareer(data: CyclesCareersModel) {
  try {
    const currentMonth = new Date(data?.currentMonth)

    const newCycleCareer = await prisma.cycleCareer.create({
      data: {
        careersId: data?.careersId,
        points: data?.points,
        currentMonth: currentMonth.toISOString(),
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
    return cycleCareerEmploye
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
        points: data?.points,
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
