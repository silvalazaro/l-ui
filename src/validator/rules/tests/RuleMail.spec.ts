
import { assert, describe, expect, test } from "vitest"
import { Mail } from "@src/validator/rules/Mail"

const mail = new Mail()

describe('Mail validator test', () => {
  test('is valid mail', () => {
    expect(mail.isValid('email@teste.com')).toBe(true)
    expect(mail.isValid('test@teste.com.br')).toBe(true)
  })

  test('is not valid mail', () => {
    expect(mail.isValid('teste')).toBe(false)
    expect(mail.isValid('email@teste')).toBe(false)
  })

})