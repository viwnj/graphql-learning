class TableEntry {
  constructor(tableConstructor) {
    this.tableConstructor = tableConstructor;
    const entries = Object.entries(tableConstructor);
    entries.forEach(([key, val]) => (this[key] = val));
  }

  update(newValues) {
    const entries = Object.entries(newValues);
    entries.forEach(([key, value]) => {
      if (this.tableConstructor.hasOwnProperty(key)) {
        this[key] = value;
      }
    });
  }
}

export default TableEntry;
