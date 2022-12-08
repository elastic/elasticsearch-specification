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

import { readFile, writeFile } from 'fs/promises'
import { argv, fetch } from 'zx'
import { join } from 'path'
import {
  Model
} from '../model/metamodel'

const outputPath = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'routes.go')
const V8 = join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json')
const V7 = 'https://raw.githubusercontent.com/elastic/elasticsearch-specification/7.17/output/schema/schema.json'

export class Node {
  path: string
  name: string
  isVariable: boolean
  children: Node[]

  constructor (path: string = '', name: string = '', children: Node[] = [], isVariable: boolean = false) {
    this.path = path
    this.name = name
    this.children = children
    this.isVariable = isVariable

    return this
  }
}

export class Trees {
  byMethod: Map<string, Node>

  constructor () {
    this.byMethod = new Map()

    return this
  }

  Insert (method: string, path: string, name: string): void {
    let node: Node | undefined
    if (this.byMethod.has(method)) {
      node = this.byMethod.get(method)
    } else {
      node = new Node()
      this.byMethod.set(method, node)
      node = this.byMethod.get(method)
    }
    if (node !== undefined) {
      insert(node, path, name)
    }
  }
}

export class Forest {
  byVersion: Map<number, Trees>

  constructor () {
    this.byVersion = new Map()
  }
}

function serializeNode (node: Node): string {
  let output: string = ''
  const template: string = `{
    name: "${node.name}",
    path: []byte("${node.path}"),
    `

  output += template
  if (node.children.length > 0) {
    for (const child of node.children) {
      if (child.isVariable) {
        output += `variable: &node${serializeNode(child)}`
      }
    }
    output += `children: []node{
        `
    for (const child of node.children) {
      if (!child.isVariable) {
        output += serializeNode(child)
      }
    }
    output += `},
        `
  }
  output += `},
      `

  return output
}

function serializeTree (trees: Trees): string {
  let output: string = ''
  for (const [method, root] of trees.byMethod) {
    output += `
        "${method}":
        `
    output += serializeNode(root)
  }

  output += '},'

  return output
}

function serializeForest (forest: Forest): string {
  let output: string = ''
  const begin: string = `package esroutes

      // Code generated from the elasticsearch-specification DO NOT EDIT.
      var routes = forest{
        map[string]trees{
          `
  output += begin

  for (const [version, tree] of forest.byVersion) {
    output += `\n"${version}": { byMethod: map[string]node{`
    output += serializeTree(tree)
    output += '},'
  }

  output += `\n},
        }`
  return output
}

function matches (subject: string, search: string): string {
  let output: string = ''

  for (let i = 0; i < subject.length; i++) {
    if (subject[i] === '{') {
      if (i === 0) {
        for (let j = 0; j < subject.length; j++) {
          if (subject[j] === '}') {
            return subject.slice(i, j + 1)
          }
        }
      }

      if (output.length > 0) {
        return output
      }
      return ''
    } else if (subject[i] === search[i]) {
      output += subject[i]
    } else {
      return output
    }
  }
  return output
}

