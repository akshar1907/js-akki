const accountId = 144553
let accountEmail = "akshar@gmail.com"
var accountPassword = "123456"
accountCity = "pune"
let accountState;

//accountId = 2


accountEmail = "hc@gmail.com"
accountPassword = "213214"
accountCity = "Ahemdabad"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table( [accountId, accountEmail, accountPassword, accountCity, accountState] )
