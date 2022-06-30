import sq from "sequelize";
import database from "../services/bdorm.js";

const Cliente = database.define("cliente", {
  id: {
    type: sq.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: sq.STRING,
    allowNull: false,
  },
  idade: {
    type: sq.INTEGER,
  },
  endereco: {
    type: sq.STRING,
  },
});

export default Cliente;