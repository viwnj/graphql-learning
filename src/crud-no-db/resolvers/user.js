import db from "../database/db";
import bcrypt from "bcrypt";

class UserResolver {
  static index() {
    return db.users.findAll();
  }

  static async store({ input: { username, email, password } }) {
    const passwordHash = bcrypt.hashSync(password, 8);
    const user = await db.users.create({
      username,
      email,
      password: passwordHash
    });
    return {
      code: 200,
      message: "User created successfully!",
      user
    };
  }

  static async update({ input }) {
    const { uid } = input;
    const user = await db.users.findByPk(uid);
    user.update(input);
    return {
      code: 200,
      message: "User updated successfully",
      user
    };
  }
}

export default {
  Mutation: {
    createUser: (_, reqBody) => UserResolver.store(reqBody),
    updateUser: (_, reqBody) => UserResolver.update(reqBody)
  },

  Query: {
    users: UserResolver.index
  }
};
