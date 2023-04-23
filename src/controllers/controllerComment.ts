// @ts-ignoreCareer
import { Context } from 'https://deno.land/x/oak@v11.1.0/context.ts'
import * as commentsService from '../services/serviceComment.ts'

async function createNewComment(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { postId, content, authorId } = body

    if (!postId || !content || !authorId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const newComment = await commentsService.createNewComment({
      postId,
      content,
      authorId
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: newComment
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function getOneComment(ctx: Context) {
  try {
    const commentId = await ctx.params.commentId

    if (!commentId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
      return
    }

    const commentEmployee = await commentsService.getOneComment({
      commentId
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: commentEmployee
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function deleteOneComment(ctx: Context) {
  try {
    const commentId = await ctx.params.commentId

    if (!commentId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan parametros en la solicitud.'
      }
    }

    await commentsService.deleteOneComment({ commentId })

    ctx.response.status = 204
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

async function updateOneComment(ctx: Context) {
  try {
    const body = await ctx.request.body('json').value
    const { commentId, content } = body

    if (!content || !commentId) {
      ctx.response.status = 500
      ctx.response.body = {
        status: 'FAILED',
        error: 'Faltan elementos en el cuerpo de la solicitud.'
      }
      return
    }

    const updatedComment = await commentsService.updateOneComment({
      commentId,
      content
    })

    ctx.response.status = 200
    ctx.response.body = {
      status: 'OK',
      data: updatedComment
    }
  } catch (error) {
    ctx.response.status = 500
    ctx.response.body = { status: 'FAILED', error: error.message || error }
  }
}

export { createNewComment, getOneComment, deleteOneComment, updateOneComment }
