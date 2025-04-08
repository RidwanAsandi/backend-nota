require("dotenv").config();
const pool = require("./db");

const createTables = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS admin (
        id SERIAL PRIMARY KEY,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL
        role VARCHAR(255) NOT NULL
        nama VARCHAR(255) NOT NULL
        );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS nota (
        id SERIAL PRIMARY KEY,
        nama_pelanggan TEXT,
        barang TEXT,
        jumlah INT,
        harga_satuan INT,
        total INT,
        tanggal TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    console.log("✅ Tables created successfully");
  } catch (err) {
    console.error("❌ Error creating tables:", err);
  }
};

createTables();
