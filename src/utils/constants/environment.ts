import 'dotenv/config'

export const SERVER = {
  PORT: process.env.PORT || 3030,
  BASE_URI: process.env.BASE_URI || '/api/v1'
}

export const APIS = {
  HUBSPOT_BASE_URL: process.env.HUBSPOT_BASE_URL || '',
  GOOGLE_BASE_URL: process.env.GOOGLE_BASE_URL || ''
}

export const ID = {
  SHEET_ID: process.env.SHEET_ID || ''
}

export const TOKEN = {
  ACCESS_TOKEN_HUBSPOT: process.env.ACCESS_TOKEN_HUBSPOT || 'pat-na1-b4a7bd63-825d-4d1c-86b8-d18b893cd51b'
}
