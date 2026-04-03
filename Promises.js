// to convert asynchronous code into synchronous codes:
// callback
// Promise

function func1() {
    return new Promise((resolve, reject) => {
   setTimeout(()=> {
        const task1 = true;
        if (task1) {
            resolve("Task 1 is completed")
        } else {
            reject("Task 1 is not completed")
        }
    }, 2000)
    })
}

function func2() {
    return new Promise(function(res, rej) {
            setTimeout(()=> {
         const task2 = true;
        if (task2) {
            res("Task 2 is completed")
        } else {
            rej("Task 2 is not completed")
        }
    }, 1000)

    })
}

function func3() {
    return new Promise(function(res, rej) {
    setTimeout(()=> {
        const task3 = true;
        if (task3) {
            res("Task 3 is completed")
        } else {
            rej("Task 3 is not completed")
        }
    }, 1000)
    })
}
function func4() {
    return new Promise((res,rej) => {
  setTimeout(()=> {
         const task4 = true;
        if (task4) {
            res("Task 4 is completed")
        } else {
            rej("Task 4 is not completed")
        }   
    }, 1000)
    })
}

function func5() {
    return new Promise((res,rej) => {
        setTimeout(() => {
            let task5 = true;
            if(task5) {
                res("Task 5 is completed")
            }
            else {
                rej("Task 5 is not completed")  
            }
        })
    })
}

function func6() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const task6 = true;
            if(task6) {
                res("Task 6 is completed")
            }
            else {
                rej("Task 6 is not completed")
            }
        }, 1000);
    })
}

// callback hell
// Method Chaininig

// func1().then(value => {console.log(value);  return func2()})
//        .then(value => {console.log(value);  return func3()})
//        .then(value => {console.log(value); return func4()})
//        .then(value => {console.log(value); return func5()})
//        .then(value => {console.log(value); return func6()})
//        .then(value => {console.log(value); console.log("All tasks are completed"); })
//        .catch(err => console.error(err))

       // ASYNC AND AWAIT FUNCTIONS IS JS
       // ASYNC => IT MAKES A FUNCTION RETURN A PROMISE OR ASYNCHRONOUS CODE
       // AWAIT => IT MAKES A ASYNCHRONOUS FUNCTION WAIT FOR THE PROMISE TO EITHER RESOLVE OR REJECT

async function allTasks() {
         const task1 =  await func1()  // asynchronous code 
         console.log(task1);  // synchronous code

         const task2 = await func2()
         console.log(task2);

         const task3 = await func3()
         console.log(task3);

         const task4 = await func4()
         console.log(task4);
         
        console.log("All tasks are completed");
}

// allTasks()


// JSON
// json => javascript object notation
// it is commonly used to send and receive the data through the servers
// {}, [], [{}, {}, {}]

const names = `["aman", "raman", "vansh"]`
const person = `{
    "name": "aman",
    "age": 22,
    "isStudent": true
}`

const people = `[
    {
    "name": "aman",
    "age": 22,
    "isStudent": true
},
{
    "name": "aman",
    "age": 22,
    "isStudent": true
},
{
    "name": "aman",
    "age": 22,
    "isStudent": true
},
{
    "name": "aman",
    "age": 22,
    "isStudent": true
}
]`

// string to json => JSON.parse()
let nameJson = JSON.parse(names)
console.log((nameJson));

// console.log(names);
// console.log(people);
// console.log(person);

// json to string => string functions 
// JSON.stringify()


fetch("https://fakestoreapi.com/products/1").then(value => value.json())
.then((data) => console.log(data.description))