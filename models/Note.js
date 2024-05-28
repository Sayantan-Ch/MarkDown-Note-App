const pool = require('../config/db');

const createNote = async (title , filePath ) => {
    const result = await pool.query(
        'INSERT INTO notes (title, file_path) VALUES ($1, $2) RETURNING *',
        [title, filePath]
    );
    return result.rows[0];
}

const getNote =  async (id) => {
    const result = await pool.query(
        'SELECT file_path FROM notes WHERE id = $1',[id]
    );
    return result.rows[0];
}

module.exports = {
    createNote,
    getNote,
  };