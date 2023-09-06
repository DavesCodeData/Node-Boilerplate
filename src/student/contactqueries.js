const pool = require('../../contactdb'); // Import your database connection pool

// const saveContactInfo = async (name, email, message) => {
//   const query = 'INSERT INTO users (name, email, message) VALUES ($1, $2, $3)';
//   const values = [name, email, message];

//   try {
//     const result = await pool.query(query, values);
//     return result; // You can return the result or perform additional actions
//   } catch (error) {
//     throw error;
//   }
// };

const saveContactInfo = async (contactInfo) => {
  const query = 'INSERT INTO users (name, email, message) VALUES ($1, $2, $3)';
  const values = [contactInfo.name, contactInfo.email, contactInfo.message];

  try {
    const result = await pool.query(query, values);
    return result; // You can return the result or perform additional actions
  } catch (error) {
    throw error;
  }
};


module.exports = {
  saveContactInfo,
};