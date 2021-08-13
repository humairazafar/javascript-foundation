// // // let email = 'humairashahida@gmail.com'
// // // let result = email.replace('h', 'm')
// // // console.log(result)
// // let likes = 10;
// // //likes /=2;
// // //console.log(likes);

// // // let radius = 10;
// // // const pi = 3.14;
// // // let result = pi * radius**2;
// // // console.log(result);

// // //console.log(5*'hello')
// // let result = 'the blog has '  + likes +  ' likes';
// // console.log(result);

// const title = 'Best reads fo 2021'
// const author = 'Humaira';
// const likes = 30;

// // let result = 'the blog called ' +   title + '  by ' +   author + '  has ' +  likes + '  likes';
// // console.log(result);

// let result = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// let html = `
// <h2>${title}<h2>
// <p>By ${author}<p>
// <span>This blog has ${likes} likes<span>
// `;
// console.log(html)

// let alams = ['humaira', 'ayesha', 'aliya', 'ali', 'babar'];
// alams[0] = 'Meghna'
// console.log(alams[0]);

// let ages = [20,25,20,25];
// console.log(ages[1]);

// let random = ['shaun', 'humaira', 'aaliya', 30, 55];
// console.log(random)
// console.log(alams.length);

// let result = alams.join(',', 'and')

// let result = alams.push('bilal');
// result = alams.pop(); 

// console.log(result);

// console.log(true, false, 'true', 'false');

//methods can return Booleans
// let email = 'humairashahida@gmail.com'
// let names = ['aali', 'aashi', 'babar'];
// let result = email.includes('&');
// let result = names.includes('zafar');
// console.log(result);

//comparison operators

//let age = 25;

// console.log(age == 25);
// console.log(age == 45);
// console.log(age != 20);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 20);

// let name = 'humaira';

// console.log(name == 'humaira');
// console.log(name == 'Humaira');
// console.log(name > 'crystal');
// console.log(name > 'Humaira');
// console.log(name > 'Crystal')

// console.log(age!='25');
// console.log(age!=25);

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !==25);
// console.log(age !== '25');

//TYPE CONVERSION

// let score = '100'

// // score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello')

// let result = String(50);

// let result = Boolean(0);

// let result = Boolean('');
// console.log(result, typeof result);

//for Loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);

// }

// console.log('loop finished');
const alams = ['ali', 'aliya', 'ababr'];

for(i = 0; i < alams.length; i++){
    //console.log(alams[i]);
    let html = `<div>${alams}</div>`
    console.log(html);
}