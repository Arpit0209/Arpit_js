// let x = "a"
// let y = x
//  y = "b"


// console.log(x);
// console.log(y);

const a = [

    {name: "arpit"},
   { name: "chouksey"
}

]
const b = [...a]

b[0] = {name: "vaibhav"};
b[1].age = 30;

console.log(a);
console.log(b);


//////////////////////////////////

// const a = [1, 2, 3]
// const b = a
// b.push(4)
// console.log(a)

// const a = [1, 2, 3]
// const b = [...a]
// b.push(4)
// console.log(a)

