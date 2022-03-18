/**
 * Ben Awad - Typescript Generics Tutorial
 * @link https://www.youtube.com/watch?v=nViEqpgwxHE&t=1s
 */

const last = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
};

const t1 = last([1, 2, 3, 4, 5]);
const t2 = last([1, "2", "3", "4", "5"]);

type arrT = <T, Y>(x: T, y: Y) => (T | Y)[];

const makeArr: arrT = (x, y) => {
  return [x, y, x];
};

const v = makeArr(1, 3);
const v2 = makeArr(2, null);

// use name and last name as default param, but you are able to pass extra attributes

type UserType = {
  name: string;
  lastName: string;
};

const makeFullName = <T extends UserType>(obj: T) => {
  return {
    ...obj,
    fullName: `${obj.name} ${obj.lastName}`,
  };
};

const user = makeFullName({ name: "foo", lastName: "bar", age: 10 });
console.log(user);

// Genericts with interfaces

interface Tab<T> {
    id: string;
    position: number;
    data: T
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;