'use strict';

///////////////////////////////////////// Scoping in Practice

function calcAge(birthYear){
    const age=2037-birthYear;
    console.log(firstName);

    function printAge(){
        const output=`${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear>=1981 && age<=birthYear){
            var millenial=true;
            const firstName='Steven';
            const str=`oh, and you are a millenal, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a+b;
            }
            console.log(add(2, 3));
        }
        console.log(millenial);
    }
    printAge();
    return age;
}

const firstName='Jonas';
calcAge(1991);

///////////////////////////////////////// Hoisting and TDZ in Practice

