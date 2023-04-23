// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
import * as runCareersService from '../services/serviceRunCareer.ts'

async function createNewRunCareer(ctx: Context) {
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

    const newRunCareer = await runCareersService.createNewRunCareer({
      careersId,
      points,
      currentMonth,
      kilometers
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: newRunCareer
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getAllRunsCareers(ctx: Context) {
  try {
    const skip = +ctx.request.url.searchParams.get('page') || 0
    const take = +ctx.request.url.searchParams.get('limit') || 21

    const allRunCareers = await runCareersService.getAllRunsCareers({
      skip,
      take
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: allRunCareers
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getOneRunCareer(ctx: Context) {
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

    const runCareerEmployee = await runCareersService.getOneRunCareer({
      careersId
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: runCareerEmployee
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function deleteOneRunCareer(ctx: Context) {
  try {
    const careersId = await ctx.params.careersId

    if (!careersId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
    }

    await runCareersService.deleteOneRunCareer({ careersId })

    ctx.response.status = 204
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function updateOneRunCareer(ctx: Context) {
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

    const updatedRunCareer = await runCareersService.updateOneRunCareer({
      careersId,
      points,
      currentMonth,
      kilometers
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: updatedRunCareer
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

export {
  createNewRunCareer,
  getAllRunsCareers,
  getOneRunCareer,
  deleteOneRunCareer,
  updateOneRunCareer
}
