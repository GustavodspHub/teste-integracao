export interface GetConstactsService {
  get: (sheetId: string, googleApiKey: string) => Result
}

type Result = Promise<any>
