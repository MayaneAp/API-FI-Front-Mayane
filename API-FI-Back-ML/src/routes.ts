import {Router} from 'express'
import { getUsersMay, getUserMay, saveUserMay, updateUserMay, removeUserMay} from './controller/UserController'
import {getLivrosMay, getLivroMay,removeLivroMay, saveLivroMay, updateLivroMay} from './controller/LivrosMayController'

export const routes = Router()

routes.get('/users',getUsersMay)
routes.get('/users/:id',getUserMay)
routes.post('/users',saveUserMay)
routes.put('/users/:id',updateUserMay)
routes.delete('/users/:id',removeUserMay)
routes.get('/livros',getLivrosMay)
routes.get('/livros/:id',getLivroMay)
routes.post('/livros',saveLivroMay)
routes.put('/livros/:id',updateLivroMay)
routes.delete('/livros/:id',removeLivroMay)

export default routes
