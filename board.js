/** The Board class holds tasks */
export class Board {
    /** Task */
    _tasks;

    constructor() {
        this._tasks = [];
    }

    /** Method that add new task, only if the task does not exist */
    add(task) {
        if (!this._tasks.includes(task)) {
            this._tasks.push(task);
        } else {
            throw new Error('The task allready exists');
        }
    }

    /** Method that remove task */
    remove(task) {
        const index = this._tasks.findIndex(i => i === task)
        if (index !== -1) {
            this._tasks.splice(index, 1);
        } else {
            throw new Error('The task does not exist');
        }
    }

    /** Method that convert the task in a string */
    toString() {
        if (this._tasks.length === 0) {
            return `No tasks at the moment.`;
        } else {
            const result = this._tasks.map(task => {
                return `Name: ${task._name}\nStatus: ${task._status}\nDue: ${task._dueDate}`;

            }).join('\n--------\n');
            return `--- Task Board-- -\n\nTasks: \n\n${result}`;
        }
    }
}