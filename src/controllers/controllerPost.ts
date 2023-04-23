// @ts-ignore
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
import * as postsService from '../services/servicePost.ts'

async function createNewPost(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { title, content, authorId } = body

    if (!title || !content || !authorId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const newPost = await postsService.createNewPost({
      title,
      content,
      authorId
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: newPost
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getAllPosts(ctx: Context) {
  try {
    const skip = +ctx.request.url.searchParams.get('page') || 0
    const take = +ctx.request.url.searchParams.get('limit') || 21

    const allPosts = await postsService.getAllPosts({
      skip,
      take
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: allPosts
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getOnePost(ctx: Context) {
  try {
    const postId = await ctx.params.postId

    if (!postId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
      return
    }

    const postEmployee = await postsService.getOnePost({
      postId
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: postEmployee
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function deleteOnePost(ctx: Context) {
  try {
    const postId = await ctx.params.postId

    if (!postId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
    }

    await postsService.deleteOnePost({ postId })

    ctx.response.status = 204
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function updateOnePost(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { postId, title, content } = body

    if (!title || !content || !postId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const updatedPost = await postsService.updateOnePost({
      postId,
      title,
      content
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: updatedPost
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

export { createNewPost, getAllPosts, getOnePost, deleteOnePost, updateOnePost }
