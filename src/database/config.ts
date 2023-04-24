// @ts-ignore
import { PrismaClient } from '../../generated/client/deno/edge.ts'
// @ts-ignore
import { load } from 'https://deno.land/std@0.184.0/dotenv/mod.ts'

const envVars = await load()

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL')
    }
  }
})

export { prisma }
