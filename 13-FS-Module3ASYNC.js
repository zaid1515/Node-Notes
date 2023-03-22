
const { ifError } = require('assert');
const { readFile, writeFile } = require('fs');
 
// Callback function is to be compulsorily passed in readFile function.
//the second argument is callback function always for readFile which ahs two parameters by-default first one being error and second the result of read operation .
// after reading the file from the given path the callback function is executed and thus we can print the result or store it in another variable.
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.error(err);
        return ;
    }
    // console.log(result);
    const first=result;
    readFile('./content/second.txt','utf8', function (err,result) {
        if(err){
            console.error(err); 
            return;
        }
        const second=result;
    
        writeFile('./content/result-async.txt', `Here is the result : ${first} , ${second} this one for async`,(err,result)=>{
            if (err) {
                console.error(err);
                return ;
            }
            console.log(result);
            console.log('done with the task');
            // undefined because we don't expect anything from writeFile in return
        });
    })
})

console.log('starting with new task');
// we will get content of buffer memory if utf8 encoding is not provided
