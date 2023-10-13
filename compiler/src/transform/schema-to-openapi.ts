import {convert_schema_to_openapi} from 'schema-wasm-lib';
import {argv} from "zx";
import {join} from "path";
import {readFileSync, writeFileSync} from "fs";


const inputPath = argv.input ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json')
const outputPath = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'openapi', 'elasticsearch-serverless-openapi.json')

const inputText = readFileSync(
    inputPath,
    { encoding: 'utf8' }
);

const output = convert_schema_to_openapi(inputText, "serverless");

writeFileSync(
    outputPath,
    output,
    'utf8'
)
