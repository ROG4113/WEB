'use strict';


///////////////////////////////////////// Default Parameters

// const bookings=[];

// const createBooking=function(flightNum, numPassengers=1, price=199*numPassengers){
//     const booking={flightNum, numPassengers, price};
//     bookings.push(booking);
//     console.log(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 1);
// createBooking('LH123', 1, 399);
// createBooking('LH123', 2);

// createBooking('LH123',undefined , 2);

///////////////////////////////////////// How Passing Arguments Works: Values vs. Reference

// const flight='LH234';
// const jonas={
//     name:'Jonas Schmedtmann',
//     passport:3246432161321655,
// }

// const checkIn=function(flightNum, passenger){
//     flightNum='LH999';
//     passenger.name='Mr.' + passenger.name;
//     if(passenger.passport===3246432161321655){
//         alert('Checked in');
//     }else{
//         alert('Wrong passport!');
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport=function(person){
//     person.passport=Math.trunc(Math.random()*1000000000000);
// }
// newPassport(jonas);
// checkIn(flight, jonas);

///////////////////////////////////////// Functions Accepting Callback Functions

// const oneWord=function(str){
//     return str.replaceAll(' ', '').toLowerCase();
// }
// console.log(oneWord('Hue hue'));

// const upperFirstWord=function(str){
//     const [first, ...others]=str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer=function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('java is the best', oneWord);
// transformer('java is the best', upperFirstWord);

// const high5=function(){
//     console.log('👋');
// }

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////
// Functions Returning Functions

// const greet=function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greet1=(greeting)=>{
//     return (name)=>console.log(`${greeting} ${name}`);
// }

// const greeterHey=greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

///////////////////////////////////////// The call and apply Methods

// const lufthansa={
//     airline:'Lufthansa',
//     iatacode:'LH',
//     bookings:[],
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
//         this.bookings.push({flight:`${this.iatacode}${flightNum}`, name});
//     },
// }
// lufthansa.book(239, 'Jonas');
// lufthansa.book(239, 'John Smith');
// console.log(lufthansa);

// const  eurowings={
//     name:'Eurowings', 
//     iatacode:'EW',
//     bookings:[],
// };

// const book=lufthansa.book;

// //call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss={
//     airline:'Swiss Air Lines',
//     iatacode: 'LX',
//     bookings:[],
// }

// book.call(swiss, 583, 'Mary Cooper');
// console.group(swiss);

// //Apply method
// const flightData=[583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.group(swiss);

// book.call(swiss, ...flightData);

///////////////////////////////////////// The bind Method

// const bookEW=book.bind(eurowings);
// const bookLH=book.bind(lufthansa);
// const bookLX=book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23=book.bind(eurowings, 23);
// bookEW23('Jonas');
// bookEW23('Martha Cooper');

// //with event listeners
// lufthansa.planes=300;
// lufthansa.buyPlane=function(){
//     this.planes++;
//     console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// const addTax=(rate, value)=>value+value*rate;
// console.log(addTax(0.1, 200));

// const addVAT=addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate=function(rate){
//     return function(value){
//         return value+value*rate;
//     };
// };

// const addVAT2=addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

///////////////////////////////////////// Coding Challenge #1

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         const input=prompt(`What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)`);
//         input<=3 && this.answers[input]++;
//         this.diplayResults('string');
//     },
//     diplayResults(type='array'){
//         if(type==='array')console.log(this.answers);
//         else console.log(`Poll results are ${this.answers}`);
//     }
// };
// //2
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

// //IIFE
// (function(){
//     console.log('This will never run again');
//     const isPrivate=23;
// })();

// (()=>console.log('This will also never run again'))();

///////////////////////////////////////// Closures

// const secureBooking = function () {
//     let passengerCount = 0;
  
//     return function () {
//       passengerCount++;
//       console.log(`${passengerCount} passengers`);
//     };
// };
  
// const booker = secureBooking();
  
// booker();
// booker();
// booker();
  
// console.dir(booker);

///////////////////////////////////////
// More Closure Examples

// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

// (function () {
//     const header = document.querySelector('h1');
//     header.style.color = 'red';
    
//     document.querySelector('body').addEventListener('click', function(){
//         header.style.color='blue';
//     })
// }());