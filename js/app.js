function sayHello(){ //VOID funtion, it doesnt bring back anything, this isnt c++ where a voic function does give back stuff, different coding languages bro
    console.log("hello"); // ^^ define function
}

sayHello(); // call funciton

/*function sum(a,b,c){
    console.log(`Suma:  ${a+b+c}`);
}


const sum=function(a, b){
    if(a>b){
        return; // exit
    }
    console.log(`Suma: ${a+b}`);
}

sum(50,56);
let bgrThn60=0;
const sum=(...numbers)=>{ //spread operator "..."
    let i=0;
    if(numbers.length==0){
        return console.log("no numbers")    ;
    }
    for(let key in numbers){
        if(numbers[key]>60){
            i++;
            bgrThn60+=numbers[key];
        }
    }
    return console.log(`Suma visu skaiciu, didesniu negu 60: ${bgrThn60}, ir kiek tu skaiciu yra: ${i}`);
}

sum(1,65,7543,784,3234);

// savarankiskas 1.
const MtK = 1.609;
function toMilesPerHour(kilometersPerHour){
    if (kilometersPerHour<0){
        return -1;
    }
    return Math.round(kilometersPerHour/MtK);
}

console.log(toMilesPerHour(10.25));

// savaranksikas 2.

function printConverstion(kilometersPerHour){
    if (kilometersPerHour<0){
        console.log("Invalid value");
    }
    console.log(`${kilometersPerHour} km/h = ${Math.round(kilometersPerHour/MtK)} mi/h`);
}

printConverstion(10.25);

// savarankiskas 3.

 function more20(number){
    if (number<0){
        return "Give another number, no negatives";
    }
    if (number%20!=0){
        return true;
    }else{
        return false;
    }
 }

 console.log(more20(41));

 // savarankiskas 4.

 function minCat(word1, word2){
    if(word1.length==0 || word2.length==0){
        return "invalid words!"
    }
    let w1length=word1.length;
    let w2length=word2.length;
    if(w1length>w2length){
        w1length=w1length-w2length;
        console.log(word1.slice(w1length).concat(word2));
    }else if (w2length>w1length){
        w2length=w2length-w1length;
        console.log(word1.concat(word2.slice(w2length)));
    }else{
        console.log(word1.concat(word2));
    }

 }

 minCat("hello", "java");*/ //DID ALL OF THEM RAHHHHHH IM TOO GOOD

 (()=>{  //self invocked function, in case of a variable name is being used in a library, do this
    function returndata(number){
        let items="Alytus, Vilnius, Kaunas, Palanga";
        let data =[12,45,67];

        console.log(`Array before: ${data}`);

        data.push(number); // ".push(number that we want to add)"" adds a number to the end of an array
        console.log(`Array after: ${data}`);

        data.pop(); // ".pop()" removes the last number in the array
        console.log(`Array in the end: ${data}`);

        data.shift(); // ".shift()" removes the first number in the array
        console.log(`Array after the end: ${data}`);

        data.unshift(number); // ".unshift(number we want to add)" adds a number to the start of the array
        console.log(`Array after after the end: ${data}`);

        console.log(`Masyvo ilgis: ${data.length}`);

        console.log(items.split(",")); // ".split(variable)" allows to split a string of text into sub-strings depending on the variable

        items=items.split(", ");
        items= items.join(":..."); // ".join(variable)" allows to to join an array together with a seporator, which is the variable
        console.log(items);

        let usersStudents = ["Algirdas", "Tomas", "Irmantas"];
        let usersTeachers = ["Inga", "Robertas", "Domas"];
        let allNames = usersStudents.concat(usersTeachers); // ".concat(array/text)" allows you to add an array/text to another array/text
        console.log(allNames);
        
        // forEach

        usersTeachers.forEach(firstname=> console.log(`Darbuotojo vardas: ${firstname}`)); //".forEach" Takes each individual array element and does what the function needs, works like a function

        
        
    }
    returndata(123);

 })();

