const db = require("../config/db");

class User {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  save() {
    const sql = `INSERT INTO users(
            name,
            surname,
            email
        ) VALUES (
            '${this.name}',
            '${this.surname}',
            '${this.email}'
        );`;

    return db.execute(sql);
  }

  static update(id, userData) {
    const { name, surname, email } = userData;

    let sql = `UPDATE users SET `;

    if (name) {
      sql += `name = '${name}', `;
    }
    if (surname) {
      sql += `surname = '${surname}', `;
    }
    if (email) {
      sql += `email = '${email}'`;
    }

    sql += ` WHERE id = ${id};`;

    return db.execute(sql);
  }

  static getAll() {
    const sql = "SELECT * FROM users;";

    return db.execute(sql);
  }

  static getOne(id) {
    const sql = `SELECT * FROM users WHERE id = ${id};`;

    return db.execute(sql);
  }

  static deleteOne(id) {
    const sql = `DELETE FROM users WHERE id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = User;