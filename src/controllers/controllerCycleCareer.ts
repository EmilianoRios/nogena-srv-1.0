// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
import * as cycleCareersService from '../services/serviceCareer.ts'

async function createNewCycleCareer(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: ''
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getAllCyclesCareers(ctx: Context) {
  try {
    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: ''
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getOneCycleCareer(ctx: Context) {
  try {
    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: ''
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function deleteOneCycleCareer(ctx: Context) {
  try {
    ctx.response.status = 204
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function updateOneCycleCareer(ctx: Context) {
  try {
    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: ''
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
