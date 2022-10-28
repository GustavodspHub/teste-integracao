import axios from 'axios'
import { APIS } from '../../../../utils'

export const HttpGoogleSheet = axios.create({
  baseURL: APIS.GOOGLE_BASE_URL
})
