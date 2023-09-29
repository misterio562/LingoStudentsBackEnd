import { getConnection } from "./../database/database.js";

const getLanguages = async (req, res) => {
  const languages = {
    english: "Hello",
    spanish: "Hola",
    french: "Bonjour",
    german: "Hallo",
    chinese: "你好",
  };

  res.json(languages);
};

export const methods = {
  getLanguages,
};
