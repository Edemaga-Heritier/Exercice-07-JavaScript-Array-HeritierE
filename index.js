// Don't remove this lines
console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function() {
  console.logs.push(Array.from(arguments).join(" "));
  console.stdlog.apply(console, arguments);
}

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
// 2. Check the current length of the array
console.log(secretMessage.length);

// 3. Add the words "to" and "Program" as separate strings to the end of the array
secretMessage.push('to', 'Program');


// 4. Change the word "easily" to "right"
let index = secretMessage.indexOf('easily');
secretMessage.splice(index, 1, 'right')

// 5. Remove the first string from the array
secretMessage.shift();

// 6. Add the string "Programming" to beginning of array
secretMessage.unshift('Programming');

// 7. Remove specific strings and replace them with single string "know,"
secretMessage.splice(secretMessage.indexOf('get'), 5, "know")
//8.Printing out Secret Message as a sentence using console.log() and .join()
console.log(secretMessage.join(" ", ","))
// Your code here 




// Don't remove this line 
module.exports = { secretMessage }
