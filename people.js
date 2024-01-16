
// /** The Board class holds tasks */
// class Board {
//     /** Task */
//     tasks;

//     constructor() {
//         this.tasks = [];
//     }

//     /** Method that add new task, only if the task does not exist */
//     add(task) {
//         if (!this.tasks.includes(task)) {
//             this.tasks.push(task);
//         } else {
//             throw new Error('The task allready exists');
//         }
//     }

//     /** Method that remove task */
//     remove(task) {
//         const index = this.tasks.findIndex(i => i === task)
//         if (index !== -1) {
//             this.tasks.splice(index, 1);
//         } else {
//             throw new Error('The task does not exist');
//         }
//     }

//     /** Method that convert the task in a string */
//     toString() {
//         if (this.tasks.length === 0) {
//             return `No tasks at the moment.`;
//         } else {
//             const result = this.tasks.map(task => {
//                 return `Name: ${task.name}\nStatus: ${task.status}\nDue: ${task.dueDate}`;

//             }).join('\n--------\n');
//             return `--- Task Board-- -\n\nTasks: \n\n${result}`;
//         }
//     }
// }

/** Person Class */
class Person {
    /** Name of the person */
    name;
    /** Date of birth */
    birthDate;
    /** Type of gender */
    gender;

    constructor(name, birthDate, gender) {
        this.changeName(name);
        this.changeBirthDate(birthDate);
        this.changeGender(gender);
    }

    /** Method that set the name of the person, only if it is valid */
    changeName(value) {
        if ((value.length >= 2 && value.length <= 15)
            && (value !== null) && (value !== undefined)
            && (value !== '')) {
            this.name = value;
        } else {
            throw new Error('Invalid person name');
        }
    }

    /** Method that change the birth date */
    changeBirthDate(value) {
        this.birthDate = value;
    }

    /** Method that change the gender */
    changeGender(value) {
        this.gender = value;
    }
}

// Testing:
const newline = () => console.log("\n * * * * * \n");
// const board = new Board();
const person1 = new Person('Kiril Marinov', '25.11.1982', 'male');
console.log(person1);
person1.changeName('fff');
person1.changeBirthDate('fff');
person1.changeGender('fff');
console.log(person1);