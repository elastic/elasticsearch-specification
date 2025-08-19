/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const fs = require('fs');
const path = require('path');
const { parseDocument: yamlParseDocument } = require('yaml');
const { convertRequests, loadSchema } = require('@elastic/request-converter');
const {parseRequest} = require("@elastic/request-converter/dist/parse");
const {JavaCaller} = require("java-caller");

const LANGUAGES = ['Python', 'JavaScript', 'Ruby', 'PHP', 'curl'];
const EXAMPLES_JSON = 'docs/examples/languageExamples.json';
let languageExamples = {};

async function generateLanguages(example) {
  const doc = yamlParseDocument(await fs.promises.readFile(example, 'utf8'));
  const data = doc.toJS();
  let request = data.method_request;
  if (data.value) {
    if (typeof data.value === 'string') {
      request += '\n' + data.value;
    }
    else {
      request += '\n' + JSON.stringify(data.value);
    }
  }
  if (data.alternatives) {
    languageExamples[example] = data.alternatives;
    delete data.alternatives;
  }
  let alternatives = [];
  for (const lang of LANGUAGES) {
    alternatives.push({
      language: lang,
      code: (await convertRequests(request, lang, {})).trim(),
    });
  }
  alternatives = alternatives.concat((languageExamples[example] ?? []).filter(pair => !LANGUAGES.includes(pair.language)));

  // specific java example generator
  if (process.argv[2] === "java") {
    const partialRequest = await parseRequest(request);
    const java = new JavaCaller({
      minimumJavaVersion: 21,
      jar: "path/to/converter/jar/java-es-request-converter-1.0-SNAPSHOT.jar",
    });

    let correctParams = getCodeGenParamNames(partialRequest.params, partialRequest.request);
    let body = partialRequest.body;
    if (!body) {
      body = {}
    }

    let javaReqs = [];
    const javaParsedRequest = {
      api: partialRequest.api,
      params: correctParams,
      query: partialRequest.query,
      body: body,
    };
    javaReqs.push(javaParsedRequest)

    let args = [];
    args.push(JSON.stringify(javaReqs));

    const {status, stdout, stderr} = await java.run(args);
    if (status) {
      console.log(stderr);
      console.log(JSON.stringify(javaReqs));
    }
    else {
      const alternative_java = [];
      alternative_java.push({
        language: "Java",
        code: stdout,
      });
      // replace old java examples
      alternatives = alternatives.filter(pair => pair.language !== "Java");
      alternatives = alternatives.concat(alternative_java);
    }
  }

  doc.delete('alternatives');
  languageExamples[example] = alternatives;
  await fs.promises.writeFile(example, doc.toString({lineWidth: 132}));
}

async function* walkExamples(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) {
      yield* walkExamples(entry);
    }
    else if (d.isFile() && entry.includes('/examples/request/') && entry.endsWith('.yaml')) {
      yield entry;
    }
  }
}

function getCodeGenParamNames(
    params,
    request,
){
  for (const [key, value] of Object.entries(params)) {
    if (request?.path) {
      for (const prop of request.path) {
        if (prop.name === key && prop.codegenName !== undefined) {
          delete params[key];
          params[prop.codegenName] = value;
        }
      }
    }
  }
  return params;
}

async function main() {
  let count = 0;
  let errors = 0;
  await loadSchema('output/schema/schema.json');
  if (fs.existsSync(EXAMPLES_JSON)) {
    languageExamples = JSON.parse(await fs.promises.readFile(EXAMPLES_JSON, 'utf8'));
  }
  for await (const example of walkExamples('./specification/')) {
    try {
      await generateLanguages(example);
    }
    catch (err) {
      console.log(`${example}: ${err}`);
      errors += 1;
    }
    count += 1;
  }
  await fs.promises.writeFile(EXAMPLES_JSON, JSON.stringify(languageExamples, null, 2));
  console.log(`${count} examples processed, ${errors} errors.`);
}

main();
