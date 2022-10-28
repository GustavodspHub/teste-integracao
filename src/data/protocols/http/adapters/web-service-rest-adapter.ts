import { AxiosRequestConfig } from 'axios'

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface HttpRequest {
  url: AxiosRequestConfig['url']
  method: AxiosRequestConfig['method']
  body?: AxiosRequestConfig['data']
  headers?: AxiosRequestConfig['headers']
  auth?: AxiosRequestConfig['auth']
}

export interface HttpResponse<T = any> {
  statusCode: HttpStatusCode
  body?: T
  headers?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}
