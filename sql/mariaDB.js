import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", //
  database: "test",
});

connection.connect((err) => {
  err
    ? console.log("mariaDB connection failed \n", err)
    : console.log("DB connected!!!");
});
