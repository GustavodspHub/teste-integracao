import { CreateContactsService, Result, GetConstactsService } from '../protocols/http'
import { CreateContacts } from '../../domain/usecases'
import { EmailValidator } from '../protocols/adapters'

export class HttpCreateContact implements CreateContacts {
  constructor (
    private readonly getConstactsService: GetConstactsService,
    private readonly createContactService: CreateContactsService,
    private readonly emailValidotr: EmailValidator
  ) {}

  async create (sheetId: string, authenticationKey: string, hubSpotToken: string): Promise<Result> {
    const sheets = await this.getConstactsService.get(sheetId, authenticationKey)

    if (!sheets) throw new Error('ERROR_GET_CONTACTS')

    for (let i = 0; i < sheets?.length; i++) {
      if (!Array.isArray(sheets)) throw new Error('INVALID_ARRAY')
      const names = sheets[i][0].split(' ')
      console.log(names)
      const email = sheets[i][1]
      console.log(email)
      const isValid = this.emailValidotr.isValid(email)
      console.log(isValid)
      if (!isValid) throw new Error('EMAIL_INVALID')
      const dataFormat = {
        properties: {
          firstname: names[0],
          lastname: names[1],
          email,
          phone: sheets[i][2],
          company: sheets[i][3],
          website: sheets[i][4]
        }
      }
      console.log(dataFormat)
      const result = await this.createContactService.post(dataFormat, hubSpotToken)
      if (!result) throw new Error('ERROR_CREATE_CONTACTS')
    }
  }
}
