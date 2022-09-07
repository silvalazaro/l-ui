
import { assert, expect, test } from "vitest"
import { Cnpj } from "@src/validator/rules/Cnpj" 

const cnpj = new Cnpj("CNPJ")

test('is valid cnpj', () => {
  expect(cnpj.isValid('60943725000145')).toBe(true)
  expect(cnpj.isValid('80223001000134')).toBe(true)
})

test('is not valid cnpj', () => {
  expect(cnpj.isValid('')).toBe(false)
  expect(cnpj.isValid('80223001000124')).toBe(false)
})