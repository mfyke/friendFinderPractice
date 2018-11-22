const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

require("./app/routing/apiRoutes.js") (app);
require("./app/routing/htmlRoutes.js") (app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

