// * a union b
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

let unioned = [...a, ...b];
console.log(unioned);

// * a intersection b
let intersected = a.filter((item) => b.includes(item));
console.log(intersected);

// * a differnce b

let differenced = a.filter((item) => !b.includes(item));
console.log(differenced);
