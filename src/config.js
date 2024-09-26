import dotenv from 'dotenv'
dotenv.config()

export const config = {
  PORT: process.env.PORT || 3000,
  DEV: process.env.NODE_ENV !== 'production',
  API_URL: process.env.API_URL || undefined
}
