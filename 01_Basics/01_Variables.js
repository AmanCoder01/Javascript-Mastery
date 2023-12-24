const accountId = 14123; 
// accountId =2;  not changable


let accountEmail = "amanm@gmail.com";
accountEmail = "neha@gmail.com"


var accountPassword = "1234"; // prefer not to use because of issue in block scope
accountPassword = "amn"

accountCity = "Varanasi";
accountCity="Jaipur"

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);





// OUTPUT

/*
┌─────────┬──────────────────┐
│ (index) │      Values      │
├─────────┼──────────────────┤
│    0    │      14123       │
│    1    │ 'neha@gmail.com' │
│    2    │      'amn'       │
│    3    │     'Jaipur'     │
│    4    │    undefined     │
└─────────┴──────────────────┘  */