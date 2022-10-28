export interface GetConstactsService {
  get: (sheetId: string) => Result
}

type Result = Promise<any>
