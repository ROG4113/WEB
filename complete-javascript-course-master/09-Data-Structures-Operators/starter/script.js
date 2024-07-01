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

///////////////////////////////////////// Coding Challenge #2



///////////////////////////////////////// Looping Objects: Object Keys, Values, and Entries

//property names
const properties=Object.keys(openingHours);
console.log(properties);

let openStr=`We are open on ${properties.length} days: `;
for(const day of properties){
  openStr+=`${day}, `;
}
console.log(openStr);

//Property values
const values=Object.values(openingHours);
console.log(values);

//entire object
const entries=Object.entries(openingHours);
// console.log(entries);

for(const [day, {open ,close}] of entries){
  console.log(`on ${day} we open at ${open} ans close at ${close}`);
}

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