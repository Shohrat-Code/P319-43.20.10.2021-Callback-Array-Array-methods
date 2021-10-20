
// function IsPassed(score, Passed, NotPassed) {
//     if (score > 536) {
//         Passed();
//     } else {
//         NotPassed();
//     }
// }

// function FuncForPass() {
//     console.log("Siz qebul olundunuz. Tebrik edirik!");
// }

// function FuncForNotPass() {
//     console.log("Siz imtahandan kecmediniz, gedin daha cox oxuyun!");
// }

// IsPassed(536, FuncForPass, FuncForNotPass);


// let ages = new Array();
// ages.push(25);
// ages.push(19);
// ages.push(29);
// ages.push(34);
// ages.push(12);
// ages.push(41);
// ages.push(29);

// ages.unshift(7);

// ages[15] = 62;

// console.log(ages.pop());
// console.log(ages.shift());
// console.log("------------------------------")
// for (let i = 0; i < ages.length; i++) {
//     console.log(ages[i]);
// }

// console.log(ages[12]);
// console.log(ages[15]);
// ages = ages.flat();
// console.log(ages.flat())

// console.log(ages.slice(2, 4));
// console.log(ages.splice(2, 3));
// console.log(ages);

// let newAges = ages.concat([37, 45], [54, 75, 24]);
// console.log(newAges);

// ages.forEach(function (age) {
//     console.log(age);
//     // console.log(index);
//     // console.log(array);
// });

// console.log(ages.indexOf(29, (ages.indexOf(29) + 1)));

// let result = ages.find(item => item > 15);
// let result = ages.findIndex(item => item == 15);

// let result = ages.filter(function (item) {
//     return item > 15;
// });

// let result = ages.filter(item => item > 15);

// console.log(ages);
// let newArr = ages.map(item => item > 30);
// console.log(newArr)

let ages = new Array();
ages.push(25);
ages.push(19);
ages.push(29);
ages.push(34);
ages.push(12);
ages.push(41);
ages.push(29);
ages.push(7);

// console.log(ages.sort((a, b) => b - a));
// console.log(ages.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return -1;
//     }
// }));

// let Name = "Abbas";
// let arr = Name.split("");
// console.log(arr.join(", "));
// console.log(ages.reverse());

// let sumOfAges = ages.reduce((sum, age) => sum += age, 10);

// console.log(sumOfAges);

let star = "*";

let range = +prompt("number:")

for (let i = 0; i < range; i++) {
    console.log(star);
    star += " *";
}