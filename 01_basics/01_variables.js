const accountId =1432
let accountEmail = "ravi@google.com"
var accountPassword ="12345"
accountCity="Jaipur"
let accountState; // undefined//

// accountId = 2 // not allowed

 accountEmail = "rahul@google.com"
 accountPassword ="54321"
accountCity="Delhi"

console.log();

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* Prefer not allow to "var" because
of issue in block scope and fuctional scope,
*/