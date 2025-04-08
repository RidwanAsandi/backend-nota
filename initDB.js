const pool = require("./db");

const createTables = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS admin (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL
        );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS nota (
        id SERIAL PRIMARY KEY,
        judul VARCHAR(100) NOT NULL,
        deskripsi TEXT,
        tanggal TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    console.log("✅ Tables created successfully");
  } catch (err) {
    console.error("❌ Error creating tables:", err);
  }
};

createTables();
