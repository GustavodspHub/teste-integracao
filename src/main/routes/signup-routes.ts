import { Router } from 'express'
import { makeCrateContactsController } from '../factories/make-create-contacts-controller'
import { adaptRoute } from './adapters/express-route-adapter'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/contacts', adaptRoute(makeCrateContactsController()))
}
