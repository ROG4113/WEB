////////////////////////////////////// Values and Variables

// let js="amazing";
// console.log(40+8+23-10);

// console.log("Jonas");
// console.log(23);

// let firstName="Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda="JM";
// let $function=27;

// let person="jonas";
// let PI=3.1415;

// let myFirstJob="Student";
// let myCurrentJob="Student";

// console.log(myFirstJob);

////////////////////////////////////// Data Types

// let javascriptIsFun=true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascripIsFun);
// console.log(typeof 23);
// console.log(typeof "Aniket");

// javascriptIsFun="YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year=1991;
// console.log(typeof year);

// console.log(typeof null);

////////////////////////////////////// let, const and var

// let age=30;
// age=31;

// const birthYear=1991;
// // birthYear=1990;

// // const job;

// var job="Student";
// job="Student";

// lastName="Singh";
// console.log(lastName);

////////////////////////////////////// Basic Operators Math operators

// const now=2037;
// const ageJonas=now-1991;
// const ageSarah=now-2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas*2, ageJonas/10, 2**3);

// const firstName="Aniket";
// const lastName="Singh";
// console.log(firstName+" "+lastName);

// let x=10+5;
// x+=10;
// x*=4;
// x++;
// x--;
// x--;
// console.log(x)

// console.log(ageJonas>ageSarah);
// console.log(ageSarah>=18);

// const isFullAge=ageSarah>=18;

////////////////////////////////////// Operator Precedence

// const now=2037;
// const ageJonas=now-1991;
// const ageSarah=now-2018;

// console.log(now-1991>now-2018);

// console.log(25-10-5);

// let x, y;
// x=y=25-10-5;
// console.log(x, y);
// const avgAge=(ageJonas+ageSarah)/2;
// console.log(avgAge);

////////////////////////////////////// Coding Challenge #1

// // const massMark=78;
// // const heightMark=1.69;
// // const massJohn=92;
// // const heightJohn=1.95;

// const massMark=95;
// const heightMark=1.88;
// const massJohn=85;
// const heightJohn=1.76;

// const BMIMark=massMark/heightMark**2;
// const BMIJohn=massJohn/(heightJohn*heightJohn);
// const markHigherBMI=BMIMark>BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////// Strings and Template Literals

// const firstName="Aniket";
// const job="student";
// const birthYear=2003;
// const year=2024;

// const aniket="I'm " + firstName + ", a " + (year-birthYear) + " years old " + job + "!";
// console.log(aniket);

// const aniketNew=`I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
// console.log(aniketNew);

// console.log("String with \n\
// multiple\n\
// lines");

// console.log(`String with
// multiple
// lines`);

////////////////////////////////////// Taking Decisions: if / else Statements

// const age=15;
// const isOldEnough=age>=18;

// if(isOldEnough){
//     console.log("You can  get your driving license");
// }
// else{
//     console.log(`You have ${18-age} years left before you cn drive`);
// }

// const birthYear=2012;
// let century;
// if(birthYear<=2000){
//     century=20;
// }
// else{
//     century=21;
// }
// console.log(century);

////////////////////////////////////// Coding Challenge #2

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
// }

////////////////////////////////////// Type Conversion and Coercion

//  const inputYear='1991';
//  console.log(Number(inputYear), inputYear);
//  console.log(Number(inputYear)+18);

//  console.log(Number('Jonas'));
//  console.log(typeof NaN);

//  console.log(String(23), 23);

//  //type coercion
//  console.log('I am '+23+ ' years old');
//  console.log('23'-'10'-3);
//  console.log('23'/'2');

//  let n='1'-1;
//  n=n-1;
//  console.log(n);

////////////////////////////////////// Truthy and Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Aniket'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money=0;
// if(money){
//     console.log("Don't spend it all ; )");
// }
// else{
//     console.log("You should get a job!");
// }

// let height;
// if(height){
//     console.log("YAY! Height if defined");
// }
// else{
//     console.log("Height id UNDEFINED");
// }

////////////////////////////////////// Equality Operators: == vs. ===

// const age='18';
// if(age===18) console.log("You just became an adult(strict)");
// if(age==18) console.log("You just became an adult(loose)");

// const favourite=Number(prompt(`what's your fav number?`));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite===23){
//     console.log("Nice! 23 is an amazing number!");
// }
// else if(favourite===7){
//     console.log("7 is also a coll number");
// }
// else{
//     console.log("Number is not 23 or 7");
// }

// if(favourite !== 23){
//     console.log("why not 23?");
// }

////////////////////////////////////// Logical Operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

////////////////////////////////////// Coding Challenge #3

// // const scoreDolphins = (96 + 108 + 89) / 3;
// // const scoreKoalas = (88 + 91 + 110) / 3;
// // console.log(scoreDolphins, scoreKoalas);

// // if (scoreDolphins > scoreKoalas) {
// //   console.log('Dolphins win the trophy 🏆');
// // } else if (scoreKoalas > scoreDolphins) {
// //   console.log('Koalas win the trophy 🏆');
// // } else if (scoreDolphins === scoreKoalas) {
// //   console.log('Both win the trophy!');
// // }

// // BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }

////////////////////////////////////// The switch Statement

// const day='monday';

// switch(day){
//     case 'monday':
//         console.log('I sleep on monday');
//         break;
//     case 'tuesday':
//         console.log('I sleep on tuesday');
//         break;
//     case 'wednesday':
//         console.log('I sleep on wednesday');
//         break;
//     case 'thursday':
//         console.log('I sleep on thursday');
//         break;
//     case 'friday':
//         console.log('I sleep on friday');
//         break;
//     case 'saturday':
//         console.log('I sleep on saturday');
//         break;
//     case 'sunday':
//         console.log('I sleep on sunday');
//         break;
//     default:
//         console.log('Not a valid day!');
// }
// if (day === 'monday') {
//     console.log('I sleep on monday');
//   } else if (day === 'tuesday') {
//     console.log('I sleep on tuesday');
//   } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('I sleep');
//   } else if (day === 'friday') {
//     console.log('I sleep on friday');
//   } else if (day === 'saturday' || day === 'sunday') {
//     console.log('I sleep');
//   } else {
//     console.log('Not a valid day!');
//   }

////////////////////////////////////// Statements and Expressions

// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////// The Conditional (Ternary) Operator

// const age=22;
// age>=18?console.log('I like to drink milk being older than 18'):console.log('I like to drink milk being under 18');

// const drink = age >= 18 ? 'water' : 'milk';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'water';
// } else {
//   drink2 = 'milk';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'water' : 'milk'}`);

////////////////////////////////////// Coding Challenge #4

// const bill = 100;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);