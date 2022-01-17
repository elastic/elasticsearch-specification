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

'use strict'

// code adapted from https://observablehq.com/@d3/hierarchical-edge-bundling

const minimist = require('minimist')
const { join } = require('path')
const { readFileSync, writeFileSync, mkdirSync } = require('fs')

const options = minimist(process.argv.slice(2), {
  boolean: ['expanded', 'compact'],
  default: {
    expanded: false,
    compact: false
  }
})

let file
if (options.expanded) {
  file = join(__dirname, '..', '..', 'output', 'schema', 'import-namespace-graph-expanded.json')
} else if (options.compact) {
  file = join(__dirname, '..', '..', 'output', 'schema', 'import-namespace-graph-compact.json')
} else {
  console.error('You must specify --compact or --expanded')
  process.exit(1)
}

const rawData = JSON.parse(readFileSync(file, 'utf8'))
const data = {
  name: 'root',
  children: rawData.map(d => {
    return {
      name: d.namespace,
      imports: d.imports,
      imported_by: d.imported_by
    }
  })
}

const html = `
<!DOCTYPE html>
<head>
  <script src='https://d3js.org/d3.v7.min.js'></script>
</head>
<body>
  <script>
    const data = ${JSON.stringify(data)}
    ;(${generate.toString()})(window)
  </script>
</body>
`

function generate (window) {
  const { d3, document } = window
  const colorin = '#00f'
  const colorout = '#f00'
  const colornone = '#ccc'
  const width = 500
  const radius = width / 2

  const tree = d3.cluster().size([2 * Math.PI, radius - 100])
  const line = d3.lineRadial()
    .curve(d3.curveBundle.beta(0.85))
    .radius(d => d.y)
    .angle(d => d.x)

  const root = tree(bilink(d3.hierarchy(data).sort((a, b) => d3.ascending(a.height, b.height) || d3.ascending(a.data.name, b.data.name))))
  const body = d3.select(document).select('body')

  const svg = body
    .append('svg')
    .attr('viewBox', [-width / 2, -width / 2, width, width])

  const node = svg.append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 5)
    .selectAll('g')
    .data(root.leaves())
    .join('g')
    .attr('transform', d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
    .append('text')
    .attr('dy', '0.2em')
    .attr('x', d => d.x < Math.PI ? 6 : -6)
    .attr('text-anchor', d => d.x < Math.PI ? 'start' : 'end')
    .attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)
    .text(d => d.data.name)
    .each(function(d) { d.text = this; })
    .on('mouseover', overed)
    .on('mouseout', outed)
    .call(text => text.append('title').text(d => `${id(d).slice(5)}
${d.outgoing.length} outgoing
${d.incoming.length} incoming`))

  const link = svg.append('g')
    .attr('stroke', colornone)
    .attr('fill', 'none')
    .selectAll('path')
    .data(root.leaves().flatMap(leaf => leaf.outgoing))
    .join('path')
    .style('mix-blend-mode', 'multiply')
    .attr('d', ([i, o]) => line(i.path(o)))
    .each(function(d) { d.path = this; })


  function bilink (root) {
    const map = new Map(root.leaves().map(d => [id(d), d]))
    for (const d of root.leaves()) {
      d.incoming = []
      d.outgoing = Array.isArray(d.data.imports)
        ? d.data.imports.map(i => [d, map.get(`root.${i}`)])
        : []
    }

    for (const d of root.leaves()) {
      for (const o of d.outgoing) {
        o[1].incoming.push(o)
      }
    }

    return root
  }

  function id (node) {
    return `${node.parent ? id(node.parent) + '.' : ''}${node.data.name}`
  }

  function overed (event, d) {
    link.style('mix-blend-mode', null)
    d3.select(this).attr('font-weight', 'bold')
    d3.selectAll(d.incoming.map(d => d.path)).attr('stroke', colorin).raise()
    d3.selectAll(d.incoming.map(([d]) => d.text)).attr('fill', colorin).attr('font-weight', 'bold')
    d3.selectAll(d.outgoing.map(d => d.path)).attr('stroke', colorout).raise()
    d3.selectAll(d.outgoing.map(([, d]) => d.text)).attr('fill', colorout).attr('font-weight', 'bold')
  }

  function outed (event, d) {
    link.style('mix-blend-mode', 'multiply')
    d3.select(this).attr('font-weight', null)
    d3.selectAll(d.incoming.map(d => d.path)).attr('stroke', null)
    d3.selectAll(d.incoming.map(([d]) => d.text)).attr('fill', null).attr('font-weight', null)
    d3.selectAll(d.outgoing.map(d => d.path)).attr('stroke', null)
    d3.selectAll(d.outgoing.map(([, d]) => d.text)).attr('fill', null).attr('font-weight', null)
  }
}

mkdirSync(join(__dirname, '..', '..', 'report'), { recursive: true })
writeFileSync(
  join(__dirname, '..', '..', 'report', `namespace-dependencies-${options.compact ? 'compact' : 'expanded'}.html`),
  html.trim(),
  'utf8'
)
