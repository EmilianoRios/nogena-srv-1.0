import { prisma } from '../database/config.ts'
import {
  OneWalkCareers,
  WalksCareersModel,
  WalksCareersUpdateModel
} from '../models/walkCareer.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewWalkCareer(data: WalksCareersModel) {
  try {
    const currentMonth = new Date(data?.currentMonth)

    const newWalkCareer = await prisma.walkCareer.create({
      data: {
        careersId: data?.careersId,
        points: Math.round(+data?.kilometers * 1.33589),
        currentMonth: currentMonth,
        kilometers: data?.kilometers
      }
    })
    return newWalkCareer
  } catch (error) {
    throw new Error(error)
  }
}
async function getAllWalksCareers(pagination: PaginationModel) {
  try {
    const allWalkCareers = await prisma.walkCareer.findMany({
      take: +pagination.take,
      skip: +pagination.take * +pagination.skip,
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      },
      orderBy: {
        points: 'desc'
      }
    })
    return allWalkCareers
  } catch (error) {
    throw new Error(error)
  }
}
async function getOneWalkCareer(data: OneWalkCareers) {
  try {
    const walkCareerEmploye = await prisma.walkCareer.findUnique({
      where: {
        id: data?.walkCareerId
      },
      select: {
        points: true,
        currentMonth: true,
        kilometers: true
      }
    })

    const rank = await prisma.walkCareer.count({
      where: {
        points: {
          gt: walkCareerEmploye.points
        }
      }
    })

    const equalRanks = await prisma.walkCareer.count({
      where: {
        points: walkCareerEmploye.points,
        id: {
          lt: walkCareerEmploye.id
        }
      }
    })

    return { ...walkCareerEmploye, rank: +rank + +equalRanks }
  } catch (error) {
    throw new Error(error)
  }
}
async function deleteOneWalkCareer(data: OneWalkCareers) {
  try {
    const walkCareerEmploye = await prisma.walkCareer.findUnique({
      where: {
        id: data?.walkCareerId
      }
    })

    if (!walkCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    await prisma.walkcareer.delete({
      where: {
        id: data?.walkCareerId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}
async function updateOneWalkCareer(data: WalksCareersUpdateModel) {
  try {
    const walkCareerEmploye = await prisma.findUnique({
      where: {
        id: data?.walkCareerId
      }
    })

    if (!walkCareerEmploye) {
      throw new Error('La careera del usuario no fue encontrada.')
    }

    const updateWalkCareer = await prisma.walkCareer.update({
      where: {
        careersId: data?.walkCareerId
      },
      data: {
        points: Math.round(+data?.kilometers * 1.33589),
        currentMonth: data?.currentMonth,
        kilometers: data?.kilometers
      }
    })

    return updateWalkCareer
  } catch (error) {
    throw new Error(error)
  }
}

export {
  createNewWalkCareer,
  getAllWalksCareers,
  getOneWalkCareer,
  deleteOneWalkCareer,
  updateOneWalkCareer
}
