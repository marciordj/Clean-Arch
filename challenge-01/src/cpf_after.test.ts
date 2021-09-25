import { validCpfNumber } from './cpf_after';

test('Should be validate cpf have 11 numbers', () => {
  const cpf = '450.238.008-30'
  const validCpf = validCpfNumber(cpf);
  expect(validCpf).toBe(true);
});

test('Should be validate if cpf is false', () => {
  const cpf = '4300.003.111-32'
  const validCpf = validCpfNumber(cpf);

  expect(validCpf).toBe(false);
})
