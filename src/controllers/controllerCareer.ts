// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
import * as careersService from '../services/serviceCareer.ts'

async function createNewCareer(ctx: Context) {
  try {
    const employeeId = ctx.params.employeeId

    const createdCareer = await careersService.createNewCareer({ employeeId })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: createdCareer
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getAllCareers(ctx: Context) {
  try {
    const skip = +ctx.request.url.searchParams.get('page') || 0
    const take = +ctx.request.url.searchParams.get('limit') || 21

    const allCareers = await careersService.getAllCareers({ skip, take })

    const lenAllCareers = allCareers.length
    let dataAllCareers = []

    for (let i = 0; i < lenAllCareers; i++) {
      let dataEmployee = {
        employee: allCareers[i]?.employee,
        careers: [
          { cycle: allCareers[i]?.cycleCareer },
          { run: allCareers[i]?.runCareer },
          { walk: allCareers[i]?.walkCareer }
        ]
      }
      dataAllCareers.push(dataEmployee)
    }

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: dataAllCareers
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getOneCareer(ctx: Context) {
  try {
    const employeeId = await ctx.params.employeeId

    if (!employeeId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
      return
    }

    const careerEmployee = await careersService.getOneCareer({ employeeId })

    const dataCareerEmployee = careerEmployee[0]

    let dataEmployee = {
      employee: dataCareerEmployee?.employee,
      careers: [
        { cycle: dataCareerEmployee?.cycleCareer },
        { run: dataCareerEmployee?.runCareer },
        { walk: dataCareerEmployee?.walkCareer }
      ]
    }

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: dataEmployee
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function deleteOneCareer(ctx: Context) {
  try {
    const employeeId = await ctx.params.employeeId

    if (!employeeId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
    }

    await careersService.deleteOneCareer({ employeeId })

    ctx.response.status = 204
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function updateOneCareer(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { employeeId, cycleCareerId, walkCareerId, runCareerId } = body

    if (!employeeId || !cycleCareerId || !walkCareerId || !runCareerId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const updatedCareer = await careersService.updateOneCareer({
      employeeId,
      cycleCareerId,
      walkCareerId,
      runCareerId
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: updatedCareer
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

export {
  createNewCareer,
  getAllCareers,
  getOneCareer,
  deleteOneCareer,
  updateOneCareer
}
