//deconstructed way
const {readFileSync, writeFileSync} = require('fs')
// works identical like
//const fs = require('fs')
//fs.readFileSync
//fs.writeFileSync
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second)

writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag: 'a'}
)
//flag: 'a' = options object and 'a' stands for append
//means data written is appended to the end of the file you want to write in
console.log('done with this task');
console.log('starting the next one');