const UserName = ["sagor", "tokir", "sahin", "raju", "abir"];

// push
/* UserName.push(120);
console.log("afer 120 push", UserName); */

// pop
/* UserName.pop();
console.log("after pop", UserName); */

// delete for testing

/* delete UserName[1];
console.log("delete an index", UserName); */

// array splice method

/* UserName.splice(3, 1);

console.log("user splice", UserName);

UserName.splice(1, 2, "Hridoy");
console.log("add new element", UserName); */

// array slice
/* let arr = ["t", "e", "s", "t"];

const slicenumber = arr.slice(1, 2);
console.log("slicenumber", slicenumber); */

// 1. Write a JavaScript function to check whether an `input` is an array or not.

function checkArrayOrNot(Age) {

    let checkArray = Array.isArray(Age);
    if (checkArray) {
        console.log(true);
    } else {
        console.log(false);
    }

};

const Age = [10, 20, 25, 36, 40];
checkArrayOrNot(("This is not array"));

