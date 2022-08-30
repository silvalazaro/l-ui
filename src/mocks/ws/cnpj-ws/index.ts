import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'
import { readFileSync } from 'fs';
import { resolve } from 'path';
const domain = 'https://publica.cnpj.ws/cnpj'

export const handlers = [
  rest.get(`${domain}/:cnpj`, (req, res, ctx) => {
    let resp = {}
     if(typeof req.params.cnpj === 'string')
        resp = JSON.parse(readFileSync(__dirname + `/cnpj/${req.params.cnpj}.json`, 'utf-8'))
    return res(ctx.json(resp))
  })
]
