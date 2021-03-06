import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import Customer from "../models/customer.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

userService.getById(1)

let customer = {id:1, firstName:"Engin"}

//prorotyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("--------------------")
userService.load()

let customerToAdd = new Customer(1, "Seda","Yılmaz","Ankara","25");
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.emplooyes)
console.log(userService.errors)
console.log(userService.getCustomersSorted())