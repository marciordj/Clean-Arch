"use strict";
function haveMoreElevenNumber(number) {
    const test = number.length >= 11 || number.length <= 14 ? 'Num tem' : 'Tem';
    return console.log(test.split("").every(c => c === test[0]));
}
function validate(str) {
    const regex = /[.-]/gi;
    if (str.length >= 11 || str.length <= 14) {
        str = str.replace(regex, '');
        if (!str.split("").every(c => c === str[0])) {
            try {
                let d1, d2;
                let dg1, dg2, rest;
                let digito;
                let nDigResult;
                d1 = d2 = 0;
                dg1 = dg2 = rest = 0;
                for (let nCount = 1; nCount < str.length - 1; nCount++) {
                    digito = parseInt(str.substring(nCount - 1, nCount));
                    d1 = d1 + (11 - nCount) * digito;
                    d2 = d2 + (12 - nCount) * digito;
                }
                ;
                rest = (d1 % 11);
                dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;
                d2 += 2 * dg1;
                rest = (d2 % 11);
                if (rest < 2)
                    dg2 = 0;
                else
                    dg2 = 11 - rest;
                let nDigVerific = str.substring(str.length - 2, str.length);
                nDigResult = "" + dg1 + "" + dg2;
                return nDigVerific == nDigResult;
            }
            catch (e) {
                console.error("Erro !" + e);
                return false;
            }
        }
        else
            return false;
    }
}
console.log(haveMoreElevenNumber("111.111.111-111111"));
console.log(validate("111.111.111-11"));
console.log(validate("123.456.789-99"));
console.log(validate("935.411.347-80"));
