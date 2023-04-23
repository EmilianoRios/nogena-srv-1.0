import { prisma } from '../database/config.ts'
import { PostsModel, OnePostModel, PostUpdateModel } from '../models/post.ts'
import { PaginationModel } from '../models/pagination.ts'

async function createNewPost(data: PostsModel) {
  try {
    const newPost = await prisma.post.create({
      data: {
        title: data?.title,
        content: data?.content,
        authorId: data?.authorId
      }
    })
    return newPost
  } catch (error) {
    throw new Error(error)
  }
}

async function getAllPosts(pagination: PaginationModel) {
  try {
    const allPosts = await prisma.post.findMany({
      take: +pagination.take,
      skip: +pagination.take * +pagination.skip,
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

    return allPosts
  } catch (error) {
    throw new Error(error)
  }
}

async function getOnePost(data: OnePostModel) {
  try {
    const postEmployee = await prisma.post.findUnique({
      where: {
        id: data?.postId
      },
      select: {
        title: true,
        content: true,
        comment: {
          select: {
            employee: {
              select: {
                fullName: true,
                dni: true,
                phone: true,
                username: true
              }
            }
          }
        }
      }
    })
    return postEmployee
  } catch (error) {
    throw new Error(error)
  }
}

async function deleteOnePost(data: OnePostModel) {
  try {
    const postEmployee = await prisma.post.findUnique({
      where: {
        id: data?.postId
      }
    })

    if (!postEmployee) {
      throw new Error('El post del usuario no fue encontrado.')
    }

    await prisma.post.delete({
      where: {
        id: data?.postId
      }
    })

    return
  } catch (error) {
    throw new Error(error)
  }
}

async function updateOnePost(data: PostUpdateModel) {
  try {
    const postEmployee = await prisma.post.findUnique({
      where: {
        id: data?.postId
      }
    })

    if (!postEmployee) {
      throw new Error('El post del usuario no fue encontrado.')
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: data?.postId
      },
      data: {
        ...data
      }
    })

    return updatedPost
  } catch (error) {
    throw new Error(error)
  }
}

export { createNewPost, getAllPosts, getOnePost, deleteOnePost, updateOnePost }
