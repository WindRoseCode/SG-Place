const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sg_web',
  password: '365214',
  port: 5432,
});

