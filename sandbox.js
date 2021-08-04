// // let email = 'humairashahida@gmail.com'
// // let result = email.replace('h', 'm')
// // console.log(result)
// let likes = 10;
// //likes /=2;
// //console.log(likes);

// // let radius = 10;
// // const pi = 3.14;
// // let result = pi * radius**2;
// // console.log(result);

// //console.log(5*'hello')
// let result = 'the blog has '  + likes +  ' likes';
// console.log(result);

const title = 'Best reads fo 2021'
const author = 'Humaira';
const likes = 30;

// let result = 'the blog called ' +   title + '  by ' +   author + '  has ' +  likes + '  likes';
// console.log(result);

let result = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

let html = `
<h2>${title}<h2>
<p>By ${author}<p>
<span>This blog has ${likes} likes<span>
`;
console.log(html)