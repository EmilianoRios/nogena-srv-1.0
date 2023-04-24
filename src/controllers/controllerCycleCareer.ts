// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
import * as cycleCareersService from '../services/serviceCycleCareer.ts'

async function createNewCycleCareer(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { careersId, currentMonth, kilometers } = body

    if (!careersId || !currentMonth || !kilometers) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const newCycleCareer = await cycleCareersService.createNewCycleCareer({
      careersId,
      currentMonth,
      kilometers
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: newCycleCareer
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getAllCyclesCareers(ctx: Context) {
  try {
    const skip = +ctx.request.url.searchParams.get('page') || 0
    const take = +ctx.request.url.searchParams.get('limit') || 21

    const allCycleCareers = await cycleCareersService.getAllCyclesCareers({
      skip,
      take
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: allCycleCareers
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getOneCycleCareer(ctx: Context) {
  try {
    const cycleCareerId = await ctx.params.cycleCareerId

    if (!cycleCareerId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
      return
    }

    const cycleCareerEmployee = await cycleCareersService.getOneCycleCareer({
      cycleCareerId
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: cycleCareerEmployee
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function deleteOneCycleCareer(ctx: Context) {
  try {
    const cycleCareerId = await ctx.params.cycleCareerId

    if (!cycleCareerId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
    }

    await cycleCareersService.deleteOneCycleCareer({ cycleCareerId })

    ctx.response.status = 204
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function updateOneCycleCareer(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { cycleCareerId, currentMonth, kilometers } = body

    if (!cycleCareerId || !currentMonth || !kilometers) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const updatedCycleCareer = await cycleCareersService.updateOneCycleCareer({
      cycleCareerId,
      currentMonth,
      kilometers
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: updatedCycleCareer
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

export {
  createNewCycleCareer,
  getAllCyclesCareers,
  getOneCycleCareer,
  deleteOneCycleCareer,
  updateOneCycleCareer
}
