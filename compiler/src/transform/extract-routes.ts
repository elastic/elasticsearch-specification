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
import {argv} from "zx";
import {join} from "path";
import {fetch} from "zx";
import {
  Model,
} from '../model/metamodel'

const outputPath = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'routes.go')
const V8 = join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json')
const V7 = "https://raw.githubusercontent.com/elastic/elasticsearch-specification/7.17/output/schema/schema.json"

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

export class Forest {
  byVersion: Map<number, Trees>

  constructor() {
    this.byVersion = new Map();
  }
}

function serializeNode(node: Node): string {
  let output: string = "";
  const template: string = `{
    Name: "${node.name}",
    Path: []byte("${node.path}"),
  `

  output += template
  if (node.children.length) {
    for (const child of node.children) {
      if (child.isVariable) {
        output += `Variable: &Node${serializeNode(child)}`
      }
    }
    output += `Children: []Node{
    `
    for (const child of node.children) {
      if (!child.isVariable) {
        output += serializeNode(child);
      }
    }
    output += `},
    `
  }
  output += `},
  `

  return output;
}

function serializeTree(trees: Trees): string {
  let output: string = "";
  for (const [method, root] of trees.byMethod) {
    output += `
    "${method}":
    `
    output += serializeNode(root);
  }

  output += `},`

  return output;
}

function serializeForest(forest: Forest): string {
  let output: string = "";
  const begin: string = `package esroute

  var routes = Forest{
	  map[string]Trees{
  `
  output += begin;

  for (const [version, tree] of forest.byVersion) {
    output += `\n"${version}": { ByMethod: map[string]Node{`
    output += serializeTree(tree)
    output += `},`
  }

  output += `\n},
  }`
  return output;
}

function matches(subject: string, search: string): string {
  let output: string = "";

  for (let i = 0; i < subject.length; i++) {
    if (subject[i] === "{") {
      if (i == 0) {
        for (let j = 0; j < subject.length; j++) {
          if (subject[j] === "}") {
            return subject.slice(i,j+1);
          }
        }
      }
      return (output ? output : "");
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
      // If the current node already has children we move them to the newly created node.
      if (match.startsWith("{") && node.path.startsWith("{")) {
        node.path = match;
        insert(node, rest, name);
      } else {
        let child = new Node();
        insert(child, rest, name);

        let oldNode = new Node(node.path, node.name, node.children);
        oldNode.path = oldNode.path.slice(match.length);
        node.children = [];
        node.children.push(oldNode);

        node.name = "";
        node.path = match;
        if (child.path) {
          node.children.push(child);
        }
      }
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

    if (node.path.startsWith("{")) {
      node.isVariable = true;
    }
  } else if (url[0] !== node.path[0]) {
    childrenPresent: {
      for (let nodeChildren of node.children) {
        if (nodeChildren.path[0] == url[0]) {
          insert(nodeChildren,url,name);
          break childrenPresent;
        }
      }
      let child = new Node();
      insert(child, url, name);
      node.children.push(child);
    }
  }

  if (node.path == url) {
    node.name = name;
  } else if (node.children.length === 1 && node.children[0].isVariable) {
    node.name = name;
  } else if (node.isVariable && !node.name && url.startsWith("{") && url.endsWith("}")) {
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
          insert(node, url.path, endpoint.name);
        }
      }
    }
  }

  return t;
}

async function extractRoutesFromFiles(outPath: string): Promise<void> {
  const v8Spec = await readFile(
    V8,
    {encoding: 'utf8'}
  )

  const data = await fetch(V7)
  const v7Spec = await data.text();


  let versions = new Map<number, string>()
  versions.set(7, v7Spec);
  versions.set(8, v8Spec);


  let forest = new Forest();

  versions.forEach(function (spec, version) {
    const inputModel = JSON.parse(spec)
    const routes = extractRoutes(inputModel)
    forest.byVersion.set(version, routes);
  })

  const str = serializeForest(forest);

  await writeFile(outPath, str);
}

extractRoutesFromFiles(outputPath)
  .catch(reason => console.error(reason))
  .finally(() => console.log('Routes extraction complete.', outputPath))
