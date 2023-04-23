// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'
import * as postController from '../../controllers/controllerPost.ts'
import { validateToken } from '../../middlewares/validateToken.ts'

export const routesPost = new Router()

routesPost
  .post('/', postController.createNewPost)
  .get('/', postController.getAllPosts)
  .get('/:postId', postController.getOnePost)
  .delete('/:postId', postController.deleteOnePost)
  .patch('/', postController.updateOnePost)
