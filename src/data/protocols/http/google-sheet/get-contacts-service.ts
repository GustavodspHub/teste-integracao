export interface GetSheetsService {
  get: () => Result
}

export type Result = Promise<any>
