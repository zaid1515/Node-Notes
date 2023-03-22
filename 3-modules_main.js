//Modules
//IMP - CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
// CommonJS- CommonJS is a set of standards used to implement modules on JavaScript
// mainly used in server-side JS apps with Node, as browsers don't support the use of CommonJS

//one file will be executed in actual but the code wil be splitted into modules




// const sayHI=(name)=>{
    // console.log('Hello '+name)
// };
// const john='John';
// const harry='Harry';
// const secret=`I won't reveal it to you`

// Declare the variables in the file 6 and the sayHi function in file 5 and export the variables and function from their using modules.export


//by writing the below line we include all the vars funcs,etc exported from the mentioned file (file 5 here)
//now when i will execute this file the console.log lines in the file 5 will be printed here as well
const names=require('./5-modules3_variables');
// always include ./ (dot and slash when including any module(file)  or in general any file)
//depending on the levels of modules we use .. ... and so on
// because there are going to be third-party modules as well as built-in modules in node


//names will return an array which is exports array in the module. where we include the vars john and harry
console.log(names);

const sayHI=require('./4-modules2_func');
//here the sayHi function is imported from file 4 and it works in below calls

//here we will get an object which includes array as well as object in it
const data=require('./6-modules4_alternatSyntax')
// console.log(data);
// sayHI('Mike');
// sayHI(names.john);
// sayHI(names.harry);

require('./7-Mind-grenade');
// here we are not assigning it to any other variable still it will be executed because the function is invoked in the imported file


// 3-4-5-6-7 all files will run from file 3 only4