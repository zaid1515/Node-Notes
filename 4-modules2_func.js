const sayHi=(name)=>{
    console.log('Hello '+name)
};


module.exports=sayHi;
//Output for above line
//  exports: [Function: sayHi],

//below two lines work as same thing where we give object attribute (the function ) a name
// module.exports={sayHi};
// module.exports.sayHI=sayHi;
//Output of above two lines
// exports: { sayHi: [Function: sayHi], sayHI: [Function: sayHi] },
// including curly braces allocates name sayHi to the attribute of object which is a function
// Output when curly braces included
// exports: { sayHi: [Function: sayHi] }

console.log(module);
//output for console.log()



// 3-4-5-6-7 all files will run from file 3 only