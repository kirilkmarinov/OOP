/** Enum for Task status values. */
const status = {
  TODO: 'Todo',
  IN_PROGRESS: 'In progress',
  DONE: 'Done'
};

/** The Board class holds tasks */
//export class Board {
class Board {
    /** Task */
    tasks;

    constructor() {
        this.tasks = [];
    }

    /** Method that add new task, only if the task does not exist */
    add(task) {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        } else {
            throw new Error('The task allready exists');
        }
    }

    /** Method that remove task */
    remove(task) {
        const index = this.tasks.findIndex(i => i === task)
        if (index !== -1) {
            this.tasks.splice(index, 1);
        } else {
            throw new Error('The task does not exist');
        }
    }

    /** Method that convert the task in a string */
    toString() {
        if (this.tasks.length === 0) {
            return `No tasks at the moment.`;
        } else {
            const result = this.tasks.map(task => {
                return `Name: ${task.name}\nStatus: ${task.status}\nDue: ${task.dueDate}`;

            }).join('\n--------\n');
            return `--- Task Board-- -\n\nTasks: \n\n${result}`;
        }
    }
}

/** Task Class */
class Task {
    /** Name of the task */
    name;
    /** Date of the deadline */
    dueDate;
    /** Status of the task */
    status;
  
    constructor(name, dueDate, status) {
      this.changeName(name);
      this.changeDueDate(dueDate);
      this.reset();
    }
  
    /** Method that set the name of the task, only if the task is valid */
    changeName(value) {
      if ((value.length >= 6 && value.length <= 30)
        && (value !== null) && (value !== undefined)
        && (value !== '')) {
        this.name = value;
      } else {
        throw new Error('Invalid name');
      }
    }
  
    /** Method that change the deadline */
    changeDueDate(value) {
      if (value > new Date() || value.toLocaleDateString() === new Date().toLocaleDateString()) {
        this.dueDate = value.toLocaleDateString();
      }
      else {
        throw new Error('Invalid date');
      }
    }
  
    /** Method that set the status to 'Todo' */
    reset() {
      this.status = 'Todo';
    }
  
    /** Method that set the status to 'In progress' */
    advance() {
      this.status = 'In progress';
    }
  
    /** Method that set the status to 'Done' */
    complete() {
  
      this.status = 'Done';
    }
  
    /** Method that convert the task in a string */
    toString() {
      return `Name: ${this.name}\nStatus: ${this.status}\nDue: ${this.dueDate}`;
    }
  }


// Test your code here
// const newline = () => console.log("\n \x1b[35m* * * * *\x1b[37m \n");
const newline = () => console.log("\n * * * * * \n");

const board = new Board();

const task1 = new Task('Task 1 - go hiking', new Date('2029/09/03'));
const task2 = new Task('Task 2 - return home', new Date('2029/09/04'));
const task3 = new Task('Task 3 - watch some movies', new Date('2029/09/05'));

console.log(board.toString());

newline();

board.add(task1);
board.add(task2);
board.add(task3);

task1.advance();
task2.complete();

console.log(board.toString());

newline();

board.remove(task3);

console.log(task1.toString());

newline();

console.log(`Total tasks written on the board: ${board.tasks.length}`);