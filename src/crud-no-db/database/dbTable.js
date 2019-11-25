class DBTable {
  constructor(name) {
    this.init(name);
  }

  init(name) {
    this.name = name;
    this.entries = {};

    this.create = function(tableConstructor) {
      const length = Object.keys(this.entries).length;
      this.entries[length + 1] = tableConstructor;
      return {
        ...tableConstructor
      };
    };

    this.findAll = function() {
      return Object.values(this.entries);
    };

    /**
     * Find a user by ID
     */
    this.findByPk = function(id) {
      return this.entries[id];
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
