//CommonJS, every file is a module (by default)
//Modules = Encapsulated Code (only share mininum)

//import modules
const names = require("./4-names")
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)