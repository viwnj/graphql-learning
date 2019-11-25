import db from "../database/db";
import crypto from "crypto";

class UserResolver {
  static index() {
    return db.users.findAll();
  }

  static store({ input: { username, email, password } }) {
    const id = crypto.randomBytes(10).toString("hex");
    const user = db.users.create({ id, username, email, password });
    return {
      code: 200,
      message: "User created successfully!",
      user
    };
  }
}

export default {
  Mutation: {
    createUser: (_, reqBody) => UserResolver.store(reqBody)
  },

  Query: {
    users: UserResolver.index
  }
};
