import { readFileSync } from 'fs'
import { resolve } from 'path'
import { expect, it, test } from 'vitest'
import { fetchCnpj } from '..'

test('search failed cnpj', async () => {
    expect(await fetchCnpj('01')).toBe(undefined)
})

test('search failed cnpj', async () => {
    const cnpj = await fetchCnpj('41703753000140')
    expect(cnpj.cnpj_raiz).toBe('40154884')
})