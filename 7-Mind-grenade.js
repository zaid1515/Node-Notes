//something different about module

const a=10;
const b=12;

function add() {
    console.log(`The sum is : ${a+b} `);
}

add();

//here we are not doing modules.export and all
// so if we invoke a function in a module it will be executed in the main program with out explictily executing

console.log(module)

// 3-4-5-6-7 all files will run from file 3 only