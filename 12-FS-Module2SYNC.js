// FileSystem - can be done asynchronously (non-blocking)  as well as synchronously(blocking)

// non-blocking approach is always better one


// const {readFileSync} =require('fs');
// above line can be also written as

// const fs=require('fs');
// fs.readFileSync();

// read,write,append are same as normal

// readFileSync - reads the content of the file synchronously
// writeFileSync - writes data to a file  synchronously
//here 'Sync' refers to synchronous approach
const { readFileSync, writeFileSync } = require('fs');

// readFileSync(path: PathOrFileDescriptor, options?: { encoding?: null | undefined; flag?: string | undefined;
// } 
//utf8 is character encoding which is optional and can be replaced by a function also 
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

const s1 = `this is a sample string just for having fun`;
console.log(first);
console.log(second);

// creating(obviously if the file doesn't exist) a file by writeFileSync
writeFileSync('./content/result-sync.txt', `Here is the result : ${first} , ${second}, ${s1}`, { flag: 'a' });
//by adding flag value a as shown above the content will be appended and not overwritten
console.log('Done with this task');
console.log('Starting with the next one');
// these two can't be printed until the write operation is completed

// offload the async task and start the next task right away. 


// alternatively the above callback thing can be done using promises and async-await