import { CreateContactsService, Result, GetConstactsService } from '../protocols/http'
import { CreateContacts } from '../../domain/usecases'
import { EmailValidator } from '../protocols/adapters'

export class HttpCreateContact implements CreateContacts {
  constructor (
    private readonly getConstactsService: GetConstactsService,
    private readonly createContactService: CreateContactsService,
    private readonly emailValidotr: EmailValidator
  ) {}

  async create (sheetId: string, googleApiKey: string, hubSpotToken: string): Promise<Result> {
    const getSheet = await this.getConstactsService.get(sheetId, googleApiKey)

    if (!getSheet) throw new Error('ERROR_GET_CONTACTS')

    for (let i = 0; i < getSheet?.length; i++) {
      if (!Array.isArray(getSheet)) throw new Error('INVALID_ARRAY')

      const names = getSheet[i][0].split(' ')
      const email = getSheet[i][1]
      const isValid = this.emailValidotr.isValid(email)

      if (!isValid) throw new Error('EMAIL_INVALID')
      const dataFormat = {
        properties: {
          firstname: names[0],
          lastname: names[1],
          email,
          phone: getSheet[i][2],
          company: getSheet[i][3],
          website: getSheet[i][4]
        }
      }

      const result = await this.createContactService.post(dataFormat, hubSpotToken)

      if (!result) throw new Error('ERROR_CREATE_CONTACTS')
    }
  }
}
