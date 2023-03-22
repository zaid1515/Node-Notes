//GLOBALS - NO WINDOW 
// you can access global variables anywhere in your application no matter how complex or nested the application gets
//there are more global variables than mentioned below

// __dirname - path to current directory
// __filename - filename
// require   - function to use modules (CommonJS)
// module    - info about current module (file)
// processv  - info about environment where teh program is being executed

console.log("Path to current directory "+__dirname);
// console.log("Filename "+__filename);
// console.log("function to use modules "+require);
// console.log("current module info "+module);
// console.log("Environment ");
// console.log(process);

// setInterval setTimeout both are similar to Vanilla Javascript
const a=0;
setInterval(() => {
    console.log("Hello World!")
}, 1000);