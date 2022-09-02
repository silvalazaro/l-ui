
import { assert, describe, expect, test } from "vitest"
import { Cpf } from "@src/validator/rules/Cpf"

const cpf = new Cpf()

describe('CPF validator test', () => {
  test('is valid cpf', () => {
    expect(cpf.isValid('16767135062')).toBe(true)
    expect(cpf.isValid('692.257.850-38')).toBe(true)
  })

  test('is not valid cpf', () => {
    expect(cpf.isValid('')).toBe(false)
    expect(cpf.isValid('10203040')).toBe(false)
  })

})