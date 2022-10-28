import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from '../../../data/protocols/http/adapters'

import { AxiosInstance } from 'axios'

export class RequestAdapter implements HttpClient {
  constructor (private readonly axios: AxiosInstance) {}

  async request (data: HttpRequest): Promise<HttpResponse> {
    this.axios.interceptors.response.use(undefined, (error) => error.response)

    const axiosResponse = await this.axios({
      data: data?.body,
      ...data
    })

    if (!axiosResponse) throw new Error('REQUEST_ERROR')

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
      headers: axiosResponse.headers
    }
  }
}
