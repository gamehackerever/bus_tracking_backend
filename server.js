const app = require('./app');
const sequelize = require('./config/database'); // Your Sequelize instance

const PORT = 3000;

async function startServer() {
  try {
    await sequelize.sync({ alter: true }); // sync DB tables, create if missing
    console.log('Database synced');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on 0.0.0.0:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to sync database:', err);
  }
}

startServer();
