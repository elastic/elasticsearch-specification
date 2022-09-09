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

import test from 'ava'
import { insert, Node } from "./extract-routes"
import stringify from "safe-stable-stringify";

test("insertions", t => {
  class args {
    name: string
    routes: {name: string, path: string}[]
    expect: Node

    constructor(name: string, routes: {name: string, path: string}[], expect: Node) {
      this.name = name;
      this.routes = routes;
      this.expect = expect;
    }
  }

  const cases: args[] = [
    // new args("simple", [{name: "search", path: "/_search"}], new Node("/_search", "search")),
    new args("simple", [{name: "search", path: "/_search"}], new Node("/_search", "search")),

    new args("with subpath", [
      {name: "search", path: "/_search"},
      {name: "test", path: "/_search/test"}
    ], new Node("/_search", "search", [new Node("/test", "test")])),

    new args("with split subpath", [
      {name: "search", path: "/_search"},
      {name: "test", path: "/_search/test"},
      {name: "travel", path: "/_search/travel"},
    ], new Node("/_search", "search", [
        new Node("/t", "", [
          new Node("est", "test"),
          new Node("ravel", "travel"),
        ])
    ])),

    new args("with split subpath and children", [
      {name: "search", path: "/_search"},
      {name: "test", path: "/_search/test"},
      {name: "tool", path: "/_search/test/tool"},
      {name: "travel", path: "/_search/travel"},
    ], new Node("/_search", "search", [
        new Node("/t", "", [
          new Node("est", "test", [
            new Node("/tool", "tool"),
          ]),

          new Node("ravel", "travel"),
        ])
       ])
    ),

    new args("with split subpath, 2 direct children", [
      {name: "search", path: "/_search"},
      {name: "tool", path: "/_search/test/tool"},
      {name: "travel", path: "/_search/travel/test"},
    ], new Node("/_search", "search", [
        new Node("/t", "", [
          new Node("est/tool", "tool"),
          new Node("ravel/test", "travel"),
        ])
       ])
    ),

    new args("with split subpath and 3 children, 2 indirect", [
      {name: "search", path: "/_search"},
      {name: "test", path: "/_search/test"},
      {name: "tool", path: "/_search/test/tool"},
      {name: "travel", path: "/_search/travel/test"},
    ], new Node("/_search", "search", [
        new Node("/t", "", [
          new Node("est", "test", [
            new Node("/tool", "tool"),
          ]),

          new Node("ravel/test", "travel"),
        ])
       ])
    ),

    new args("with root variable", [
        {name: "search", path: "/_search"},
        {name: "doc", path: "/*/_doc"},
      ], new Node("/", "", [
        new Node("_search", "search"),
        new Node("*", "", [
          new Node("/_doc", "doc")
        ], true),
      ])
    ),

    new args("with two consecutive variables from root", [
      {name: "search", path: "/_search"},
      {name: "doc", path: "/*/*/_doc"},
    ], new Node("/", "", [
        new Node("_search", "search"),
        new Node("*", "", [
          new Node("/", "", [
            new Node("*", "", [
              new Node("/_doc", "doc")
            ], true),
          ]),
        ], true),
      ])
    ),

    new args("with variable and an ending variable", [
      {name: "search", path: "/_search"},
      {name: "doc", path: "/*/_doc/*"},
    ], new Node("/", "", [
        new Node("_search", "search"),
        new Node("*", "", [
          new Node("/_doc/", "", [
            new Node("*", "doc", [], true),
          ]),
        ], true),
      ])
    ),

  ];

  for( const args of cases) {
    t.log(args.name);
    let root = new Node();
    for (const route of args.routes) {
      insert(root, route.path, route.name);
    }
    t.deepEqual(root, args.expect);
  }
})

