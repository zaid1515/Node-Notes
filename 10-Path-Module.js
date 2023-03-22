// Path Modules - allows to interact with file paths easily

// The syntax for including the Path module in your application:
// var path = require('path');

// Method	        Description
// basename()	    Returns the last part of a path
// delimiter	    Returns the delimiter specified for the platform
// dirname()	    Returns the directories of a path
// extname()	    Returns the file extension of a path
// format()	        Formats a path object into a path string
// isAbsolute()	    Returns true if a path is an absolute path, otherwise false
// join()	        Joins the specified paths into one
// normalize()	    Normalizes the specified path
// parse()	        Formats a path string into a path object
// posix	        Returns an object containing POSIX specific properties and methods
// relative()	    Returns the relative path from one specified path to another specified path
// resolve()	    Resolves the specified paths into an absolute path
// sep	            Returns the segment separator specified for the platform
// win32	        Returns an object containing Windows specific properties and methods


// The syntax for including the Path module in your application:
const { basename } = require('path');
const path=require('path');

// console.log(path);

//returns platform specific separator
console.log(path.sep);

//joins a sequence of path segement using platform specific separator(/) as the limiter and returns a normalized resulting path 
//strings are passed inside the join() methods which are to be joined

const filePath=path.join('/content/','subfolder','text.txt');
// extra forward slashes are removed
console.log(filePath);

// .basename() method return the last part of the given path
const base=path.basename(filePath);
console.log(base);

// .resolve() accepts a sequence of path and resolves them into absolute path

// used as the application will run in different environmet and hence path to a resource will be different machines
const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);