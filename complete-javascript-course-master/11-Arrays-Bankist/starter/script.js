'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Anshika Chudail Singh',
  movements: [430, 10563522, 700, 50, 90],
  interestRate: 1,
  pin: 5116,
};
const account6 = {
  owner: 'Aniket Singh',
  movements: [43000000, 105634500, 704354530, 5453530, 9453453450],
  interestRate: 1,
  pin: 4113,
};
const account7 = {
  owner: 'Mummy Singh',
  movements: [43000000, 105634500, 704354530, 5453530, 53453450],
  interestRate: 1,
  pin: 2606,
};

const accounts = [account1, account2, account3, account4, account5, account6, account7];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements=function(movements, sort=false){
  //removing old elements
  containerMovements.innerHTML='';

  const movs=sort?movements.slice().sort((a, b)=>a-b):movements;

  movs.forEach(function(mov, i){
    const type=mov>0?'deposit':'withdrawal';

    const html=`
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

const calcDisplayBalance=function(acc){
  acc.balance=acc.movements.reduce((acc, cur)=>acc+cur, 0);
  labelBalance.textContent=`${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary=function(acc){
  const incomes=acc.movements.filter(mov=>mov>0).reduce((acc, mov)=>acc+mov);
  labelSumIn.textContent=`${incomes}€`;

  const withdraws=Math.abs(acc.movements.filter(mov=>mov<0).reduce((acc, mov)=>acc+mov, 0));
  labelSumOut.textContent=`${withdraws}€`;

  const interest=acc.movements.filter(mov=>mov>0).map(mov=>mov*acc.interestRate/100).filter((mov)=>mov>=1).reduce((acc, mov)=>acc+mov);
  labelSumInterest.textContent=`${interest}€`;
}
// calcDisplaySummary(account1.movements);

const createUserNames=function(accs){
  accs.forEach(function(acc){
    acc.username=acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
  });
};
createUserNames(accounts);

const updateUI=function(acc){
  //display movements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
}

//Event Handlers

let currentAccount;

btnLogin.addEventListener('click', function(e){
  ///prevent forms from submitting
  e.preventDefault();
  
  currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
  
  if(currentAccount?.pin===Number(inputLoginPin.value)){

    //clear input fields
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();//to remove focus

    //display UI and message
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;

    //update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  
  
  const amount=Number(inputTransferAmount.value);
  
  //transferring
  const receiver=accounts.find(acc=>acc.username===inputTransferTo.value);
  
  // clear input fields
  inputTransferAmount.value=inputTransferTo.value='';

  if(amount>0 && receiver.username && currentAccount.balance>=amount && receiver?.username!==currentAccount.username){
    receiver.movements.push(amount);
    currentAccount.movements.push(-amount);
    //update UI
    updateUI(currentAccount);
  };

});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  
  const amount=Number(inputLoanAmount.value);

  const valid=currentAccount.movements.some(mov=>mov>=amount*10/100);

  if(valid && amount>0){
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  };
  inputLoanAmount.value='';
});

btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(currentAccount.username===inputCloseUsername.value && currentAccount.pin===Number(inputClosePin.value)){
    
    //calculating index
    const index=accounts.findIndex(acc=>acc.username===currentAccount.username);

    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity=0;
  };
  inputCloseUsername.value=inputClosePin.value='';
});

let sorted=false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted=!sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////// Simple Array Methods

// let arr=['a', 'b', 'c', 'd', 'e'];

// //slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 3));
// console.log(arr.slice(1, -1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice());
// console.log([...arr]);

// //splice
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 1); // first is starting and second is no. of elements
// console.log(arr);

// //reverse
// arr=['a', 'b', 'c', 'd', 'e'];
// const arr2=['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //concat
// const letters=arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //join
// console.log(letters.join('-'));

///////////////////////////////////////// The new at Method

// const arr=[23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('Anchal KitKat'.at(0));
// console.log('Anchal KitKat'.at(-1));

///////////////////////////////////////// Looping Arrays: forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for(const movement of movements){
// for(const [i, movement] of movements.entries()){
//   if(movement>0){
//     console.log(`Transaction ${i+1}: You deposited ${movement}`);
//   }
//   else{
//     console.log(`Transaction ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// //cannot brek out in foreach
// movements.forEach(function(movement, i, arr){
//   if(movement>0){
//     console.log(`Transaction ${i+1}: You deposited ${movement}`);
//   }
//   else{
//     console.log(`Transaction ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

///////////////////////////////////////// forEach With Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // map
// currencies.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`);
// });

// //set
// const currenciesUnique=new Set(['USD', 'GB', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, set){
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////// Coding Challenge #1

// const checkDogs=function(dogsJulia, dogsKate){
//   const dogsAll=dogsJulia.slice(1, -2).concat(dogsKate);

