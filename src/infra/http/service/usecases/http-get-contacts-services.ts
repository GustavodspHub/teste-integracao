import {
  HttpClient,
  GetConstactsService as GetContactsProtocols
} from '../../../../data/protocols/http'
export class GetContactsService implements GetContactsProtocols {
  constructor (private readonly httpClient: HttpClient) {}

  async get (sheetId: string, authenticationKey: string): Promise<any> {
    const range = 'A1:I50'
    const response = await this.httpClient.request({
      method: 'GET',
      url: `/v4/spreadsheets/${sheetId}/values/${range}?key=${authenticationKey}`
    })

    if (response.statusCode > 299 || response.body.status === 'error') return null

    return response.body.values
  }
}
