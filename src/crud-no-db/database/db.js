import DBTable from "./dbTable";

class DB {
  constructor() {
    this.init();
  }

  init() {
    this.users = new DBTable("users"); // TODO: Load users
    this.books = new DBTable("books"); // TODO: Load books
  }

  findAll(table) {
    return Object.values(this[table].entries);
  }
}

export default new DB();
