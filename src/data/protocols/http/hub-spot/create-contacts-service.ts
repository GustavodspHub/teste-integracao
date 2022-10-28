export interface CreateContactsService {
  post: (params: Params) => Result
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Params = {
  company: string
  email: string
  firstname: string
  lastname?: string
  phone: string
  website: string
}

export type Result = any
