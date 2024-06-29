'use strict';

///////////////////////////////////////// Scoping in Practice

// function calcAge(birthYear){
//     const age=2037-birthYear;
//     console.log(firstName);

//     function printAge(){
//         const output=`${firstName} you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear>=1981 && age<=birthYear){
//             var millenial=true;
//             const firstName='Steven';
//             const str=`oh, and you are a millenal, ${firstName}`;
//             console.log(str);

//             function add(a, b){
//                 return a+b;
//             }
//             console.log(add(2, 3));
//         }
//         console.log(millenial);
//     }
//     printAge();
//     return age;
// }

// const firstName='Jonas';
// calcAge(1991);

///////////////////////////////////////// Hoisting and TDZ in Practice

// console.log(me);
// console.log(job);
// console.log(year);

// var me='Jonas';
// let job='tearcher';
// const year='1991';

//functions
// console.log(addDec(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDec(a, b){
//     return a+b;
// };

// const addExpr=function(a, b){
//     return a+b;
// };

// const addArrow=(a, b)=> a+b;

// //Example
// if(!numProducts) deleteShoppingCart();

// var numProducts=10;

// function deleteShoppingCart(){
//     console.log('All products deleted');
// }

// var x=10;
// let y=20;
// const z=30;

// console.log(x===window.x);
// console.log(x===window.y);
// console.log(x===window.z);

///////////////////////////////////////// The this Keyword in Practice

// console.log(this);

// const calcAge=function(birthYear){
//     console.log(2037-birthYear);
//     console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow=birthYear=>{
//     console.log(2037-birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);

// const jonas={
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037-this.year);
//     }
// }
// jonas.calcAge();

// const matilda={
    //     year:2017
    // };
    // matilda.calcAge=jonas.calcAge;
    // matilda.calcAge();
    
    // const f=jonas.calcAge;
    // f();
    
    ///////////////////////////////////////// Regular Functions vs. Arrow Functions
    
    
    // const jonas={
    //     firstName: 'Jonas',
    //     year: 1991,
    //     calcAge: function(){
    //         console.log(this);
    //         console.log(2037-this.year);

    //         //solution 1
    //         // const self=this;
    //         // const isMillenial=function(){
    //         //     console.log(self.year>=1981 && self.year<=1996);
    //         // };
    //         // isMillenial();
            
    //         //solution 2
    //         const isMillenial=()=>{
    //             console.log(this.year>=1981 && this.year<=1996);
    //         };
    //         isMillenial(); 
    //     },
    //     greet: () => console.log(`Hey ${this.firstNamme}`)
    // };
    // jonas.greet();
    // jonas.calcAge();

    // //arguement keyword
    // const addExpr=function(a, b){
    //     console.log(arguments);
    //     return a+b;
    // };
    // addExpr(2, 3);
    // addExpr(2, 3, 4);

    // var addArrow=(a, b)=>{
    //     console/log(arguements);
    //     return a+b;
    // };
    // addArrow(2, 5, 8);

    ///////////////////////////////////////// Objects vs. primitives

    // let age=30;
    // let oldAge=30;
    // age=31;
    // console.log(age);
    // console.log(oldAge);

    // const me={
    //     name: 'Jonas',
    //     age:30,
    // };
    // const friend=me;
    // friend.age=27;
    // console.log('Friend', friend);
    // console.log('Me', me);

///////////////////////////////////////// Primitives vs. Objects in Practice

// let lastName='Williams';
// let oldLastName=lastName;
// lastName='Davis';
// console.log(lastName, oldLastName);

// const jessica={
//     firstName:'Jessica',
//     lastName:'Williams',
//     age:27,
// }
// const marriedJessica=jessica;
// marriedJessica.lastName='Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// //copying objects
// const jessica2={
//     firstName:'Jessica',
//     lastName:'Williams',
//     age:27,
//     family:['Alice', 'Bob'],
// };
// const jesscia2Copy=Object.assign({}, jessica2);
// jesscia2Copy.lastName='Davis';
// jesscia2Copy.family.push('Mary');
// jesscia2Copy.family.push('John');
// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jesscia2Copy);