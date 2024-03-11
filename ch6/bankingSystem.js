const accounts = {
  a: 100,
  b: 0,
  c: 20,
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!Object.hasOwn(accounts, accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

// function transfer(from,amount){
//     if(accounts[from] , amount) return ;
//     accounts[from] -= amount;
//     accounts[getAccount()] += amount;
// }

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
        accounts[from] += amount;
    }
  }
}

for(;;){
    try{
        let dir =promptDirection("Where?");
        console.log("You chose ",dir);
        break;

    }catch(e){
        console.log("Not a valid direction. Try again");
    }
}

