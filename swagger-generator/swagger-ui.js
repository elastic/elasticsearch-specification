const express = require('express');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

const app = express();

app.use(express.static(pathToSwaggerUi));
app.use("/swagger", express.static(__dirname + "/swagger-output"));

app.listen(3000);
