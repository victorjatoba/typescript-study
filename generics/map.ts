let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["foo", "bar", "baz"];

interface User {
  name: string;
  age: number;
}

let incrementedArray = arr1.map<User>((n) => {
  return {
    name: "foo",
    age: n + 1,
  };
});

console.log(incrementedArray);
