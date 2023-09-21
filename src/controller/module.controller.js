import { getConnection } from "./../database/database";

const getModules = async (req, res) => {
  const connection = await getConnection();
  const sql = "SELECT * FROM module";
  connection.query(sql, (error, result) => {
    error ? res.send(error) : res.send(result);
  });
};

export const methods = {
    getModules
}