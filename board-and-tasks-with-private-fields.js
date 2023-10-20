const issueStatus = {
  RAISED: "Raised",
  IN_REVIEW: "In Review",
  RESOLVED: "Resolved",
};

const noteImportance = {
  LOW: "Low",
  AVERAGE: "Average",
  HIGH: "High",
};

const noteStatus = {
  CREATED: "Created",
  PENDING: "Pending",
  APPROVED: "Approved",
};

const taskStatus = {
  TODO: "Todo",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

/** The BoardItem class holds all relevant data and behavior an item might have. */
class BoardItem {
    /** Name of the item. */
    #name;
    /** Name of the status. */
    #status;

    constructor(name) {
        this.name = name;
    }

    /** Getting the item name. */
    get name() {
        return this.#name;
    }

    /** Setting the item name. */
    set name(value) {
        if (!value) {
            throw new Error('Name not provided!');
        }
        if (value.length < 6 || value.length > 30) {
            throw new Error('Name length not within constraints!');
        }
        this.#name = value;
    }

    /** Getting the item status. */
    get status() {
        return this.#status;
    }

    /** Setting the item status. */
    set status(value) {
        this.#status = value;
    }
}


class Task extends BoardItem {

    /** Date of the deadline. */
    #dueDate;
  
    constructor(name, dueDate) {
      super(name);
      this.dueDate = dueDate;
      this.reset();
    }
  
    /** Getting the task deadline. */
    get dueDate() {
      return this.#dueDate;
    }
  
    /** Setting the task deadline. */
    set dueDate(value) {
      if (!value) {
        throw new Error('Due date not provided!');
      }
      if (value.valueOf() < Date.now().valueOf()) {
        throw new Error('Can\'t set due date to a date in the past!');
      }
      this.#dueDate = value;
    }
  
    /** Sets the task status to TODO. */
    reset() {
      this.status = taskStatus.TODO;
    }
  
    /** Sets the task status to N_PROGRESS. */
    advance() {
      this.status = taskStatus.IN_PROGRESS;
    }
  
    /** Sets the task status to DONE. */
    complete() {
      this.status = taskStatus.DONE;
    }
  
    /** Transforms the task data into a formatted string */
    toString() {
      return `* Task *\n` +
        `Name: ${this.name}\n` +
        `Status: ${this.status}\n` +
        `Due: ${this.dueDate.toLocaleDateString()} ${this.dueDate.toLocaleTimeString()}`;
    }
  }

/** The Board class holds items */
class Board {
  #items;

  constructor() {
    this.#items = [];
  }

  /** Getting the board items. */
  get items() {
    return this.#items.slice();
  }

  /** Counting the board items. */
  get count() {
    return this.#items.length;
  }

  /** Adding item. */
  add(item) {
    if (!(item instanceof Task)) {
      throw new Error(
        "The provided value is not an objected created from the BoardItem class!"
      );
    }

    const itemIndex = this.#items.findIndex(
      (existingItem) => existingItem === item
    );

    if (itemIndex >= 0) {
      throw new Error("The provided item already exists in this board!");
    }

    this.#items.push(item);
  }

  /** Remove item. */
  remove(item) {
    const itemIndex = this.#items.findIndex(
      (existingItem) => existingItem === item
    );

    if (itemIndex < 0) {
      throw new Error("The provided task does not exist in this board!");
    }

    this.#items.splice(itemIndex, 1);
  }

  /** Transforms the board data into a formatted string. */
  toString() {
    const titles = "---Items Board---\n\nItems:\n\n";

    if (this.#items.length) {
      return titles + this.#items.join("\n--------\n");
    }

    return `${titles}No items at the moment.`;
  }
}

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

console.log('board.itemCount:', board.taskCount);