class Comment {
  constructor(dataAccessObject) {
    this.dataAccessObject = dataAccessObject;
  }

  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      message TEXT,
      created DATETIME DEFAULT CURRENT_TIMESTAMP)`;
    return this.dataAccessObject.run(sql);
  }

  deleteComments() {
    const sql = "DELETE FROM comments";
    return this.dataAccessObject.run(sql);
  }

  createComment({ name, message }) {
    return this.dataAccessObject.run(
      "INSERT INTO comments (name, message) VALUES (?, ?)",
      [name, message]
    );
  }

  createComments() {
    const mockComments = [
      {
        name: "Horatio Bolivar",
        message: "¡Libertad para los presos politicos!",
        created: "2023-10-01 08:00:00",
      },
      {
        name: "Alberto Ortega",
        message: "¡Revolucion del juego!",
        created: "2023-10-03 015:30:00",
      },
      {
        name: "Eduardo Fernandez",
        message: "¡Viva el libertador!",
        created: "2023-10-07 12:00:00",
      },
    ];

    const promises = mockComments.map(({ name, message, created }) => {
      return this.dataAccessObject.run(
        "INSERT INTO comments (name, message, created) VALUES (?, ?, ?)",
        [name, message, created]
      );
    });

    return Promise.all(promises);
  }

  getComment(id) {
    return this.dataAccessObject.get("SELECT * FROM comments WHERE id = ?", [
      id,
    ]);
  }

  getComments() {
    return this.dataAccessObject.all("SELECT * FROM comments");
  }
}

module.exports = Comment;
