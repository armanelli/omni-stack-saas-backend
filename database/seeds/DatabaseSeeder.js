"use strict";

const User = use("App/Models/User");

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: "Rafael Armanelli de Araújo",
      email: "rafael.armanelli@gmail.com",
      password: "rafael123"
    });

    await user.teams().create({
      user_id: user.id,
      name: "Creation Sistemas"
    });
  }
}

module.exports = DatabaseSeeder;
