import pool from "./pool.js"

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsername(username) {
  const { rows } = await pool.query("SELECT * FROM usernames WHERE username like '%sup%'");
  return rows;
}

async function deleteAllUsernames() {
  const { rows } = await pool.query("DELETE FROM usernames");
  return rows;
}

export default{
  getAllUsernames,
  insertUsername,
  searchUsername,
  deleteAllUsernames
};