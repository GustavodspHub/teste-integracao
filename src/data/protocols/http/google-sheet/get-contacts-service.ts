export interface GetConstactsService {
  get: () => Result
}

type Result = Promise<any>
