import { CreateContactsService, Result, GetConstactsService } from '../protocols/http'
import { CreateContacts } from '../../domain/usecases'
import { EmailValidator } from '../protocols/adapters';

export class HttpCreateContact implements CreateContacts {
  constructor (
    private readonly getConstactsService: GetConstactsService,
    private readonly createContactService: CreateContactsService,
    private readonly emailValidotr: EmailValidator
  ) {}

  async create (): Promise<Result> {
    const sheets = await this.getConstactsService.get()

    console.log(sheets)

    if (!sheets) throw new Error('ERROR_GET_CONTACTS')

    const contacts = []

    for (let i = 0; i < sheets.length; i++) {
      const names = sheets[i][1].split(' ')
      const email = sheets[i][2]
      const isValid = this.emailValidotr.isValid(email)
      if (isValid) {
        contacts.push({
          company: sheets[i][0],
          email,
          firstname: names[0],
          lastname: names[1],
          phone: sheets[i][3],
          website: sheets[i][4]
        })
      }
    }

    console.log(contacts)

    const result = await this.createContactService.post(contacts)

    if (!result) throw new Error('CREATE_ERROR')

    return result
  }
}
