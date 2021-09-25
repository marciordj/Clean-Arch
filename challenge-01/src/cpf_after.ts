const regex = /[.-]/gi;
const CPF_LENGTH = 11;

export const validCpfNumber = (cpf: string) => {
  const cpfReplaced = cpf.replace(regex, '');
  const cpfNew = cpfReplaced.split('').map(digits => parseInt(digits));
  const incrementNumber = cpfNew.length + 1

  console.log(cpfNew.map((number, index) => {
    console.log({index: index, indexIncremented: number * (incrementNumber - index)});
    return number * (incrementNumber - index)
  }))
  return cpfReplaced.length === CPF_LENGTH ?? false;
}
validCpfNumber('450.238.008-30')
