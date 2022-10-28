import { CreateContacts } from '../../domain/usecases'
import { HttpResponse, HttpRequest, Controller } from '../protocols'
import { badRequest, serverError, ok } from '../utils'

export class SignUpController implements Controller {
  constructor (
    private readonly createContacts: CreateContacts
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const createContacts = await this.createContacts.create()

      return ok(createContacts)
    } catch (error) {
      return serverError()
    }
  }
}
