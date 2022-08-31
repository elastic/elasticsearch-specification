import {readFile, writeFile} from "fs/promises";
import stringify from "safe-stable-stringify";
import {argv} from "zx";
import {join} from "path";
import {
  Model,
} from '../model/metamodel'

class Node {
  path: string;
  isVariable: boolean;
  children: Node[];

  constructor() {
    this.path = "";
    // this.isVariable = false;
    this.children = [];
  }
}

class Trees {
  byMethod: Map<string, Node>;

  constructor() {
    this.byMethod = new Map();
  }
}

function matches(subject: string, search: string): string {
  let output: string = "";
  for (let i = 0; i < subject.length; i++) {
    if (subject[i] === search[i]) {
      output += subject[i];
    } else {
      return output;
    }
  }
  return output;
}


function insert(node: Node, url: string) {
  if (url[0] === node.path[0]) {
    const match = matches(url, node.path);

    if (match.length < node.path.length) {
      let child = new Node();
      child.path = node.path.slice(match.length, node.path.length);
      if (node.children.length > 0) {
        child.children = node.children;
        node.children = [];
      }

      node.children.push(child);
      node.path = match;
    } else if (node.path === "") {
      node.path = match;
    }

    if (url.length > node.path.length) {
      let found: boolean = false;
      let rest = url.slice(match.length, url.length);
      for (const child of node.children) {
        if (child.path[0] === rest[0]) {
          found = true;
          insert(child, rest);
        }
      }
      if (!found) {
        let n = new Node();
        n.path = rest;
        node.children.push(n);
      }
    }

  } else if (node.path.length === 0) {
    node.path = url;
  }
}

function extractRoutes(inputModel: Model): Trees {
  let t = new Trees();
  for (const endpoint of inputModel.endpoints) {
    for (const url of endpoint.urls) {
      for (const method of url.methods) {
        let node: Node | undefined;
        if (t.byMethod.has(method)) {
          node = t.byMethod.get(method);
        } else {
          node = new Node();
          t.byMethod.set(method, node);
          node = t.byMethod.get(method);
        }
        if (node !== undefined) {
          insert(node, url.path);
        }
      }
    }
  }

  return t;
}

async function extractRoutesFromFile (inPath: string, outPath: string): Promise<void> {
  const inputText = await readFile(
    inPath,
    { encoding: 'utf8' }
  )

  const inputModel = JSON.parse(inputText)
  const routes = extractRoutes(inputModel)

  await writeFile(
    outPath,
    stringify(routes, function (key, value) {
      if (value instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(value.entries()),
        };
      } else {
        return value;
      }
    }, 2),
    'utf8'
  )
}

const inputPath = argv.input ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json')
const outputPath = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'routes.json')

extractRoutesFromFile(inputPath, outputPath)
  .catch(reason => console.error(reason))
  .finally(() => console.log('Routes extraction complete.', outputPath))
