import { prisma } from '../database/config.ts'
import {
  CommentsModel,
  OneCommentModel,
  CommentUpdateModel
} from '../models/comment.ts'

async function createNewComment(data: CommentsModel) {
  try {
    const newComment = await prisma.comment.create({
      data: {
        postId: data?.postId,
        content: data?.content,
        authorId: data?.authorId
      }
    })
    return newComment
  } catch (error) {
    throw new Error(error)
  }
}

async function getOneComment(data: OneCommentModel) {
  try {
    const commentEmployee = await prisma.comment.findUnique({
      where: {
        id: data?.commentId
      },
      select: {
        title: true,
        content: true,
        employee: {
          select: {
            fullName: true,
            dni: true,
            phone: true,
            username: true
          }
        }
      }
    })
    return commentEmployee
  } catch (error) {
    throw new Error(error)
  }
}

async function deleteOneComment(data: OneCommentModel) {
  try {
    const commentEmployee = await prisma.comment.findUnique({
      where: {
        id: data?.commentId
      }
    })

    if (!commentEmployee) {
      throw new Error('El comentario del usuario no fue encontrado.')
    }

    await prisma.comment.delete({
      where: {
        id: data?.commentId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}

async function updateOneComment(data: CommentUpdateModel) {
  try {
    const commentEmployee = await prisma.comment.findUnique({
      where: {
        id: data?.commentId
      }
    })

    if (!commentEmployee) {
      throw new Error('El comentario del usuario no fue encontrado.')
    }

    const updatedComment = await prisma.comment.update({
      where: {
        id: data?.commentId
      },
      data: {
        ...data
      }
    })

    return updatedComment
  } catch (error) {
    throw new Error(error)
  }
}

export { createNewComment, getOneComment, deleteOneComment, updateOneComment }
