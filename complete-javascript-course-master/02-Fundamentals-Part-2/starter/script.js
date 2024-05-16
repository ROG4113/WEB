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

