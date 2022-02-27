"use strict";
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["foo", "bar", "baz"];
let incrementedArray = arr1.map((n) => {
    return {
        name: "foo",
        age: n + 1,
    };
});
console.log(incrementedArray);
