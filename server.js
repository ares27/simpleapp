const PORT = process.env.PORT || 3099;
const express = require("express");
const app = express();
const api = require("./routes/api");
const countriesapi = require("./routes/countries-api");
const activitiesapi = require("./routes/activities-api");

app.use(express.json());
app.use("/api", api);
app.use("/api", activitiesapi);
app.use("/api", countriesapi);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
