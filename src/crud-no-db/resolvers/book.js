import db from "../database/db";

class BookResolver {
  static index() {
    return db.books.findAll();
  }

  static store({ input: { author, title } }) {
    const book = db.books.create({ author, title });
    return {
      code: 200,
      message: "Book created successfully!",
      book
    };
  }
}

export default {
  Mutation: {
    addBook: (_, reqBody) => BookResolver.store(reqBody)
  },

  Query: {
    books: BookResolver.index
  }
};
