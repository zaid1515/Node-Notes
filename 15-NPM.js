// Node Package Manager
/*
It is installed automatically along with node
Npm enables us to use reuse our own code in other projects,use other developer's code and also share our own code as well
NPM project is hosted at npmjs.com(here we can functions and frameworks e.g.react)


For this context:
Reusable Code===Package,dependencies,Modules
(Package is also referred to a folder)


We need to install packages to use them:
'npm' - global command
npm --version

We can install package in two ways
1.local dependency - use it only in this particular project
npm i <packageName>

2.global dependency - use it in any project
npm install -g <packageName>

package.json is also required which can be considered as a manifest file(stores immportant info about project/package)
3 ways to create package.json
1. manual approach (create package.json in root, create properties etc)
2.npm init (step by step press enter to skip )
3.init -y (everything default)

// Console after we type npm init :
            This utility will walk you through creating a package.json file.
            It only covers the most common items, and tries to guess sensible defaults.

            See `npm help init` for definitive documentation on these fields      
            and exactly what they do.

            Use `npm install <pkg>` afterwards to install a package and
            save it as a dependency in the package.json file.

            Press ^C at any time to quit.
            package name: (nodejstut) NodeJSlearning
            Sorry, name can no longer contain capital lettersSorry, name can no longer contain capital letters.
            package name: (nodejstut) nodejslearningversion: (1.0.0)
            description: command:                              
            git repository:                                  
            keywords:                                        
            author:                                          
            license: (ISC)                                   
            About to write to C:\Users\Mohd Abuzaid\Desktop\NodeJSTUT\package.json:

            {
              "name": "nodejslearning",
              "version": "1.0.0",
              "description":""
              "main": "1-intro.js",
              "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
              },
              "author": "",
              "license": "ISC"
            }

            Is this OK? (yes) yes


// everything is done by default by adding -y in our command(3rd way)

now i have downloaded the lodash and swiper(ssr-window package comes along with swiper) packages(external modules) by the local method 

a demonstration to use them is mentioned below
*/
const _=require('lodash')

const items=[1,[2,[3,[4,[5]]]]]
const newItems=_.flattenDeep(items)
// flattenDeep is method in lodash external module
console.log(newItems);
