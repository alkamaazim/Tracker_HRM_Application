require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbconfig'); // Import the correct function

const app = express();
// connect to mongodb database  using mongoose
connectDB()

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  credentials: true // If using cookies or authentication
}));

app.use(cors());


app.use(express.json())

// routs

app.get('/', (req, res) => {
    res.send('Welcome to the Auth API');
});

// creat port
app.listen(process.env.PORT,() =>{
    console.log(`Server running on port ${process.env.PORT} app.js`);
})