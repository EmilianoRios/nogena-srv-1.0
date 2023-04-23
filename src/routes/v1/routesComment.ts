// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as commentController from '../../controllers/controllerComment.ts'
import { validateToken } from '../../middlewares/validateToken.ts'

export const routesComment = new Router()

routesComment
  .post('/', commentController.createNewComment)
  .get('/:commentId', commentController.getOneComment)
  .delete('/:commentId', commentController.deleteOneComment)
  .patch('/', commentController.updateOneComment)
