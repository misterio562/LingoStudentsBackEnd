import { getConnection } from "./../database/database";

const getByEmail = async (req, res) => {
  const connection = await getConnection();

  const email = req.query.email;
  const sql = "SELECT * FROM student WHERE email = ?";

  connection.query(sql, [email], function (err, results) {
    if (err) {
      // Manejar el error
      console.log(err);
      return res
        .status(400)
        .send("Error al buscar usuario en la base de datos");
    }

    // Si la consulta no devuelve resultados, el email no existe en la base de datos
    if (results.length === 0) {
      return res.status(404).send("El usuario no existe en la base de datos");
    }

    // Si la consulta devuelve resultados, el email existe en la base de datos
    const student = results[0];
    return res.send(student).status(200);
  });
};

const addStudent = async (req, res) => {
  const connection = await getConnection();

  const email = req.body.email;
  const displayName = req.body.displayName;

  const sql = "INSERT INTO student (email, displayName) VALUES (?, ?)";
  connection.query(sql, [email, displayName], (err) => {
    if (err) {
      return res
        .status(400)
        .send("Error al guardar el usuario en la base de datos");
    }
    return res.status(200).send("Usuario guardado en la base de datos");
  });
};

const selectIdByEmail = async (req, res) => {
  const connection = await getConnection();

  const email = req.query.email;
  const sql = "SELECT idStudent FROM student WHERE email = ?";
  connection.query(sql, [email], function (err, results) {
    if (err) {
      // Manejar el error
      console.log(err);
      return res.status(400).send("Error al buscar usuario en la base datos");
    }

    // Si la consulta no devuelve resultados, el email no existe en la base de datos
    if (results.length === 0) {
      return res.status(404).send("El usuario no existe");
    }

    // Si la consulta devuelve resultados, el email existe en la base de datos
    const idStudent = results[0].idStudent;
    return res.send({ idStudent }).status(200);
  });
};

export const methods = {
  getByEmail,
  addStudent,
  selectIdByEmail,
};
