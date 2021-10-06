export default class Order {
  CPF_VALID_LENGTH = 11;
  FACTOR_FIRST_VERIFIER_DIGIT = 10;
  FACTOR_SECOND_VERIFIER_DIGIT = 11;

  constructor (cpf: string) {
    if (!this.validate(cpf)) throw new Error('Invalid cpf')
  }

  cleanCpf(cpf: string) {
    return cpf.replace(/\D/g, '');
  }

  areAllDigitsEqual(cpf: string) {
    const [firstDigit] = cpf;
    return [...cpf].every(c => c === firstDigit);
  }

  calculateDigit(cpf: string, factor: number) {
    let total = 0;
    for (const digit of cpf) {
      if (factor > 1) total += parseInt(digit) * factor--
    }
  }

  extractVerifierDigit(cpf: string) {
    return cpf.slice(9)
  }

  validate(rawCpf: any) {
    if (!rawCpf) return false;
    const cpf = this.cleanCpf(rawCpf);
    if (cpf.length !== this.CPF_VALID_LENGTH) return false;
    if (this.areAllDigitsEqual(cpf)) return false;
    const firstVerifiedDigit = this.calculateDigit(cpf, this.FACTOR_FIRST_VERIFIER_DIGIT);
    const secondVerifiedDigit = this.calculateDigit(cpf, this.FACTOR_SECOND_VERIFIER_DIGIT);
    const verifiedDigit = this.extractVerifierDigit(cpf);
    const calculatedVerifiedDigit = `${firstVerifiedDigit}${secondVerifiedDigit}`;

    return verifiedDigit === calculatedVerifiedDigit;
  }

}