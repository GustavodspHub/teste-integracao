import { CreateContacts } from '../../domain/usecases'
import { HttpResponse, HttpRequest, Controller } from '../protocols'
import { serverError, ok, badRequest, notFound } from '../utils'

export class CreateContactsController implements Controller {
  constructor (
    private readonly createContacts: CreateContacts
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { sheetId, authenticationKey, hubSpotToken } = httpRequest.body
      await this.createContacts.create(sheetId, authenticationKey, hubSpotToken)

      return ok('Contatos salvo na plataforma HubSpot!')
    } catch (error) {
      console.log(error)
      switch (error.message) {
        case 'ERROR_GET_CONTACTS':
          return notFound('Não foi possível recuperar os contatos da planilha', error.message)
        case 'ERROR_CREATE_CONTACTS':
          return badRequest('Ops... Não foi possível salvar seus contatos', error.message)
        case 'EMAIL_INVALID':
          return badRequest('Ops... Algum email não é valdio')
        default:
          return serverError()
      }
    }
  }
}
