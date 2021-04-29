import DotEnv from 'dotenv'

DotEnv.config()

// API Endpoint
export const endpoint = process.env.API_ENDPOINT || 'https://api.prisma-cms.com'
