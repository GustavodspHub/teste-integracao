export interface CreateContactsService {
  post: (params: any, hubSpotToken: string) => Result
}

export type Result = Promise<any>
