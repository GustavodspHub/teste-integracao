
import { HttpCreateContact } from '../../data/usecases/http-create-contacts-service'
import { RequestAdapter } from '../../infra/http/adapters/web-service-rest-adapter'
import { GetContactsService, CreateContactService, HttpGoogleSheet, HttpHubSpot } from '../../infra/http/service'
import { CreateContactsController } from '../../presentation/controller/create-contacts-controller'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'

export const makeCrateContactsController = (): CreateContactsController => {
  const requestAdapterGoogleSheet = new RequestAdapter(HttpGoogleSheet)
  const requestAdapterHubSpot = new RequestAdapter(HttpHubSpot)

  const getContactsService = new GetContactsService(requestAdapterGoogleSheet)
  const createContactService = new CreateContactService(requestAdapterHubSpot)

  const emailValidatorAdapter = new EmailValidatorAdapter()

  const httpCreateContact = new HttpCreateContact(
    getContactsService,
    createContactService,
    emailValidatorAdapter)

  return new CreateContactsController(httpCreateContact)
}
