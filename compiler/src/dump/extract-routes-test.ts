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
import { insert, Node } from './extract-routes'

test('insertions', t => {
  class Args {
    name: string
    routes: Array<{name: string, path: string}>
    expect: Node

    constructor (name: string, routes: Array<{name: string, path: string}>, expect: Node) {
      this.name = name
      this.routes = routes
      this.expect = expect
    }
  }

  const cases: Args[] = [
    new Args('simple', [{ name: 'search', path: '/_search' }], new Node('/_search', 'search')),

    new Args('with subpath', [
      { name: 'search', path: '/_search' },
      { name: 'test', path: '/_search/test' }
    ], new Node('/_search', 'search', [new Node('/test', 'test')])),

    new Args('with split subpath', [
      { name: 'search', path: '/_search' },
      { name: 'test', path: '/_search/test' },
      { name: 'travel', path: '/_search/travel' }
    ], new Node('/_search', 'search', [
      new Node('/t', '', [
        new Node('est', 'test'),
        new Node('ravel', 'travel')
      ])
    ])),

    new Args('with split subpath and children', [
      { name: 'search', path: '/_search' },
      { name: 'test', path: '/_search/test' },
      { name: 'tool', path: '/_search/test/tool' },
      { name: 'travel', path: '/_search/travel' }
    ], new Node('/_search', 'search', [
      new Node('/t', '', [
        new Node('est', 'test', [
          new Node('/tool', 'tool')
        ]),

        new Node('ravel', 'travel')
      ])
    ])
    ),

    new Args('with split subpath, 2 direct children', [
      { name: 'search', path: '/_search' },
      { name: 'tool', path: '/_search/test/tool' },
      { name: 'travel', path: '/_search/travel/test' }
    ], new Node('/_search', 'search', [
      new Node('/t', '', [
        new Node('est/tool', 'tool'),
        new Node('ravel/test', 'travel')
      ])
    ])
    ),

    new Args('with split subpath and 3 children, 2 indirect', [
      { name: 'search', path: '/_search' },
      { name: 'test', path: '/_search/test' },
      { name: 'tool', path: '/_search/test/tool' },
      { name: 'travel', path: '/_search/travel/test' }
    ], new Node('/_search', 'search', [
      new Node('/t', '', [
        new Node('est', 'test', [
          new Node('/tool', 'tool')
        ]),

        new Node('ravel/test', 'travel')
      ])
    ])
    ),

    new Args('with root variable', [
      { name: 'search', path: '/_search' },
      { name: 'doc', path: '/{index}/_doc' }
    ], new Node('/', '', [
      new Node('_search', 'search'),
      new Node('{index}', '', [
        new Node('/_doc', 'doc')
      ], true)
    ])
    ),

    new Args('with two consecutive variables from root', [
      { name: 'search', path: '/_search' },
      { name: 'doc', path: '/{a}/{b}/_doc' }
    ], new Node('/', '', [
      new Node('_search', 'search'),
      new Node('{a}', '', [
        new Node('/', 'doc', [
          new Node('{b}', '', [
            new Node('/_doc', 'doc')
          ], true)
        ])
      ], true)
    ])
    ),

    new Args('with variable and an ending variable', [
      { name: 'search', path: '/_search' },
      { name: 'doc', path: '/{a}/_doc/{c}' }
    ], new Node('/', '', [
      new Node('_search', 'search'),
      new Node('{a}', '', [
        new Node('/_doc/', 'doc', [
          new Node('{c}', 'doc', [], true)
        ])
      ], true)
    ])
    ),

    new Args('with variable and an ending variable', [
      { name: 'search', path: '/_search' },
      { name: 'doc', path: '/{a}/_doc/{c}' }
    ], new Node('/', '', [
      new Node('_search', 'search'),
      new Node('{a}', '', [
        new Node('/_doc/', 'doc', [
          new Node('{c}', 'doc', [], true)
        ])
      ], true)
    ])
    )

  ]

  for (const args of cases) {
    t.log(args.name)
    const root = new Node()
    for (const route of args.routes) {
      insert(root, route.path, route.name)
    }
    t.deepEqual(root, args.expect)
  }
})
