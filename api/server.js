const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const claim = require('./routes/claim');
const errorHandler = require('./middleware/error');

dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());

// mount routers
app.use('/api/claim', claim);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});