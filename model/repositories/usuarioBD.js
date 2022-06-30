import usuarioBD from "../utils/db.js";

import ClientRepository from '../../model/entities/cliente.js';
import database from '../services/bdorm.js';

console.log("CRIANDO TABELA AAAAAAAAAAA")
const result = await database.sync({force: true});
console.log(result);

export async function selectUsuario() {
  const conn = await usuarioBD.connect();
  const [rows] = await conn.query("SELECT * FROM usuario;");
  return rows;
}

export async function getUsuarioId(id) {
  const conn = await usuarioBD.connect();
  const sql = "SELECT * FROM usuario WHERE id = ?";
  const values = [id];
  const [rows] = await conn.query(sql, values);
  return rows[0] ? rows.length > 0 : null;
}

export async function login(nome, senha) {
  const conn = await usuarioBD.connect();
  const sql = "SELECT * FROM usuario WHERE nome=? and senha=?";
  const values = [nome, seguranca.ocultarsenha(senha)];
  const [rows] = await conn.query(sql, values);
  return rows ? rows.length > 0 : null;
}

export async function insertUsuario(usuario) {
  return await ClientRepository.create(usuario);
}

export async function deleteUsuario(id) {
  const conn = await usuarioBD.connect();
  const sql = "DELETE FROM usuario WHERE id=?";
  return await conn.query(sql, [id]);
}

export async function updateUsuario(usuario) {
  const conn = await usuarioBD.connect();
  const sql = "UPDATE usuario SET nome = ?, senha = ? WHERE id = ?;";
  const values = [
    usuario.nome,
    seguranca.ocultarsenha(usuario.senha),
    usuario.id,
  ];
  return await conn.query(sql, values);
}

var usuarioBanco = {
  deleteUsuario,
  getUsuarioId,
  insertUsuario,
  login,
  selectUsuario,
  updateUsuario,
};

export default usuarioBanco;
