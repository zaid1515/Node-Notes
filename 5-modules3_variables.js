//local-(which we don't want ot share)
const secret=`I won't reveal it to you`
//share
const john='John';
const harry='Harry';


console.log(module);
/*output of the above line:-
PS C:\Users\Mohd Abuzaid\desktop\NodeJSTUT> node 5-modules3_variables
Module {
  id: '.',
  path: 'C:\\Users\\Mohd Abuzaid\\desktop\\NodeJSTUT',
  exports: {},
  filename: 'C:\\Users\\Mohd Abuzaid\\desktop\\NodeJSTUT\\5-modules3_variables.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\Mohd Abuzaid\\desktop\\NodeJSTUT\\node_modules',
    'C:\\Users\\Mohd Abuzaid\\desktop\\node_modules',
    'C:\\Users\\Mohd Abuzaid\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
*/
// Above here exports is the object which tells or containes that which variables or functions or whatever we want to share 
// we will add the variables to be shared in the module.exports
//here module is a global 

module.exports={john,harry};
console.log('Variables exported successfully');
//now we can access the var john and harry in any of the files as of now we will use in the file 3 using the global require() 


// 3-4-5-6-7 all files will run from file 3 only