////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

let result = 12*8;   
console.log(result);

// 2.Divide 10 by 2 add result to variables x, and console x:

let number = 10/2
let x = number
console.log(number);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

let num1 = 20 
let num2 = 17 
console.log(num1+num2);

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

  let name = 'Xeyal'
  let surName = 'Imanov'
    let year = 2003
let info = name +' '+ surName+' '+ year
console.log(info);

// 5.Console the remainder(%) when 17 is divided by 12.

let bolme = 17 % 12;
console.log(bolme);

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.


let cityName = 'Baku'
console.log(cityName);
  
    cityName ='Gence'
    console.log(cityName);

////// TASK 2 //////////////

let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log(c); // 2
console.log(d); // 1
console.log(b); // 2

////////////// TASK 3 //////////////

let a1 = 2;
let x1 = 1 + (a *= 2);
console.log(x); // 5


////////////// TASK 4 //////////////

console.log('test1', test); // undefined
{
    let test = "something"
    console.log('test2', test); // something
}
console.log('test3', test);  // undefined


console.log('test1', test);  // undefined
{
    var test = "something"
    console.log('test2', test); // something
}
console.log('test3', test); // something


////////////// TASK 5 //////////////

//Find the type of all the following cases

let name1 = "xeyal"  //string
//let surname = Zakirli           //Zakirli bir deyisendir . Deyer olmadigina gore error verecek
let year1 = 2000   //number 
year = "2000" //string
let city;  //undefined
let qualification = null  //object
let obj = { name: 'ulfat' } //object
let arr = ['a', 'b', 'c'] //array

////////////// TASK 6 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"


const object1 = {
    email: 'khayalai@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 23',
            education: {
                "uni name": "BDU",
            }
        }
    }
}

// 3.Console gender

console.log(object1.info.gender);

// 4.Console city

console.log(object1.info.loc.city);

// 5.Delete street 

delete object1.street

// 6.Delete email, then add email inside the 'info'

delete object1.email
object1.email = {email: 'khayalai@gmail.com'}

// 7.Change uni name to 'BDU'

object1.info.loc.education["uni name"]= 'BDU'

// 8.Add degree:'bachelor' to education

object1.info.loc.education['degree'] = "bachelor"
console.log(object1.info.loc.education["degree"]);

// 9.Change street 'Nizami 23'
object1.info.loc.city = 'Nazim Ismayilov'
// 10.Find length of 'obj' (length property doesnt work with object, find another way)
let length = Object.keys(object1).length;
console.log(length);

///////////////////////////

console.log(object1);