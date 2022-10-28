export interface CreateContactsService {
  post: (params: any) => Result
}

export type Result = Promise<any>
