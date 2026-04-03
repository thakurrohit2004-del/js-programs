// to convert asynchronous code into synchronous codes:
// callback
// Promise

function func1() {
    return new Promise(function(res, rej) {
        setTimeout(()=> {
            let task1 = true;
            if (task1) {
                res("Piyush sir told java class is tomorrow")
            }
            else {
                rej("Piyush sir didn't came he cheated !!")
            }
        }, 2000)
    })
}

function func2() {
    return new Promise(function(res, rej) {
            setTimeout(()=> {
         const task2 = true;
        if (task2) {
            res("Class timing is 4:00 PM")
        } else {
            rej("Task 2 is not completed")
        }
    }, 2000)

    })
}

function func3() {
    return new Promise(function(res, rej) {
    setTimeout(()=> {
        const task3 = true;
        if (task3) {
            res("This class is mandatory to all")
        } else {
            rej("Task 3 is not completed")
        }
    }, 2000)
    })
}
function func4() {
    return new Promise((res,rej) => {
  setTimeout(()=> {
         const task4 = true;
        if (task4) {
            res("Topic is functions")
        } else {
            rej("Task 4 is not completed")
        }   
    }, 2000)
    })
}

function func5() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let task5 = true;
            if(task5) {
                res(func1,rej)
            }
            rej("Task 5 is not done")
        }, 1000);
    })
}

// callback hell
// Method Chaininig

func1().then(value => {console.log(value);  return func2()})
       .then(value => {console.log(value);  return func3()})
       .then(value => {console.log(value); return func4()})
       .then(value => {console.log(value); return func5() 
        .then(value => console.log(value));  console.log("Class Khatam!"); })
       .catch(err => console.error(err))