//   dogsAll.forEach(function(age, i){
//     if(age>=3){
//       console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
//     }
//     else{
//       console.log(`Dog number ${i+1} is still a puppy 🐶`);
//     };
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log('----SECOND----');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////// The map Method

// const euroToUsd=1.1;

// // const movementsUsd=movements.map(function(mov){
// //   return mov*euroToUsd;
// // });

// const movementsUsd=movements.map(mov=>mov*euroToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementsUsdFor=[];
// for(const mov of movements) movementsUsdFor.push(mov*euroToUsd);
// console.log(movementsUsdFor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

///////////////////////////////////////// The filter Method

// const deposit=movements.filter(function(mov){
//   return mov>0;
// });

// console.log(movements);
// console.log(deposit);

// const depositsFor=[];
// for(const mov of movements) if(mov>0) depositsFor.push(mov);

// console.log(depositsFor);

// const withdrawal=movements.filter(mov=>mov<0);

// console.log(withdrawal);

///////////////////////////////////////// The reduce Method

// console.log(movements);

// const balance=movements.reduce((aa, cur)=> acc+cur, 0);

// console.log(balance);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

///////////////////////////////////////// Coding Challenge #2

// const calAvgHumanAge=function(ages){
//   const humanAge=ages.map(function(dogAge){
//     if(dogAge<=2) return 2*dogAge;
//     else return 16+dogAge*4;
//   });
  
//   const HumanAgeFilter=humanAge.filter(function(dogAge){
//     return dogAge>18;
//   });

//   const average=HumanAgeFilter.reduce(function(acc, cur){
//     return acc+cur;
//   }, 0)/HumanAgeFilter.length;

//   console.log(average);
// };

// calAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calAvgHumanAge([16, 6, 10, 5, 6, 1, 4]);

///////////////////////////////////////// The Magic of Chaining Methods

// const euroToUsd=1.1;
// console.log(movements);

// const totatlDepositsUSD=movements.filter(mov=>mov>0).map(mov=>mov*euroToUsd).reduce((acc, mov)=>acc+mov, 0);
// console.log(totatlDepositsUSD);

///////////////////////////////////////// Coding Challenge #3

// const calAvgHumanAge=ages=>{
//   const average=ages.map(dogAge=>{
//     if(dogAge<=2) return 2*dogAge;
//     else return 16+dogAge*4;
//   }).filter(dogAge=>dogAge>18).reduce((acc, cur, i, arr)=>acc+cur/arr.length, 0);

//   console.log(average);
// };

// calAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calAvgHumanAge([16, 6, 10, 5, 6, 1, 4]);

///////////////////////////////////////// The find Method

// const firstWithdrawal=movements.find(mov=>mov<0);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account=accounts.find(acc=>acc.owner==='Jessica Davis');
// console.log(account);

///////////////////////////////////////// some and every

// console.log(movements);

// //equality
// console.log(movements.includes(-130));

// //condition
// console.log(movements.some(mov=>mov===-130));

// const anyDeposits=movements.some(mov=>mov>0);
// console.log(anyDeposits);

// //every
// console.log(movements.every(mov=>mov>0));

// console.log(account4.movements.every(mov=>mov>0));

// //seperate callback
// const deposit=mov=>mov>0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

///////////////////////////////////////// flat and flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

///////////////////////////////////////// Sorting Arrays

// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

///////////////////////////////////////// More Ways of Creating and Filling Arrays

// const arr=[1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// //Empty arrays + fill  method
// const x=new Array(7);
// console.log(x);

// // element, start, end
// x.fill(1, 3, 5);
// console.log(x);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 5);
// console.log(arr);

// //Array.from
// const y=Array.from({length:7}, ()=>1);
// console.log(y);

// const z=Array.from({length:7}, (_, i)=>i+1);
// console.log(y);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

///////////////////////////////////////
// Array Methods Practice

// // 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2.
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // Prefixed ++ oeprator
// let a = 10;
// console.log(++a);
// console.log(a);

// // 3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitzalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
//     .join(' ');

//   return capitzalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////// Coding Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1
dogs.map(dog=>dog.recommendedFood=dog.weight**0.75*28);
console.log(dogs);

//2
const sarahDog=dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eaying too ${sarahDog.curFood>sarahDog.recommendedFood?'much':'less'}`);

//3
const ownersEatTooMuch=dogs.filter(dog=>dog.curFood>dog.recommendedFood).flatMap(dog=>dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLess=dogs.filter(dog=>dog.curFood<dog.recommendedFood).flatMap(dog=>dog.owners);
console.log(ownersEatTooLess);

//4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);

console.log(`${ownersEatTooLess.join(' and ')} dogs eat too less!`);

//5
console.log(dogs.some(dog=>dog.curFood===dog.recommendedFood));

//6
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);