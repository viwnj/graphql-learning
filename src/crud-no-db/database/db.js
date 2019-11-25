import fs from "fs";
import DBTable from "./dbTable";
import userSchema from "./userSchema";
import bookSchema from "./bookSchema";

class DB {
  constructor() {
    this.init();
  }

  init() {
    this.createTable("users", userSchema);
    this.createTable("books", bookSchema);
  }

  createTable(name, schema) {
    emitter.emit("write", { message: "some data" });

    this[name] = new DBTable(name, schema);
  }

  async writeOut() {}
}

export default new DB();
