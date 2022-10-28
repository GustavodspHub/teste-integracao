import {
  CreateContactsService as CreateContactsServiceProtocol,
  HttpClient,
  Params
} from '../../../../data/protocols/http'
import { TOKEN, ID } from '../../../../utils'

export class CreateContactService implements CreateContactsServiceProtocol {
  constructor (private readonly httpClient: HttpClient) {}

  async post (params: Params): Promise<any> {
    const response = await this.httpClient.request({
      method: 'POST',
      url: `/contacts/v1/lists/${ID.SHEET_ID}/add`,
      headers: {
        Authorization: `Bearer ${TOKEN.ACCESS_TOKEN_HUBSPOT}`
      },
      body: {
        inputs: params
      }
    })
    if (response.statusCode > 300 || !response.body) return null

    return response.body.results
  }
}
