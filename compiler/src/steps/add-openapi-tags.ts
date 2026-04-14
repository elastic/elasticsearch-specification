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

import * as model from '../model/metamodel'
import { readFileSync } from 'fs'
import { join } from 'path'

/**
 * Loads the doc IDs CSV file and returns the parsed data
 */
function loadDocIds (): string[][] {
  return readFileSync(join(__dirname, '..', '..', '..', 'specification', '_doc_ids', 'table.csv'), 'utf8')
    .split('\n')
    .map(line => line.split(','))
}

/**
 * Gets the documentation URL for a given doc ID from the CSV
 */
function getDocUrl (docId: string): string | null {
  const docIds = loadDocIds()
  const entry = docIds.find(row => row[0] === docId)
  return (entry != null) ? entry[1].replace(/\r/g, '') : null
}

/**
 * Creates external documentation object using CSV lookup only
 * Emits warning if doc ID not found and returns undefined
 */
function createExternalDocs (docId: string): { url: string, description: string } | undefined {
  const csvUrl = getDocUrl(docId)

  if (csvUrl === null) {
    console.warn(`Warning: Doc ID '${docId}' not found in _doc_ids/table.csv - omitting externalDocs`)
    return undefined
  }

  return {
    url: csvUrl,
    description: 'Learn more.'
  }
}

/**
 * Adds OpenAPI tag metadata to the model. This metadata includes display names,
 * descriptions, and external documentation links for all API tags.
 */
