const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

const LinksRoute = require('./Routes/LinksRoute.js');

app.use('/api/links', LinksRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});