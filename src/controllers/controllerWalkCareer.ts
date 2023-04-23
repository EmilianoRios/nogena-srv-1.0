// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
import * as walkCareersService from '../services/serviceWalkCareer.ts'

async function createNewWalkCareer(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { careersId, points, currentMonth, kilometers } = body

    if (!careersId || !points || !currentMonth || !kilometers) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const newWalkCareer = await walkCareersService.createNewWalkCareer({
      careersId,
      points,
      currentMonth,
      kilometers
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: newWalkCareer
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getAllWalksCareers(ctx: Context) {
  try {
    const skip = +ctx.request.url.searchParams.get('page') || 0
    const take = +ctx.request.url.searchParams.get('limit') || 21

    const allWalkCareers = await walkCareersService.getAllWalksCareers({
      skip,
      take
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: allWalkCareers
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getOneWalkCareer(ctx: Context) {
  try {
    const careersId = await ctx.params.careersId

    if (!careersId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
      return
    }

    const walkCareerEmployee = await walkCareersService.getOneWalkCareer({
      careersId
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: walkCareerEmployee
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function deleteOneWalkCareer(ctx: Context) {
  try {
    const careersId = await ctx.params.careersId

    if (!careersId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
    }

    await walkCareersService.deleteOneWalkCareer({ careersId })

    ctx.response.status = 204
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function updateOneWalkCareer(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { careersId, points, currentMonth, kilometers } = body

    if (!careersId || !points || !currentMonth || !kilometers) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const updatedWalkCareer = await walkCareersService.updateOneWalkCareer({
      careersId,
      points,
      currentMonth,
      kilometers
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: updatedWalkCareer
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

export {
  createNewWalkCareer,
  getAllWalksCareers,
  getOneWalkCareer,
  deleteOneWalkCareer,
  updateOneWalkCareer
}
