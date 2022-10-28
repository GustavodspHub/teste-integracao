import axios from 'axios'
import { APIS } from '../../../../utils'

export const HttpHubSpot = axios.create({
  baseURL: APIS.HUBSPOT_BASE_URL
})
