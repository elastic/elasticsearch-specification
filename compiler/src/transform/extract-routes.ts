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

import {readFile, writeFile} from "fs/promises";
import stringify from "safe-stable-stringify";
import {argv} from "zx";
import {join} from "path";
import {
  Model,
} from '../model/metamodel'

export class Node {
  path: string;
  name: string;
  isVariable: boolean;
  children: Node[];

  constructor(path: string = "", name: string = "", children: Node[] = [], isVariable: boolean = false) {
    this.path = path;
    this.name = name;
    this.children = children;
    this.isVariable = isVariable;
  }
}

export class Trees {
  byMethod: Map<string, Node>;

  constructor() {
    this.byMethod = new Map();
  }
}

function matches(subject: string, search: string): string {
  let output: string = "";

  for (let i = 0; i < subject.length; i++) {
    if (subject[i] === "*") {
      return (output ? output : "*");
    } else if (subject[i] === search[i]) {
      output += subject[i];
    } else {
      return output;
    }
  }
  return output;
}

export function insert(node: Node, url: string, name: string) {
  if (!url) {
    return;
  }

  // Check if we're not on root anymore,
  // otherwise the value of url is set as
  // the default path for the current node
  // to bootstrap the insertion making this
  // de facto root of the tree.
  if (url[0] === node.path[0]) {
    const match = matches(url, node.path);
    let rest = url.slice(match.length);

    // If the matched part is shorter than the current node path
    // we need to split the node.
    // eg: _search with _select added becomes
    // _se ->
    //  -> arch
    //  -> lect
    if (match.length < node.path.length) {
      let child = new Node();
      insert(child, rest, name);

      // If the current node already has children we move them to the newly created node.
      let oldNode = new Node(node.path, node.name, node.children);
      oldNode.path = oldNode.path.slice(match.length);
      node.children = [];
      node.children.push(oldNode);

      if (child.path) {
        node.children.push(child);
      }
      node.name = "";
      node.path = match;
    }

    // if the url is lengthier than the current node we have children to populate/match
    if (url.length > node.path.length) {
      let found: boolean = false;

      // first we iterate over existing children to check if there's a match
      for (const child of node.children) {
        if (child.path[0] === rest[0]) {
          found = true;
          insert(child, rest, name);
        }
      }

      // if there's no match found we create a new child to this node
      if (!found) {
        let n = new Node();
        insert(n, rest, name);
        node.children.push(n);
      }
    }
  } else if (node.path.length === 0) {
    node.path = url;
    const match = matches(url, node.path);
    let rest = url.slice(match.length);

    node.path = match;
    if (rest.length) {
      insert(node, rest, name);
    }

    if (node.path === "*") {
      node.isVariable = true;
    } 
  } else if (url[0] !== node.path[0]) {
    let child = new Node();
    insert(child, url, name);
    node.children.push(child);
  }

  if (node.path == url) {
    node.name = name;
  } else if (node.children.length === 1 && node.children[0].isVariable) {
    node.name = name;
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
          let target = url.path.replace(/{\w+}/g, "*");
          insert(node, target, endpoint.name);
        }
      }
    }
  }

  return t;
}

async function extractRoutesFromFile(inPath: string, outPath: string): Promise<void> {
  const inputText = await readFile(
    inPath,
    {encoding: 'utf8'}
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
