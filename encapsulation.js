

let student1 = {
	id: 12,
	name: "Isaac",
	marks: 81
}



let student2 = {
	id: 12,
	name: "Isaac",
	marks: 81
}
console.log(student.name) // Prints Isaac
console.log(student.id) // Prints 12
console.log(student.marks) // Prints 81



let student3 = {
	id: 12,
	name: "Isaac",
	marks: 81
}
student.marks = 91
console.log(student)

/* The above code prints {id: 12, name: 'Isaac', marks: 91} to the console. Everything looks fine until we try to run the following code. */

let student = {
	id: 12,
	name: "Isaac",
	marks: 81
}
student.marks = "Ninty One"
console.log(student)