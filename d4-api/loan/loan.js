let creditLimit = 200;
let amtRequested = 300;




const loanOut = function(amount) {
  return new Promise((resolve, reject) => {if (creditLimit <= 0) {
    reject("Insufficient Funds!");
  } else if (creditLimit > 0 && creditLimit < amount) {
    resolve(creditLimit);
    console.log(`logic test`);
  } else { 
    creditLimit -= amount;
    resolve(amount);
  }
  });
}

console.log(`Asking for $${amtRequested}, which should be okay ...`);
loanOut(amtRequested)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit - amtRequested}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });