'use strict';

///////////////////////////////////////// Activating Strict Mode

// let hasDriversLicense=false;
// const passTest=true;

// if(passTest) hasDriverLicense=true;
// if(hasDriversLicense) console.log('I can Drive');

// // const interface='Audio';
// // const private=534;

///////////////////////////////////////// Functions

// function logger(){
//     console.log('My name is Aniket');
// }

// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice=`juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 0));

// const appleOrangejuice=fruitProcessor(2, 4);
// console.log(appleOrangejuice);

///////////////////////////////////////// Function Declarations vs. Expressions

// function calcAge1(birthYear){
//     return 2037-birthYear;
// }

// const age1=calcAge1(1991);

// const calcAge2=function(birthYear){
//     return 2037-birthYear;
// }

// const age2=calcAge2(1991);

// console.log(age1, age2);

///////////////////////////////////////// Arrow functions

// const calcAge=(birthYear)=> 2037-birthYear;
// const age=calcAge(1991);
// console.log(age);

// const yearsUntilRetirement=(birthYear, firstName)=>{
//     const age=2037-birthYear;
//     const retirement=65-age;

//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

///////////////////////////////////////// Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
//   }
  
//   function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
  
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
//   }
//   console.log(fruitProcessor(2, 3));

///////////////////////////////////////// Reviewing Functions

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
  
//   const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;
  
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🎉`);
//       return -1;
//     }
//   }
  
//   console.log(yearsUntilRetirement(1991, 'Jonas'));
//   console.log(yearsUntilRetirement(1950, 'Mike'));

///////////////////////////////////////// Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////// Introduction to Arrays

// const friend1='Michael';
// const friend2='Steven';
// const friend3='Peter';

// const friends=['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years1=new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);

// console.log(friends[friends.length-1]);

// friends[2]='Batman';
// console.log(friends);

// const jonas=['Jonas', 'Schmedtmann', 2037-1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const years = [1990, 1967, 2002, 2010, 2018];
  
//   const age1 = calcAge(years[0]);
//   const age2 = calcAge(years[1]);
//   const age3 = calcAge(years[years.length - 1]);
//   console.log(age1, age2, age3);
  
//   const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
//   console.log(ages);

///////////////////////////////////////// Basic Array Operations (Methods)

// const friends=['Michael', 'Steven', 'Peter'];
// const newLength=friends.push('Jay');//it returns new length of array
// console.log(friends);

// friends.unshift('John');//adds at first and return new length
// console.log(friends);

// friends.pop();
// const popped=friends.pop();//returns popped element
// console.log(popped);
// console.log(friends);

// friends.shift();//removes first
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));//returns boolean if exists
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }

///////////////////////////////////////// Coding Challenge #2

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
//   // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  
//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  
//   console.log(bills, tips, totals);

///////////////////////////////////////// Introduction to Objects

// const jonas={
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     age:2037-1991,
//     job:'teacher',
//     friends:['Michael', 'Peter', 'Steven']
// };

///////////////////////////////////////// Dot vs. Bracket Notation


// const jonas={
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     age:2037-1991,
//     job:'teacher',
//     friends:['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const NameKey='Name';
// console.log(jonas['first'+NameKey]);
// console.log(jonas['last'+NameKey]);

// // const interestedIn=prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// // console.log(interestedIn);

// // if (jonas[interestedIn]) {
// //     console.log(jonas[interestedIn]);
// // }
// // else {
// //     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// // }

// // jonas.llocation='Portugal';
// // jonas['twitter']="@idk";
// // console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

///////////////////////////////////////// Object Methods

// const jonas={
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     birthYear:1991,
//     job:'teacher',
//     friends:['Michael', 'Peter', 'Steven'],
//     hasDriversLicense:true,

//     // calcAge:function(birthYear){ // a function attached to a object is called method
//     //     return 2037-birthYear;
//     // }
//     // calcAge:function(){
//     //     return 2037-this.birthYear;
//     // }
//     calcAge:function(){
//         this.age=2037-this.birthYear;
//         return 2037-this.birthYear;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(jonas.calcAge());
// // console.log(jonas['calcAge'](1991));

// console.log(jonas.age);
// console.log(jonas.getSummary());

///////////////////////////////////////// Coding Challenge #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.mass / this.height ** 2;
//     }
// };
  
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
// };
  
// mark.calcBMI();
// john.calcBMI();
  
// console.log(mark.bmi, john.bmi);
  
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } 
// else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

///////////////////////////////////////// Iteration: The for Loop

// for(let i=1; i<=30; i++){
//     console.log(`Lifting weights rep ${i}`);
// }

///////////////////////////////////////// Looping Arrays, Breaking and Continuing

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types=[];

// for(let i=0; i<jonas.length; i++){
//     console.log(jonas[i]);
//     // types[i]=typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types);

// const years=[1991, 2007, 1969, 2020];
// const age=[];

// for(let i=0; i<years.length; i++){
//     age[i]=2037-years[i];
// }
// console.log(age);

// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

///////////////////////////////////////// Looping Backwards and Loops in Loops

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for(let i=jonas.length-1; i>=0; i--){
//     console.log(jonas[i]);
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`Starting exercise ${exercise}`);
  
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

///////////////////////////////////////// The while Loop

// let rep=1;
// while(rep<=10){
//     console.log(`Lifting ${rep}`);
//     rep++;
// }

// let dice=Math.trunc(Math.random()*6)+1;
// console.log(dice);

// while(dice!==6){
//     console.log(`You rolled a ${dice}`);
//     dice=Math.trunc(Math.random()*6)+1;
//     if(dice===6) console.log('You won');
// }

///////////////////////////////////////// Coding Challengo
// const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tip=[];
// let total=[];

// let calcTip=(bill)=>bill>=50 && bill<=300?bill*0.15:bill*0.20;

// for(let i=0; i<bills.length; i++){
//     tip.push(calcTip(bills[i]));
//     total.push(tip[i]+bills[i]);
// }

// console.log(bills);
// console.log(tip);
// console.log(total);