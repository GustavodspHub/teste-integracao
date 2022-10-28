// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ok = (message: string, payload?: object) => ({
  statusCode: 200,
  body: {
    message,
    payload,
    error: []
  }
})
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const created = (message: string, payload?: object) => ({
  statusCode: 201,
  body: {
    message,
    payload,
    error: []
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const serverError = () => {
  return {
    statusCode: 500,
    body: {
      message: 'Ops, parece que ocorreu um erro dentro dos nossos servidores',
      payload: {}
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const badRequest = (message: any, error?: any) => ({
  statusCode: 400,
  body: {
    message,
    payload: {},
    error
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const unprocessableEntity = (message: string, error?: any) => ({
  statusCode: 422,
  body: {
    message,
    payload: {},
    error
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const notFound = (message: string, error?: any) => ({
  statusCode: 404,
  body: {
    message,
    payload: {},
    error
  }
})
