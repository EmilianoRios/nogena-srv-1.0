interface PostsModel {
  title: string
  content: string
  authorId: string
}

interface PostUpdateModel {
  postId: string
  title?: string
  content?: string
}

interface OnePostModel {
  postId: string
}

export { PostsModel, OnePostModel, PostUpdateModel }
