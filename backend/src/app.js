require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbconfig"); // Import the correct function
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");


// variables contain environment values
const PORT = process.env.PORT;

const app = express();
// connect to mongodb database  using mongoose

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
    credentials: true, // If using cookies or authentication
  })
);

app.use(cors());

// API Routes
app.use("/api/v1", userRoutes );
app.use("/api/v1", authRoutes );


// connectDB method call
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });
});
