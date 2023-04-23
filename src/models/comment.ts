interface CommentsModel {
  postId: string
  content: string
  authorId: string
}

interface CommentUpdateModel {
  commentId: string
  content: string
}

interface OneCommentModel {
  commentId: string
}

export { CommentsModel, CommentUpdateModel, OneCommentModel }