export default async function addOpenApiTags (model: model.Model): Promise<model.Model> {
  if (model._openapi == null) {
    model._openapi = {}
  }

  // Add tag metadata extracted from elasticsearch-shared-overlays.yaml
  model._openapi.tagMetadata = {
    analytics: {
      displayName: 'Behavioral analytics',
      description: 'The behavioral analytics APIs let you create and manage analytics collections and view their data. Use them to analyze users\' search and click behavior, improve result relevance, and identify content gaps.'
    },
    cat: {
      displayName: 'Compact and aligned text (CAT)',
      description: 'The compact and aligned text (CAT) APIs aim are intended only for human consumption using the Kibana console or command line. They are not intended for use by applications. For application consumption, it\'s recommend to use a corresponding JSON API.\n\nAll the cat commands accept a query string parameter `help` to see all the headers and info they provide, and the `/_cat` command alone lists all the available commands.'
    },
    cluster: {
      displayName: 'Cluster',
      description: 'The cluster APIs enable you to retrieve information about your infrastructure on cluster, node, or shard level. You can manage cluster settings and voting configuration exceptions, collect node statistics and retrieve node information.',
      externalDocs: createExternalDocs('cluster-state-overview')
    },
    health_report: {
      displayName: 'Cluster - Health',
      description: 'The cluster - health API provides you a report with the health status of an Elasticsearch cluster.'
    },
    connector: {
      displayName: 'Connector',
      description: 'The connector and sync jobs APIs provide a convenient way to create and manage Elastic connectors and sync jobs in an internal index.\n\nConnectors are Elasticsearch integrations for syncing content from third-party data sources, which can be deployed on Elastic Cloud or hosted on your own infrastructure.\n\nThis API provides an alternative to relying solely on Kibana UI for connector and sync job management. The API comes with a set of validations and assertions to ensure that the state representation in the internal index remains valid.\n\nThis API requires the `manage_connector` privilege or, for read-only endpoints, the `monitor_connector` privilege.',
      externalDocs: createExternalDocs('connector-api-tutorial')
    },
    ccr: {
      displayName: 'Cross-cluster replication',
      description: 'The cross-cluster replication (CCR) APIs let you run replication operations, such as creating and managing follower indices or auto-follow patterns. Use CCR to replicate indices across clusters to maintain search availability during outages, reduce indexing impact, and lower search latency by serving requests closer to users.',
      externalDocs: createExternalDocs('ccr')
    },
    'data stream': {
      displayName: 'Data stream',
      description: 'The data stream APIs enable you to create and manage data streams and data stream lifecycles. A data stream lets you store append-only time series data across multiple indices while giving you a single named resource for requests. Data streams are well-suited for logs, events, metrics, and other continuously generated data.',
      externalDocs: createExternalDocs('data-streams')
    },
    document: {
      displayName: 'Document',
      description: 'The document APIs enable you to create and manage documents in an Elasticsearch index.',
      externalDocs: createExternalDocs('document-reading')
    },
    enrich: {
      displayName: 'Enrich',
      description: 'The enrich APIs enable you to manage enrich policies. An enrich policy is a set of configuration options used to add the right enrich data to the right incoming documents.',
      externalDocs: createExternalDocs('enrich-data')
    },
    eql: {
      displayName: 'EQL',
      description: 'Event Query Language (EQL) is a query language for event-based time series data, such as logs, metrics, and traces.',
      externalDocs: createExternalDocs('eql')
    },
    esql: {
      displayName: 'ES|QL',
      description: 'The Elasticsearch Query Language (ES|QL) provides a powerful way to filter, transform, and analyze data stored in Elasticsearch, and in the future in other runtimes.',
      externalDocs: createExternalDocs('esql')
    },
    features: {
      displayName: 'Features',
      description: 'The features APIs retrieve information about the features that are currently enabled and available on the node.',
      externalDocs: createExternalDocs('snapshot-restore-feature-state')
    },
    fleet: {
      displayName: 'Fleet',
      description: 'The Fleet APIs support Fleet\'s use of Elasticsearch as a data store for internal agent and action data.',
      externalDocs: createExternalDocs('fleet')
    },
    graph: {
      displayName: 'Graph explore',
      description: 'The graph explore API enables you to extract and summarize information about the documents and terms in an Elasticsearch index.',
      externalDocs: createExternalDocs('graph')
    },
    indices: {
      displayName: 'Index',
      description: 'Index APIs are used to manage individual indices, index settings, aliases, mappings, and index templates.',
      externalDocs: createExternalDocs('index-basics')
    },
    ilm: {
      displayName: 'Index lifecycle management',
      description: 'You can use the index lifecycle management (ILM) APIs to create and manage policies to automatically manage the lifecycle of your Elasticsearch indices.',
      externalDocs: createExternalDocs('ilm-index-lifecycle')
    },
    inference: {
      displayName: 'Inference',
      description: 'Inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.',
      externalDocs: createExternalDocs('inference-api')
    },
    info: {
      displayName: 'Info',
      description: 'Get basic information about the cluster.'
    },
    ingest: {
      displayName: 'Ingest',
      description: 'Ingest APIs enable you to manage tasks and resources related to ingest pipelines and processors.',
      externalDocs: createExternalDocs('ingest')
    },
    license: {
      displayName: 'Licensing',
      description: 'Licensing APIs enable you to manage your licenses.',
      externalDocs: createExternalDocs('subscriptions')
    },
    logstash: {
      displayName: 'Logstash',
      description: 'Logstash APIs enable you to manage pipelines that are used by Logstash Central Management.',
      externalDocs: createExternalDocs('logstash-centralized-pipeline-management')
    },
    ml: {
      displayName: 'Machine learning',
      description: 'Perform machine learning activities, such as anomaly detection, data frame analytics, and natural language processing tasks.',
      externalDocs: createExternalDocs('ml')
    },
    'ml anomaly': {
      displayName: 'Machine learning anomaly detection',
      description: 'The machine learning anomaly detection APIs enable you to perform anomaly detection activities.',
      externalDocs: createExternalDocs('ml-anomalies')
    },
    'ml data frame': {
      displayName: 'Machine learning data frame analytics',
      description: 'The machine learning data frame analytics APIs enable you to perform data frame analytics activities.',
      externalDocs: createExternalDocs('ml-dfa')
    },
    'ml trained model': {
      displayName: 'Machine learning trained model',
      description: 'The machine learning trained models APIs enable you to perform model management operations.',
      externalDocs: createExternalDocs('ml-nlp')
    },
    migration: {
      displayName: 'Migration',
      description: 'The migration APIs power Kibana\'s Upgrade Assistant feature.',
      externalDocs: createExternalDocs('upgrade-assistant')
    },
    project: {
      displayName: 'Project',
      description: 'The project APIs enable you to get project tags and manage your project routing expressions.'
    },
    query_rules: {
      displayName: 'Query rules',
      description: 'Query rules enable you to configure per-query rules that are applied at query time to queries that match the specific rule. Query rules are organized into rulesets, collections of query rules that are matched against incoming queries. Query rules are applied using the rule query. If a query matches one or more rules in the ruleset, the query is re-written to apply the rules before searching. This allows pinning documents for only queries that match a specific term. Alternatively, you can use the Query Rules UI to manage query rules.',
      externalDocs: createExternalDocs('query-rule')
    },
    random_sample: {
      displayName: 'Random sampling',
      description: 'The random sampling APIs enable you to create, configure, and manage random samples of your data. Use these APIs to obtain representative subsets of your indices for analysis, testing, or data exploration purposes.'
    },
    rollup: {
      displayName: 'Rollup',
      description: 'The rollup APIs enable you to create, manage, and retrieve information about rollup jobs.',
      externalDocs: createExternalDocs('xpack-rollup')
    },
    script: {
      displayName: 'Scripting',
      description: 'Use the script support APIs to get a list of supported script contexts and languages. Use the stored script APIs to manage stored scripts and search templates.',
      externalDocs: createExternalDocs('modules-scripting')
    },
    search: {
      displayName: 'Search',
      description: 'The search APIs are used to search and aggregate data stored in Elasticsearch indices and data streams.',
      externalDocs: createExternalDocs('search-approach')
    },
    search_application: {
      displayName: 'Search application',
      description: 'The search application APIs provide a convenient way to leverage the power of Elasticsearch for your search applications.',
      externalDocs: createExternalDocs('search-applications')
    },
    searchable_snapshots: {
      displayName: 'Searchable snapshots',
      description: 'The searchable snapshots APIs are used to mount snapshots as searchable indices.',
      externalDocs: createExternalDocs('searchable-snapshots')
    },
    security: {
      displayName: 'Security',
      description: 'The security APIs enable you to manage users and their roles, manage and invalidate API keys, and manage application privileges.',
      externalDocs: createExternalDocs('security')
    },
    snapshot: {
      displayName: 'Snapshot and restore',
      description: 'The snapshot and restore APIs are used to take snapshots of running clusters. Snapshots are backups of individual indices or entire clusters.',
      externalDocs: createExternalDocs('modules-snapshots')
    },
    slm: {
      displayName: 'Snapshot lifecycle management',
      description: 'Snapshot lifecycle management (SLM) enables you to automatically take snapshots and control how long they are kept.',
      externalDocs: createExternalDocs('snapshot-create')
    },
    sql: {
      displayName: 'SQL',
      description: 'Elasticsearch\'s SQL APIs enable you to run SQL queries on Elasticsearch indices and data streams.',
      externalDocs: createExternalDocs('sql')
    },
    streams: {
      displayName: 'Streams'
    },
    synonyms: {
      displayName: 'Synonyms',
      description: 'The synonyms management API provides a convenient way to define and manage synonyms in an internal system index. Related synonyms can be grouped in a "synonyms set". Create as many synonym sets as you need.',
      externalDocs: createExternalDocs('synonyms')
    },
    tasks: {
      displayName: 'Task management',
      description: 'The task management APIs enable you to get information about the tasks currently running on one or more nodes in the cluster.',
      externalDocs: createExternalDocs('tasks-troubleshoot')
    },
    text_structure: {
      displayName: 'Text structure',
      description: 'The text structure APIs enable you to find the structure of a text field in an Elasticsearch index.'
    },
    transform: {
      displayName: 'Transform',
      description: 'The transform APIs enable you to create and manage transforms.',
      externalDocs: createExternalDocs('transforms')
    },
    xpack: {
      displayName: 'Usage',
      description: 'The usage API provides usage information about the installed X-Pack features.'
    },
    watcher: {
      displayName: 'Watcher',
      description: 'You can use Watcher to watch for changes or anomalies in your data and perform the necessary actions in response.',
      externalDocs: createExternalDocs('watcher')
    }
  }

  // Generate tag groups for x-tagGroups extension
  const tagClassifications = {
    common: ['sql', 'eql', 'esql', 'search', 'document'],
    management: [
      'autoscaling', 'ccr', 'indices', 'data stream', 'ilm', 'slm', 'cluster', 
      'rollup', 'searchable_snapshots', 'shutdown', 'snapshot', 'script', 
      'search_application', 'connector'
    ],
    info: [
      'cat', 'license', 'info', 'tasks', 'xpack', 'health_report', 
      'features', 'migration', 'watcher'
    ],
    'ai/ml': [
      'ml trained model', 'ml anomaly', 'ml data frame', 'ml', 'inference', 
      'text_structure', 'query_rules', 'analytics', 'graph'
    ],
    ingest: ['ingest', 'enrich', 'transform', 'fleet', 'logstash', 'synonyms'],
    security: ['security']
  }

  const groupDisplayNames = {
    common: 'Search & Document APIs',
    management: 'Cluster Management',
    info: 'Information & Monitoring', 
    'ai/ml': 'AI & Machine Learning',
    ingest: 'Data Processing',
    security: 'Security'
  }

  function classifyTag(tagName: string): string {
    for (const [group, tags] of Object.entries(tagClassifications)) {
      if (tags.includes(tagName)) return group
    }
    return 'other'
  }

  // Build tag groups from metadata
  const tagGroups: Array<{ name: string; tags: string[] }> = []
  const groupedTags: Record<string, string[]> = {}
  
  // Group all tags that have metadata
  if (model._openapi?.tagMetadata) {
    for (const tagName of Object.keys(model._openapi.tagMetadata)) {
      const classification = classifyTag(tagName)
      if (!groupedTags[classification]) {
        groupedTags[classification] = []
      }
      groupedTags[classification].push(tagName)
    }
  }

  // Create tag groups with user-friendly names
  for (const [groupId, tags] of Object.entries(groupedTags)) {
    if (tags.length > 0) {
      // Sort tags alphabetically within each group
      tags.sort()
      
      const groupName = groupDisplayNames[groupId as keyof typeof groupDisplayNames] || 'Other APIs'
      tagGroups.push({
        name: groupName,
        tags
      })
    }
  }

  // Sort groups by name for deterministic output
  tagGroups.sort((a, b) => a.name.localeCompare(b.name))

  if (tagGroups.length > 0) {
    model._openapi.tagGroups = tagGroups
  }

  return model
}
