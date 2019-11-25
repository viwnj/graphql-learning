import TableEntry from "./tableEntry";

class DBTable {
  constructor(name, schema) {
    this.init(name, schema);
  }

  init(name, schema) {
    this.name = name;
    this.schema = schema;
    this.entries = {};

    this.create = async tableConstructor => {
      try {
        await schema.validate(tableConstructor);
        const id = Object.keys(this.entries).length + 1;
        this.entries[id] = new TableEntry({ ...tableConstructor, id });
        return {
          ...this.entries[id]
        };
      } catch (e) {
        throw e;
      }
    };

    this.findAll = function() {
      return Object.values(this.entries);
    };

    /**
     * Find an entry by primary key
     *
     */
    this.findByPk = function(id) {
      return new Promise((resolve, reject) => {
        if (this.entries[id]) {
          resolve(this.entries[id]);
        } else {
          reject("Entry not found");
        }
      });
    };

    /**
     * Delete an entry by id
     */
    this.delete = function(id) {
      delete this.entries[id];
    };
  }
}

export default DBTable;
