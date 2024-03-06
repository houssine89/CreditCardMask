function maskify(creditCardNumber){
  var masked = '*'.repeat(creditCardNumber.length - 4) + creditCardNumber.substr(-4);
  return masked;
}

var cc ='1234-5678-9012-3456';
var maskedCreditCard = maskify(cc);
console.log(maskedCreditCard);
