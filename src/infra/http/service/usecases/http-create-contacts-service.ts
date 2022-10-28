import {
  CreateContactsService as CreateContactsServiceProtocol,
  HttpClient
} from '../../../../data/protocols/http'

export class CreateContactService implements CreateContactsServiceProtocol {
  constructor (private readonly httpClient: HttpClient) {}

  async post (params: any, hubSpotToken: string): Promise<any> {
    const response = await this.httpClient.request({
      method: 'POST',
      url: '/crm/v3/objects/contacts',
      body: params,
      headers: {
        Authorization: `Bearer ${hubSpotToken}`
      }
    })

    if (response.statusCode > 300 || !response.body) return null

    return response.body
  }
}