export function insert (node: Node, url: string, name: string): void {
  if (url.length === 0) {
    return
  }

  // Check if we're not on root anymore,
  // otherwise the value of url is set as
  // the default path for the current node
  // to bootstrap the insertion making this
  // de facto root of the tree.
  if (url[0] === node.path[0]) {
    const match = matches(url, node.path)
    const rest = url.slice(match.length)

    // If the matched part is shorter than the current node path
    // we need to split the node.
    // eg: _search with _select added becomes
    // _se ->
    //  -> arch
    //  -> lect
    if (match.length < node.path.length) {
      // If the current node already has children we move them to the newly created node.
      if (match.startsWith('{') && node.path.startsWith('{')) {
        node.path = match
        insert(node, rest, name)
      } else {
        const child = new Node()
        insert(child, rest, name)

        const oldNode = new Node(node.path, node.name, node.children)
        oldNode.path = oldNode.path.slice(match.length)
        node.children = []
        node.children.push(oldNode)

        node.name = ''
        node.path = match
        if (child.path.length > 0) {
          node.children.push(child)
        }
      }
    }

    // if the url is lengthier than the current node we have children to populate/match
    if (url.length > node.path.length) {
      let found: boolean = false

      // first we iterate over existing children to check if there's a match
      for (const child of node.children) {
        if (child.path[0] === rest[0]) {
          found = true
          insert(child, rest, name)
        }
      }

      // if there's no match found we create a new child to this node
      if (!found) {
        const n = new Node()
        insert(n, rest, name)
        node.children.push(n)
      }
    }
  } else if (node.path.length === 0) {
    node.path = url
    const match = matches(url, node.path)
    const rest = url.slice(match.length)

    node.path = match
    if (rest.length > 0) {
      insert(node, rest, name)
    }

    if (node.path.startsWith('{')) {
      node.isVariable = true
    }
  } else if (url[0] !== node.path[0]) {
    childrenPresent: { // eslint-disable-line
      for (const nodeChildren of node.children) {
        if (nodeChildren.path[0] === url[0]) {
          insert(nodeChildren, url, name)
          break childrenPresent // eslint-disable-line
        }
      }
      const child = new Node()
      insert(child, url, name)
      node.children.push(child)
    }
  }

  if (node.path === url) {
    node.name = name
  } else if (node.children.length === 1 && node.children[0].isVariable) {
    node.name = name
  } else if (node.isVariable && node.name.length === 0 && url.startsWith('{') && url.endsWith('}')) {
    node.name = name
  }
}

function extractRoutes (inputModel: Model): Trees {
  const t = new Trees()
  for (const endpoint of inputModel.endpoints) {
    for (const url of endpoint.urls) {
      for (const method of url.methods) {
        t.Insert(method, url.path, endpoint.name)
      }
    }
  }

  return t
}

async function extractRoutesFromFiles (outPath: string): Promise<void> {
  const v8Spec = await readFile(
    V8,
    { encoding: 'utf8' }
  )

  const data = await fetch(V7)
  const v7Spec = await data.text()

  const versions = new Map<number, string>()
  versions.set(7, v7Spec)
  versions.set(8, v8Spec)

  const forest = new Forest()

  versions.forEach(function (spec, version) {
    const inputModel = JSON.parse(spec)
    const routes = extractRoutes(inputModel)
    forest.byVersion.set(version, routes)
  })
  forest.byVersion.set(0, defaultRoutes())

  const str = serializeForest(forest)

  await writeFile(outPath, str)
}

extractRoutesFromFiles(outputPath)
  .catch(reason => console.error(reason))
  .finally(() => console.log('Routes extraction complete.', outputPath))

