// //function declaration

// function hello() {
//     console.log("Hello");
// }

// hello()

// // functions expresssions

// const hello2 = function() {
//     console.log("Hello 2");
// }
// hello2()

// // Arrow functions

// const hello3 = (age) => {  // parameters
//     console.log("hello " + age);
// }

// hello3(hello2)  // argument

let id = (age) => {
    console.log("Age " + age);
}
id(22)

// hello2()  // function  calling
// hello2 // function pass



// call back is used to pass one function in another function as an argument

// function func1() {
    
// }

    
// synchronous code
// console.log("Task 1");
// console.log("Task 2");

// setTimeout(() => {
//     console.log("Task 3");
// }, 2000); // asynchronous codes
/// it is used to establish a connection, reading a file, fetching or posting data on the server, third party dependence
// callbacks in js
// Promises in js
// Async and await
// axios
// http request
// fetch()
// console.log("Task 4");

// console.log("Task 1");
// console.log("Task 2");
// setTimeout(() => {
//     console.log("Task 3");
//     } , 2000 );
// console.log("Task 4");


// function func1(callback) {
//     setTimeout(() => {
//    console.log("Task 1 is completed");
//     callback()
//     }, 1000)
// }

// function func2(callback) {
//     setTimeout(() => {
//    console.log("Task 2 is completed");
//     callback()
//     }, 1500)
// }

// function func3(callback) {
//     setTimeout(() => {
//    console.log("Task 3 is completed");
//     callback()
//     }, 1000)
// }

// function func4(callback) {
//     setTimeout(() => {
//    console.log("Task 4 is completed");
//     callback()
//     }, 500)
// }


// func1(function () {
//     func2(() => {
//         func3(() => {
//             func4(() => {
//                 console.log("All tasks are completed");
//             })
//         })
//     })
// })
// callback hell

function func1(callback) {
    setTimeout(() => {
        console.log("Cars Names :");
        callback()
    }, 1000);
};
function func2(callback) {
    setTimeout(() => {
        console.log("Porsche");
        callback()
    }, 1000);
}
function func3(callback) {
    setTimeout(() => {
        console.log("BMW");
        callback()
    }, 1000);
}
function func4(callback) {
    setTimeout(() => {
        console.log("Fortuner");
        callback()
    }, 1000);
}
function func5(callback) {
    setTimeout(() => {
        console.log("Scorpio");
        callback()
    }, 1000);
}
function func6(callback) {
    setTimeout(() => {
        console.log("Ford");
        callback()
    }, 1000);
};

 func1(() => {
    func2(() => {
        func3(() => {
            func4(() => {
                func5(() => {
                    func6(() => {
                        console.log("Cars names is done !");
                        
                    })
                })
            })
        })
    })
})