'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours={
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  }
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhacement
  openingHours,

  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex=1, mainIndex=0, time='20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} will be delivered 
      to ${address} at ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },
  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////// String Methods Practice

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

///////////////////////////////////////// Coding Challenge #4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function(){
//   const text=document.querySelector('textarea').value;
//   const row=text.split('\n');
//   console.log(row);

//   for(const [i,el] of row.entries()){
//     const [first, second]=el.toLowerCase().trim().split('_');
//     const output=`${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

///////////////////////////////////////// Working With Strings - Part 2

// // Split and join 
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// // Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

///////////////////////////////////////// Working With Strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////// Working With Strings - Part 1

// const airline='TAP Air Portugal';
// const plane='A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));

// const checkMiddleSeat=function(seat){
//   const s=seat.slice(-1);
//   if(s==='B' || s==='E') console.log('Middle seat');
//   else console.log('You got lucky');
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

///////////////////////////////////////// Coding Challenge #3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// //1
// const events=new Set(gameEvents.values());
// console.log(events);

// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// //4
// for(const [i, el] of gameEvents){
//   const str1='[FIRST HALF]';
//   const str2='[SECOND HALF]';
//   console.log(`${i<45?str1:str2} ${i}: ${el}`);
// }

///////////////////////////////////////// Maps: Iteration

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

///////////////////////////////////////// Maps: Fundamentals

// const rest=new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organin'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time=5;
// console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

///////////////////////////////////////// Sets

// const orderSet=new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza', 
//   ]);
//   console.log(orderSet);

//   console.log(new Set('Jonas'));
  
//   console.log(orderSet.has('Pizza'));
//   console.log(orderSet.has('Bread'));
//   orderSet.add('Garlic Bread');
//   orderSet.add('Garlic Bread');
//   orderSet.delete('Risotto');
//   // orderSet.clear();
//   console.log(orderSet);

//   for(const order of orderSet) console.log(orderSet);

//   const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//   const staffUnique=[...new Set(staff)];
//   console.log(staffUnique);console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

//   console.log(new Set('aniketsingh').size);

///////////////////////////////////////// Coding Challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1
// for(const [i, el]  of game.scored.entries()){
//   console.log(`Goal ${i+1}: ${el}`)
// }
// //2
// let avg=0;
// for(const val of Object.values(game.odds)) avg+=val;
// console.log(avg/Object.values(game.odds).length);

// //3
// const {team1, x:draw, team2}=game.odds;
// console.log(`odds of victory ${game.team1}: ${team1}`);
// console.log(`odds of draw: ${draw}`);
// console.log(`odds of victory ${game.team2}: ${team2}`);

///////////////////////////////////////// Looping Objects: Object Keys, Values, and Entries

// //property names
// const properties=Object.keys(openingHours);
// console.log(properties);

// let openStr=`We are open on ${properties.length} days: `;
// for(const day of properties){
//   openStr+=`${day}, `;
// }
// console.log(openStr);

// //Property values
// const values=Object.values(openingHours);
// console.log(values);

// //entire object
// const entries=Object.entries(openingHours);
// // console.log(entries);

// for(const [day, {open ,close}] of entries){
//   console.log(`on ${day} we open at ${open} ans close at ${close}`);
// }

///////////////////////////////////////// Optional Chaining

// if(restaurant.openingHours && restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon);
// }

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//   const open=restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// const users=[{name:'Jonas', email:'hello@jonas.io'}]
// console.log(users[0]?.name ?? 'user array empty');
// console.log(users[1]?.name ?? 'user array empty');

///////////////////////////////////////// The for-of Loop
// const menu=[...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const item of menu) console.log(item);

// for(const [i, el] of menu.entries()){
//   console.log(`${i+1}:${el}`);
// }  

///////////////////////////////////////// Coding Challenge #1

// //1
// // const players1=[...game.players[0]];
// // const players2=[...game.players[1]];
// const [players1, players2]=game.players;

// //2
// const [gk, ...fieldPlayers]=players1;

// //3
// const allPlayers=[...players1, ...players2];

// //4
// const players1Final=[...players1, 'Thiago', 'Coutinho', 'Perisic'];

// //5
// const {team1, x:draw, team2}=game.odds;
// console.log(team1, draw, team2);

