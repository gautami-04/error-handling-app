const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);

// Error middleware (MUST BE LAST)
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});