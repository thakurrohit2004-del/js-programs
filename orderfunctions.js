// // high order functions in js

// // forEach()

// // it is used to iterate over the elements of an array
// // arrayname.forEach(function)

// const num = [1, 2, 3, 4, 5, 6, 7];

// num.forEach(square)

// function square(element) {
//     console.log(Math.pow(element, 2));
// }

// function cube(element) {
//     console.log(Math.pow(element, 3));
// }
// function display(element) {
//  console.log(element);
// }



// // map()

// // const num = [1, 2, 3, 4, 5, 6, 7];

// //     const cubeNum = num.map(function (element) {
// //                  return Math.pow(element, 3)
// // })



             
// // console.log(cubeNum);


// const vegetable = ["potato", "onion", "spinach", "tomatoes"]

// const longWords = vegetable.map(function (element) {
//     return element.length >= 6
// })
// console.log(longWords);


// // filter();

// const num = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12];

// // const Even = num.filter(function (element, index, array) {
// //    return array[index] = element % 2 === 0
// // })

// const Odd = num.filter(function (element, index, array) {
//    return array[index] = element % 2 !== 0
// })


// // console.log(Even);
// console.log(Odd);

// const ages = [12, 14, 56, 65, 78, 23, 32, 12, 10, 9, 8, 7]

// const adults = ages.filter(function (element) {
//     return element >= 18
// })

// const childrens = ages.filter(function (element) {
//     return element <= 18
// })

// console.log(childrens);

// // reduce()

// const bill = [234, 999, 899, 123, 432];

// const total = bill.reduce(function (prev, element) {
//     return prev + element
// })

// const max = bill.reduce(function (prev, element) {
//     return Math.min(prev, element)
// })

// console.log(max);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

num.forEach(cube)

function square(element) {
    console.log(Math.pow(element, 2));   
}
function cube(element) {
    console.log(Math.pow(element, 3));
    
}
// Map

let vegetables = ["Potato", "Onion", "Spinach", "Cauliflower"]
let longWords = vegetables.map(function (element) {
    return element.length >= 6;
})
console.log(longWords);

//  Filter
const nums = [1,2,3,4,5,6,7,8,9,10,11];

let even = nums.filter(function (element,index,array) {
    return array[index] = element % 2 == 0;
}
)
console.log(even);

const ages = [15,84,18, 14,81,26,65,56,48,5,82,84]
 let adults = ages.filter(function (element) {
    return element >= 18
 })

 let childrens = ages.filter(function(element){
    return element <=18;
 })
 console.log(adults);
 console.log(childrens);
//  Reduce

const bill = [499,599,699,799,899];
let total = bill.reduce(function (max, element){
    return max + element;
})

let max = bill.reduce(function (prev, element){
    return Math.min(prev, element)
})

console.log(total);
console.log(max);