// //6
// function printgoals(...names){
//   console.log(`${names.length} goals were scored`);
//   for(let i=0; i<names.length; i++){
//     console.log(names[i]);
//   }
// }
// printgoals(...game.scored);

// //7
// team1<team2 && console.log('Team1 is likely to win');
// team1>team2 && console.log('Team1 is likely to win');

///////////////////////////////////////// Logical Assignment Operators

// const rest1={
//   name:'Capri',
//   // numsGuests:20,
//   numsGuests:0,
// };
// const rest2={
//   name:'La Piazza',
//   owner:'Giovanni Rossi',
// };

// // rest1.numsGuests=rest1.numGuests || 10;
// // rest2.numsGuests=rest2.numGuests || 10;

// // rest1.numGuests ||=10;
// // rest2.numGuests ||=10;

// rest1.numGuests ??=10;
// rest2.numGuests ??=10;

// // rest1.owner=rest1.owner && '<Anonymous>';
// // rest2.owner=rest2.owner && '<Anonymous>';

// rest1.owner&&='<Anonymous>';
// rest2.owner&&='<Anonymous>';

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////// The Nullish Coalescing Operator

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////// Short Circuiting (&& and ||)

// console.log('----OR----');

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests=23;
// const guests1=restaurant.numGuests? restaurant.numGuests:10;
// console.log(guests1);

// const guests2=restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrroms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrroms', 'spinach');

///////////////////////////////////////// Rest Pattern and Parameters

// //spread
// const arr=[1, 2, ...[3, 4]];

// //rest
// const [a, b, ...others]=[1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// //objects
// const {sat, ...weekDays}=restaurant.openingHours;
// console.log(weekDays);

// //functions
// const add=function(...numbers){
//   let sum=0;
//   for(let i=0; i<numbers.length; i++){
//     sum+=numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// const x=[23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'spinach');
// restaurant.orderPizza('mushrooms');

///////////////////////////////////////// The Spread Operator (...)

// const arr=[7, 8, 9];
// const badNewArr=[1, 3, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr=[1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu=[...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy=[...restaurant.mainMenu];

// //join 2 arrays
// const menu=[...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str='Jonas';
// const letters=[...str, '', 's.'];
// console.log(letters);
// console.log(...str);

// const ingredients=[
//   // prompt("Let's make Pasta, Ingredient 1?"),
//   // prompt("Ingredient 2?"),
//   // prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //objects
// const newRestaurant={foundedIn:1998, ...restaurant, founder:'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy={...restaurant};
// restaurantCopy.name='Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(newRestaurant.name);

///////////////////////////////////////// Destructuring Objects

// restaurant.orderDelivery({
//   time: '22:30',
//   address:'Via del Sole, 21',
//   mainINdex:2,
//   starterIndex:2,
// });
// restaurant.orderDelivery({
//   address:'Punjabi Bagh',
// });

// const {name, openingHours, categories}=restaurant;
// console.log(name, openingHours, categories);

// const {name:restaurantName, openingHours:hours, categories:tags}=restaurant;
// console.log(restaurantName, openingHours, tags);

// const {menu=[], starterMenu:starters=[]}=restaurant;
// console.log(menu, restaurant);

// // mutating variables
// let a=111;
// let b=999;
// const obj={a: 23, b:7, c:14};
// ({a, b}=obj);
// console.log(a, b);

// //nested obj
// const{
//   fri:{open:o, close:c},
// }=openingHours;
// console.log(o, c); 

///////////////////////////////////////// Destructuring Arrays

// const arr=[2, 3, 4];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];

// const [x, y, z]=arr;
// console.log(x, y, z);
// console.log(arr);

// let [main,  , secondary]=restaurant.categories;
// console.log(main, secondary);

// //swapping
// // let temp=main;
// // main=secondary;
// // secondary=temp;
// // console.log(main, secondary);

// [main, secondary]=[secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse]=restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested=[2, 4, [5, 6]];
// // const [i, , j]=nested;
// // console.log(i, j);
// const [i, , [j, k]]=nested; 
// console.log(i, j, k);

// const [p=1, q=1, r=1]=[8, 9];
// console.log(p, q, r);