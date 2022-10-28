import {
  HttpClient,
  GetConstactsService as GetContactsProtocols
} from '../../../../data/protocols/http'
import { ID } from '../../../../utils'
export class GetContactsService implements GetContactsProtocols {
  constructor (private readonly httpClient: HttpClient) {}

  async get (): Promise<any> {
    const range = 'A1:I50'
    const response = await this.httpClient.request({
      method: 'GET',
      url: `/v4/spreadsheets/${ID.SHEET_ID}/values/${range}`
    })
    if (response.statusCode > 300 || !response.body) return null

    return response.body.values
  }
}
