//c
let petNames = ['Darcy','Jack','Jerry','Marty','Vito','Vinny','Riley','Saddie','Marge','Sam']
 //d
let withSal = petNames
withSal = petNames
withSal.push("sal")
//e
console.log(withSal)
 //f question asks for "petsArray" (assumed "withSal" array)
console.log(`The third pet is named ${withSal[2]}.`)
//g
console.log(`The array has ${withSal.length} names in it.`)
//h
withSal.pop(10)
console.log(withSal)
