import { create_db_product } from "../query.js";

export function createProduct() {
  connection.query(create_db_product, (err, results, fields) => {
    err && console.log("err ", err);
    results && console.log("results ", results);
  });

  connection.end();
}
