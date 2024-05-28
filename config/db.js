const { Pool } = require('pg');

const pool = new Pool({
  user: 'sayantanch',
  host: 'localhost',
  database: 'markdown_notes',
  port: 5432,
});

module.exports = pool;