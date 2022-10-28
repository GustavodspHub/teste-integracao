export interface GetConstactsService {
  get: (sheetId: string, authenticationKey: string) => Result
}

type Result = Promise<any>
