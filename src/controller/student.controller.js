import { getConnection } from "./../database/database";

const updateStudentName = async (req, res) => {
  const connection = await getConnection();

  const { idStudent, displayName } = req.body;
  const sql = "UPDATE student SET displayName=? WHERE idStudent=?";
  connection.query(sql, [displayName, idStudent], (error) => {
    error
      ? res
          .status(500)
          .send("Error al actualizar los datos en la base de datos")
      : res.status(200).send("Los datos han sido actualizados correctamente");
  });
};

export const methods = {
    updateStudentName
}