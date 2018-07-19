const express = require('express');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
const pathToSwaggerEditor = require.resolve('swagger-editor-dist/package.json').replace("package.json", "");

const app = express();

app.use(express.static(pathToSwaggerUi));
app.use("/swagger", express.static(__dirname + "/../swagger-output"));
app.use("/swagger-editor", express.static(pathToSwaggerEditor));

app.listen(3000);
console.log("swagger ui listening on 3000");
