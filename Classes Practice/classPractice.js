class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.grade = grade

    }
    introduce(){
        console.log(`${this.firstName} ${this.lastName}'s jersey number is ${this.phoneNumber}`)
    }
}

let student1 = new Student ('Michael', 'Jordan', '23','A+')
let student2 = new Student ('Kobe','Bryant', '24', 'A')
let student3 = new Student ('Lebron', 'James', '6', 'A-')

student1.introduce()
student2.introduce()
student3.introduce()