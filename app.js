// npm - global command, comes with Node
// npm --v(ersion) - check version 

// local dependencies/modules/packages(same thing) - use it only in this particular project
// npm i <packageName>

// global dependencies - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init(step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash') //common way to name lodash

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); //method of lodash
console.log(newItems)