function defaultRoutes (): Trees {
  const routes: Array<{ method: string, path: string, name: string }> = [
    { method: 'DELETE', path: '/_async_search/{id}', name: 'async_search.delete' },
    {
      method: 'DELETE',
      path: '/_ml/trained_models/{model_id}/model_aliases/{model_alias}',
      name: 'ml.delete_trained_model_alias'
    },
    { method: 'DELETE', path: '/_search/scroll', name: 'clear_scroll' },
    { method: 'DELETE', path: '/_search/scroll/{scroll_id}', name: 'clear_scroll' },
    { method: 'DELETE', path: '/_security/role_mapping/{name}', name: 'security.delete_role_mapping' },
    { method: 'DELETE', path: '/{index}/_alias/{name}', name: 'indices.delete_alias' },
    { method: 'DELETE', path: '/{index}/_aliases/{name}', name: 'indices.delete_alias' },
    { method: 'GET', path: '/', name: 'info' },
    { method: 'GET', path: '/_alias', name: 'indices.get_alias' },
    { method: 'GET', path: '/_alias/{name}', name: 'indices.get_alias' },
    { method: 'GET', path: '/_analyze', name: 'indices.analyze' },
    { method: 'GET', path: '/_async_search/status/{id}', name: 'async_search.status' },
    { method: 'GET', path: '/_async_search/{id}', name: 'async_search.get' },
    { method: 'GET', path: '/_cluster/settings', name: 'cluster.get_settings' },
    { method: 'GET', path: '/_count', name: 'count' },
    { method: 'GET', path: '/_field_caps', name: 'field_caps' },
    { method: 'GET', path: '/_fleet/_fleet_msearch', name: 'fleet.msearch' },
    { method: 'GET', path: '/_flush', name: 'indices.flush' },
    { method: 'GET', path: '/_flush/synced', name: 'indices.flush_synced' },
    { method: 'GET', path: '/_mapping', name: 'indices.get_mapping' },
    { method: 'GET', path: '/_mapping/field/{fields}', name: 'indices.get_field_mapping' },
    { method: 'GET', path: '/_mapping/{type}', name: 'indices.get_mapping' },
    { method: 'GET', path: '/_mapping/{type}/field/{fields}', name: 'indices.get_field_mapping' },
    { method: 'GET', path: '/_mget', name: 'mget' },
    { method: 'GET', path: '/_ml/info', name: 'ml.info' },
    { method: 'GET', path: '/_msearch', name: 'msearch' },
    { method: 'GET', path: '/_msearch/template', name: 'msearch_template' },
    { method: 'GET', path: '/_mtermvectors', name: 'mtermvectors' },
    { method: 'GET', path: '/_nodes', name: 'nodes.info' },
    { method: 'GET', path: '/_nodes/{metric}', name: 'nodes.info' },
    { method: 'GET', path: '/_nodes/{node_id}', name: 'nodes.info' },
    { method: 'GET', path: '/_nodes/{node_id}/_repositories_metering', name: 'nodes.get_repositories_metering_info' },
    { method: 'GET', path: '/_nodes/{node_id}/{metric}', name: 'nodes.info' },
    { method: 'GET', path: '/_refresh', name: 'indices.refresh' },
    { method: 'GET', path: '/_remote/info', name: 'cluster.remote_info' },
    { method: 'GET', path: '/_render/template', name: 'render_search_template' },
    { method: 'GET', path: '/_render/template/{id}', name: 'render_search_template' },
    { method: 'GET', path: '/_search', name: 'search' },
    { method: 'GET', path: '/_search/scroll', name: 'scroll' },
    { method: 'GET', path: '/_search/scroll/{scroll_id}', name: 'scroll' },
    { method: 'GET', path: '/_search/template', name: 'search_template' },
    { method: 'GET', path: '/_search_shards', name: 'search_shards' },
    { method: 'GET', path: '/_searchable_snapshots/cache/stats', name: 'searchable_snapshots.cache_stats' },
    { method: 'GET', path: '/_searchable_snapshots/stats', name: 'searchable_snapshots.stats' },
    { method: 'GET', path: '/_searchable_snapshots/{node_id}/cache/stats', name: 'searchable_snapshots.cache_stats' },
    { method: 'GET', path: '/_security/_query/api_key', name: 'security.query_api_keys' },
    { method: 'GET', path: '/_security/role_mapping', name: 'security.get_role_mapping' },
    { method: 'GET', path: '/_security/role_mapping/{name}', name: 'security.get_role_mapping' },
    { method: 'GET', path: '/_segments', name: 'indices.segments' },
    { method: 'GET', path: '/_settings', name: 'indices.get_settings' },
    { method: 'GET', path: '/_settings/{name}', name: 'indices.get_settings' },
    { method: 'GET', path: '/_validate/query', name: 'indices.validate_query' },
    { method: 'GET', path: '/_watcher/_query/watches', name: 'watcher.query_watches' },
    { method: 'GET', path: '/_xpack', name: 'xpack.info' },
    { method: 'GET', path: '/{index}/_alias', name: 'indices.get_alias' },
    { method: 'GET', path: '/{index}/_alias/{name}', name: 'indices.get_alias' },
    { method: 'GET', path: '/{index}/_analyze', name: 'indices.analyze' },
    { method: 'GET', path: '/{index}/_ccr/info', name: 'ccr.follow_info' },
    { method: 'GET', path: '/{index}/_count', name: 'count' },
    { method: 'GET', path: '/{index}/_field_caps', name: 'field_caps' },
    { method: 'GET', path: '/{index}/_fleet/_fleet_msearch', name: 'fleet.msearch' },
    { method: 'GET', path: '/{index}/_fleet/_fleet_search', name: 'fleet.search' },
    { method: 'GET', path: '/{index}/_flush', name: 'indices.flush' },
    { method: 'GET', path: '/{index}/_flush/synced', name: 'indices.flush_synced' },
    { method: 'GET', path: '/{index}/_graph/explore', name: 'graph.explore' },
    { method: 'GET', path: '/{index}/_knn_search', name: 'knn_search' },
    { method: 'GET', path: '/{index}/_mapping', name: 'indices.get_mapping' },
    { method: 'GET', path: '/{index}/_mapping/field/{fields}', name: 'indices.get_field_mapping' },
    { method: 'GET', path: '/{index}/_mapping/{type}', name: 'indices.get_mapping' },
    { method: 'GET', path: '/{index}/_mapping/{type}/field/{fields}', name: 'indices.get_field_mapping' },
    { method: 'GET', path: '/{index}/_mget', name: 'mget' },
    { method: 'GET', path: '/{index}/_msearch', name: 'msearch' },
    { method: 'GET', path: '/{index}/_msearch/template', name: 'msearch_template' },
    { method: 'GET', path: '/{index}/_mtermvectors', name: 'mtermvectors' },
    { method: 'GET', path: '/{index}/_refresh', name: 'indices.refresh' },
    { method: 'GET', path: '/{index}/_reload_search_analyzers', name: 'indices.reload_search_analyzers' },
    { method: 'GET', path: '/{index}/_rollup_search', name: 'rollup.rollup_search' },
    { method: 'GET', path: '/{index}/_search', name: 'search' },
    { method: 'GET', path: '/{index}/_search/template', name: 'search_template' },
    { method: 'GET', path: '/{index}/_search_shards', name: 'search_shards' },
    { method: 'GET', path: '/{index}/_searchable_snapshots/stats', name: 'searchable_snapshots.stats' },
    { method: 'GET', path: '/{index}/_segments', name: 'indices.segments' },
    { method: 'GET', path: '/{index}/_settings', name: 'indices.get_settings' },
    { method: 'GET', path: '/{index}/_settings/{name}', name: 'indices.get_settings' },
    { method: 'GET', path: '/{index}/_source/{id}', name: 'get_source' },
    { method: 'GET', path: '/{index}/_termvectors', name: 'termvectors' },
    { method: 'GET', path: '/{index}/_termvectors/{id}', name: 'termvectors' },
    { method: 'GET', path: '/{index}/_validate/query', name: 'indices.validate_query' },
    { method: 'GET', path: '/{index}/{type}/_count', name: 'count' },
    { method: 'GET', path: '/{index}/{type}/_graph/explore', name: 'graph.explore' },
    { method: 'GET', path: '/{index}/{type}/_mget', name: 'mget' },
    { method: 'GET', path: '/{index}/{type}/_msearch', name: 'msearch' },
    { method: 'GET', path: '/{index}/{type}/_msearch/template', name: 'msearch_template' },
    { method: 'GET', path: '/{index}/{type}/_mtermvectors', name: 'mtermvectors' },
    { method: 'GET', path: '/{index}/{type}/_rollup_search', name: 'rollup.rollup_search' },
    { method: 'GET', path: '/{index}/{type}/_search', name: 'search' },
    { method: 'GET', path: '/{index}/{type}/_search/template', name: 'search_template' },
    { method: 'GET', path: '/{index}/{type}/_termvectors', name: 'termvectors' },
    { method: 'GET', path: '/{index}/{type}/_validate/query', name: 'indices.validate_query' },
    { method: 'GET', path: '/{index}/{type}/{id}/_source', name: 'get_source' },
    { method: 'GET', path: '/{index}/{type}/{id}/_termvectors', name: 'termvectors' },
    { method: 'HEAD', path: '/', name: 'ping' },
    { method: 'HEAD', path: '/_alias/{name}', name: 'indices.exists_alias' },
    { method: 'HEAD', path: '/{index}/_alias/{name}', name: 'indices.exists_alias' },
    { method: 'HEAD', path: '/{index}/_mapping/{type}', name: 'indices.exists_type' },
    { method: 'HEAD', path: '/{index}/_source/{id}', name: 'exists_source' },
    { method: 'HEAD', path: '/{index}/{type}/{id}/_source', name: 'exists_source' },
    { method: 'POST', path: '/_aliases', name: 'indices.update_aliases' },
    { method: 'POST', path: '/_analyze', name: 'indices.analyze' },
    { method: 'POST', path: '/_async_search', name: 'async_search.submit' },
    { method: 'POST', path: '/_bulk', name: 'bulk' },
    { method: 'POST', path: '/_count', name: 'count' },
    { method: 'POST', path: '/_delete_by_query/{task_id}/_rethrottle', name: 'delete_by_query_rethrottle' },
    { method: 'POST', path: '/_field_caps', name: 'field_caps' },
    { method: 'POST', path: '/_fleet/_fleet_msearch', name: 'fleet.msearch' },
    { method: 'POST', path: '/_flush', name: 'indices.flush' },
    { method: 'POST', path: '/_flush/synced', name: 'indices.flush_synced' },
    { method: 'POST', path: '/_forcemerge', name: 'indices.forcemerge' },
    { method: 'POST', path: '/_mapping/{type}', name: 'indices.put_mapping' },
    { method: 'POST', path: '/_mappings/{type}', name: 'indices.put_mapping' },
    { method: 'POST', path: '/_mget', name: 'mget' },
    { method: 'POST', path: '/_ml/anomaly_detectors/{job_id}/_close', name: 'ml.close_job' },
    { method: 'POST', path: '/_ml/anomaly_detectors/{job_id}/_flush', name: 'ml.flush_job' },
    { method: 'POST', path: '/_ml/anomaly_detectors/{job_id}/_open', name: 'ml.open_job' },
    { method: 'POST', path: '/_msearch', name: 'msearch' },
    { method: 'POST', path: '/_msearch/template', name: 'msearch_template' },
    { method: 'POST', path: '/_mtermvectors', name: 'mtermvectors' },
    { method: 'POST', path: '/_nodes/reload_secure_settings', name: 'nodes.reload_secure_settings' },
    { method: 'POST', path: '/_nodes/{node_id}/reload_secure_settings', name: 'nodes.reload_secure_settings' },
    { method: 'POST', path: '/_refresh', name: 'indices.refresh' },
    { method: 'POST', path: '/_reindex/{task_id}/_rethrottle', name: 'reindex_rethrottle' },
    { method: 'POST', path: '/_render/template', name: 'render_search_template' },
    { method: 'POST', path: '/_render/template/{id}', name: 'render_search_template' },
    { method: 'POST', path: '/_search', name: 'search' },
    { method: 'POST', path: '/_search/scroll', name: 'scroll' },
    { method: 'POST', path: '/_search/scroll/{scroll_id}', name: 'scroll' },
    { method: 'POST', path: '/_search/template', name: 'search_template' },
    { method: 'POST', path: '/_search_shards', name: 'search_shards' },
    { method: 'POST', path: '/_searchable_snapshots/cache/clear', name: 'searchable_snapshots.clear_cache' },
    { method: 'POST', path: '/_security/_query/api_key', name: 'security.query_api_keys' },
    { method: 'POST', path: '/_security/api_key/_bulk_update', name: 'security.bulk_update_api_keys' },
    { method: 'POST', path: '/_security/role_mapping/{name}', name: 'security.put_role_mapping' },
    { method: 'POST', path: '/_snapshot/{repository}/_analyze', name: 'snapshot.repository_analyze' },
    { method: 'POST', path: '/_update_by_query/{task_id}/_rethrottle', name: 'update_by_query_rethrottle' },
    { method: 'POST', path: '/_validate/query', name: 'indices.validate_query' },
    { method: 'POST', path: '/_watcher/_query/watches', name: 'watcher.query_watches' },
    { method: 'POST', path: '/{alias}/_rollover', name: 'indices.rollover' },
    { method: 'POST', path: '/{alias}/_rollover/{new_index}', name: 'indices.rollover' },
    { method: 'POST', path: '/{index}/_alias/{name}', name: 'indices.put_alias' },
    { method: 'POST', path: '/{index}/_aliases/{name}', name: 'indices.put_alias' },
    { method: 'POST', path: '/{index}/_analyze', name: 'indices.analyze' },
    { method: 'POST', path: '/{index}/_async_search', name: 'async_search.submit' },
    { method: 'POST', path: '/{index}/_bulk', name: 'bulk' },
    { method: 'POST', path: '/{index}/_close', name: 'indices.close' },
    { method: 'POST', path: '/{index}/_count', name: 'count' },
    { method: 'POST', path: '/{index}/_delete_by_query', name: 'delete_by_query' },
    { method: 'POST', path: '/{index}/_field_caps', name: 'field_caps' },
    { method: 'POST', path: '/{index}/_fleet/_fleet_msearch', name: 'fleet.msearch' },
    { method: 'POST', path: '/{index}/_fleet/_fleet_search', name: 'fleet.search' },
    { method: 'POST', path: '/{index}/_flush', name: 'indices.flush' },
    { method: 'POST', path: '/{index}/_flush/synced', name: 'indices.flush_synced' },
    { method: 'POST', path: '/{index}/_forcemerge', name: 'indices.forcemerge' },
    { method: 'POST', path: '/{index}/_graph/explore', name: 'graph.explore' },
    { method: 'POST', path: '/{index}/_knn_search', name: 'knn_search' },
    { method: 'POST', path: '/{index}/_mapping', name: 'indices.put_mapping' },
    { method: 'POST', path: '/{index}/_mapping/{type}', name: 'indices.put_mapping' },
    { method: 'POST', path: '/{index}/_mappings', name: 'indices.put_mapping' },
    { method: 'POST', path: '/{index}/_mappings/{type}', name: 'indices.put_mapping' },
    { method: 'POST', path: '/{index}/_mget', name: 'mget' },
    { method: 'POST', path: '/{index}/_msearch', name: 'msearch' },
    { method: 'POST', path: '/{index}/_msearch/template', name: 'msearch_template' },
    { method: 'POST', path: '/{index}/_mtermvectors', name: 'mtermvectors' },
    { method: 'POST', path: '/{index}/_open', name: 'indices.open' },
    { method: 'POST', path: '/{index}/_refresh', name: 'indices.refresh' },
    { method: 'POST', path: '/{index}/_reload_search_analyzers', name: 'indices.reload_search_analyzers' },
    { method: 'POST', path: '/{index}/_rollup_search', name: 'rollup.rollup_search' },
    { method: 'POST', path: '/{index}/_search', name: 'search' },
    { method: 'POST', path: '/{index}/_search/template', name: 'search_template' },
    { method: 'POST', path: '/{index}/_search_shards', name: 'search_shards' },
    { method: 'POST', path: '/{index}/_searchable_snapshots/cache/clear', name: 'searchable_snapshots.clear_cache' },
    { method: 'POST', path: '/{index}/_shrink/{target}', name: 'indices.shrink' },
    { method: 'POST', path: '/{index}/_termvectors', name: 'termvectors' },
    { method: 'POST', path: '/{index}/_termvectors/{id}', name: 'termvectors' },
    { method: 'POST', path: '/{index}/_update_by_query', name: 'update_by_query' },
    { method: 'POST', path: '/{index}/_validate/query', name: 'indices.validate_query' },
    { method: 'POST', path: '/{index}/{type}/_bulk', name: 'bulk' },
    { method: 'POST', path: '/{index}/{type}/_count', name: 'count' },
    { method: 'POST', path: '/{index}/{type}/_delete_by_query', name: 'delete_by_query' },
    { method: 'POST', path: '/{index}/{type}/_graph/explore', name: 'graph.explore' },
    { method: 'POST', path: '/{index}/{type}/_mapping', name: 'indices.put_mapping' },
    { method: 'POST', path: '/{index}/{type}/_mappings', name: 'indices.put_mapping' },
    { method: 'POST', path: '/{index}/{type}/_mget', name: 'mget' },
    { method: 'POST', path: '/{index}/{type}/_msearch', name: 'msearch' },
    { method: 'POST', path: '/{index}/{type}/_msearch/template', name: 'msearch_template' },
    { method: 'POST', path: '/{index}/{type}/_mtermvectors', name: 'mtermvectors' },
    { method: 'POST', path: '/{index}/{type}/_rollup_search', name: 'rollup.rollup_search' },
    { method: 'POST', path: '/{index}/{type}/_search', name: 'search' },
    { method: 'POST', path: '/{index}/{type}/_search/template', name: 'search_template' },
    { method: 'POST', path: '/{index}/{type}/_termvectors', name: 'termvectors' },
    { method: 'POST', path: '/{index}/{type}/_update_by_query', name: 'update_by_query' },
    { method: 'POST', path: '/{index}/{type}/_validate/query', name: 'indices.validate_query' },
    { method: 'POST', path: '/{index}/{type}/{id}/_termvectors', name: 'termvectors' },
    { method: 'PUT', path: '/_bulk', name: 'bulk' },
    { method: 'PUT', path: '/_cluster/settings', name: 'cluster.put_settings' },
    { method: 'PUT', path: '/_mapping/{type}', name: 'indices.put_mapping' },
    { method: 'PUT', path: '/_mappings/{type}', name: 'indices.put_mapping' },
    {
      method: 'PUT',
      path: '/_ml/trained_models/{model_id}/model_aliases/{model_alias}',
      name: 'ml.put_trained_model_alias'
    },
    { method: 'PUT', path: '/_security/role_mapping/{name}', name: 'security.put_role_mapping' },
    { method: 'PUT', path: '/_settings', name: 'indices.put_settings' },
    { method: 'PUT', path: '/{index}/_alias/{name}', name: 'indices.put_alias' },
    { method: 'PUT', path: '/{index}/_aliases/{name}', name: 'indices.put_alias' },
    { method: 'PUT', path: '/{index}/_bulk', name: 'bulk' },
    { method: 'PUT', path: '/{index}/_mapping', name: 'indices.put_mapping' },
    { method: 'PUT', path: '/{index}/_mapping/{type}', name: 'indices.put_mapping' },
    { method: 'PUT', path: '/{index}/_mappings', name: 'indices.put_mapping' },
    { method: 'PUT', path: '/{index}/_mappings/{type}', name: 'indices.put_mapping' },
    { method: 'PUT', path: '/{index}/_settings', name: 'indices.put_settings' },
    { method: 'PUT', path: '/{index}/_shrink/{target}', name: 'indices.shrink' },
    { method: 'PUT', path: '/{index}/{type}/_bulk', name: 'bulk' },
    { method: 'PUT', path: '/{index}/{type}/_mapping', name: 'indices.put_mapping' },
    { method: 'PUT', path: '/{index}/{type}/_mappings', name: 'indices.put_mapping' }
  ]

  const t = new Trees()

  for (const route of routes) {
    t.Insert(route.method, route.path, route.name)
  }

  return t
}
