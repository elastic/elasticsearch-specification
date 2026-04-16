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
    autoscaling: {
      displayName: 'Autoscaling',
      description: 'The autoscaling APIs enable you to create and manage autoscaling policies and retrieve information about autoscaling capacity. Autoscaling adjusts resources based on demand. A deployment can use autoscaling to scale resources as needed, ensuring sufficient capacity to meet workload requirements.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/deploy-manage/autoscaling',
        description: 'Learn more about autoscaling.'
      }
    },
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
      externalDocs: {
        url: 'https://www.elastic.co/docs/deploy-manage/distributed-architecture/discovery-cluster-formation/cluster-state-overview',
        description: 'Learn more about the cluster state.'
      }
    },
    health_report: {
      displayName: 'Cluster - Health',
      description: 'The cluster - health API provides you a report with the health status of an Elasticsearch cluster.'
    },
    connector: {
      displayName: 'Connector',
      description: 'The connector and sync jobs APIs provide a convenient way to create and manage Elastic connectors and sync jobs in an internal index.\n\nConnectors are Elasticsearch integrations for syncing content from third-party data sources, which can be deployed on Elastic Cloud or hosted on your own infrastructure.\n\nThis API provides an alternative to relying solely on Kibana UI for connector and sync job management. The API comes with a set of validations and assertions to ensure that the state representation in the internal index remains valid.\n\nThis API requires the `manage_connector` privilege or, for read-only endpoints, the `monitor_connector` privilege.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/reference/search-connectors/api-tutorial',
        description: 'Check out the connector API tutorial.'
      }
    },
    ccr: {
      displayName: 'Cross-cluster replication',
      description: 'The cross-cluster replication (CCR) APIs let you run replication operations, such as creating and managing follower indices or auto-follow patterns. Use CCR to replicate indices across clusters to maintain search availability during outages, reduce indexing impact, and lower search latency by serving requests closer to users.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/deploy-manage/tools/cross-cluster-replication',
        description: 'Learn more about cross-cluster replication.'
      }
    },
    'data stream': {
      displayName: 'Data stream',
      description: 'The data stream APIs enable you to create and manage data streams and data stream lifecycles. A data stream lets you store append-only time series data across multiple indices while giving you a single named resource for requests. Data streams are well-suited for logs, events, metrics, and other continuously generated data.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/manage-data/data-store/data-streams',
        description: 'Learn more about data streams.'
      }
    },
    document: {
      displayName: 'Document',
      description: 'The document APIs enable you to create and manage documents in an Elasticsearch index.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/deploy-manage/distributed-architecture/reading-and-writing-documents',
        description: 'Learn more about reading and writing documents.'
      }
    },
    enrich: {
      displayName: 'Enrich',
      description: 'The enrich APIs enable you to manage enrich policies. An enrich policy is a set of configuration options used to add the right enrich data to the right incoming documents.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/manage-data/ingest/transform-enrich/data-enrichment',
        description: 'Learn more about data enrichment.'
      }
    },
    eql: {
      displayName: 'EQL',
      description: 'Event Query Language (EQL) is a query language for event-based time series data, such as logs, metrics, and traces.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/explore-analyze/query-filter/languages/eql',
        description: 'Learn more about EQL.'
      }
    },
    esql: {
      displayName: 'ES|QL',
      description: 'The Elasticsearch Query Language (ES|QL) provides a powerful way to filter, transform, and analyze data stored in Elasticsearch, and in the future in other runtimes.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/explore-analyze/query-filter/languages/esql',
        description: 'Learn more about ES|QL.'
      }
    },
    features: {
      displayName: 'Features',
      description: 'The features APIs retrieve information about the features that are currently enabled and available on the node.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/rest-api/common-parms#common-options',
        description: 'Learn more about the response filtering parameters.'
      }
    },
    fleet: {
      displayName: 'Fleet',
      description: 'The fleet APIs provide a convenient way to manage global search applications and associated alias or indices.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/deploy-manage/search/search-applications',
        description: 'Learn more about search applications.'
      }
    },
    graph: {
      displayName: 'Graph',
      description: 'The graph explore API enables you to extract and summarize information about the documents and terms in an Elasticsearch index.'
    },
    indices: {
      displayName: 'Index',
      description: 'Index APIs are used to manage individual indices, index settings, aliases, mappings, and index templates.'
    },
    ilm: {
      displayName: 'Index lifecycle management',
      description: 'You can use the index lifecycle management (ILM) APIs to create and manage policies to automatically manage the lifecycle of your Elasticsearch indices.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/deploy-manage/indexed-data/index-lifecycle-automation',
        description: 'Learn more about ILM.'
      }
    },
    inference: {
      displayName: 'Inference',
      description: 'The inference APIs enable you to use machine learning models for inference. The inference feature enables you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Mistral, or Hugging Face.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/machine-learning/machine-learning-apis/inference-apis',
        description: 'Learn more about the inference APIs.'
      }
    },
    info: {
      displayName: 'Info',
      description: 'Get basic information about the cluster.'
    },
    ingest: {
      displayName: 'Ingest',
      description: 'The ingest APIs enable you to manage ingest pipelines. An ingest pipeline is a series of processors that are executed on documents before they are indexed.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/manage-data/ingest/ingest-pipelines',
        description: 'Learn more about ingest pipelines.'
      }
    },
    license: {
      displayName: 'License',
      description: 'You can use the license APIs to manage your Elasticsearch license.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/license-management',
        description: 'Learn more about license management.'
      }
    },
    logstash: {
      displayName: 'Logstash',
      description: 'The Logstash APIs enable you to manage pipelines used by Logstash Central Pipeline Management.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/deploy-manage/monitor/logstash-monitoring/configuring-logstash',
        description: 'Learn more about Logstash monitoring.'
      }
    },
    ml: {
      displayName: 'Machine learning',
      description: 'Perform machine learning activities, such as anomaly detection, data frame analytics, and natural language processing tasks.'
    },
    'ml anomaly': {
      displayName: 'Machine learning - Anomaly detection',
      description: 'The anomaly detection APIs enable you to perform the following tasks: create and manage jobs, create and manage datafeeds, manage model snapshots, obtain bucket results, obtain overall bucket results, obtain anomaly records, and obtain influencer results.'
    },
    'ml data frame': {
      displayName: 'Machine learning - Data frame analytics',
      description: 'The data frame analytics APIs enable you to perform the following tasks: create, delete, start, stop, and update data frame analytics jobs and get information about data frame analytics jobs.'
    },
    'ml trained model': {
      displayName: 'Machine learning - Trained model',
      description: 'The trained model APIs enable you to perform the following tasks: store and manage trained models, create inference processors that use these models, and use the models to infer against incoming data.'
    },
    migration: {
      displayName: 'Migration',
      description: 'The migration APIs simplify upgrading X-Pack indices from one version to another.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/upgrade',
        description: 'Learn more about upgrading Elasticsearch.'
      }
    },
    monitoring: {
      displayName: 'Monitoring',
      description: 'The monitoring APIs are used by the monitoring features to collect monitoring data.'
    },
    shutdown: {
      displayName: 'Node shutdown',
      description: 'The node shutdown APIs enable you to prepare nodes for temporary or permanent shutdown.'
    },
    project: {
      displayName: 'Project',
      description: 'Projects provide a way to organize related resources within a serverless instance.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/serverless/elasticsearch/get-started/projects',
        description: 'Learn more about projects.'
      }
    },
    query_rules: {
      displayName: 'Query rules',
      description: 'The query rules APIs manage query rules. Query rules are configurations that customize query behavior for specific queries, promoting or excluding specific documents at query time.\n\nThere are different types of query rules:\n\n- Pinned queries: Promote or exclude specific documents for a given query.\n- Organic results: Add additional queries to be executed along with the provided query.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/explore-analyze/search-relevance',
        description: 'Learn more about search relevance.'
      }
    },
    random_sample: {
      displayName: 'Random sampling',
      description: 'The random sampling APIs enable you to create, configure, and manage random samples of your data. Use these APIs to obtain representative subsets of your indices for analysis, testing, or data exploration purposes.'
    },
    rollup: {
      displayName: 'Rollup',
      description: 'The rollup APIs enable you to summarize historical data and store the summaries in a separate index. Once you have rolled up historical data, you can use the rollup search API to search both live, real-time data and the rolled-up data with a single query.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/manage-data/data-tiers/data-tier-rollups',
        description: 'Learn more about rollup.'
      }
    },
    script: {
      displayName: 'Scripting',
      description: 'The script APIs enable you to manage stored scripts and script contexts.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/scripting',
        description: 'Learn more about scripting.'
      }
    },
    search: {
      displayName: 'Search',
      description: 'The search APIs are used to search and aggregate data stored in Elasticsearch indices and data streams.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/explore-analyze/search',
        description: 'Learn more about search.'
      }
    },
    search_application: {
      displayName: 'Search Application',
      description: 'The search application APIs provide a convenient way to leverage the power of Elasticsearch for your search applications.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/deploy-manage/search/search-applications',
        description: 'Learn more about search applications.'
      }
    },
    searchable_snapshots: {
      displayName: 'Searchable snapshots',
      description: 'The searchable snapshots APIs are used to mount snapshots as searchable indices.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/manage-data/data-tiers/searchable-snapshots',
        description: 'Learn more about searchable snapshots.'
      }
    },
    security: {
      displayName: 'Security',
      description: 'The security APIs enable you to manage users and their roles, manage and invalidate API keys, and manage application privileges.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/secure',
        description: 'Learn more about securing Elasticsearch.'
      }
    },
    snapshot: {
      displayName: 'Snapshot and restore',
      description: 'The snapshot and restore APIs are used to take snapshots of running clusters. Snapshots are backups of individual indices or entire clusters.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/manage-data/backup-restore/snapshot-restore',
        description: 'Learn more about snapshot and restore.'
      }
    },
    slm: {
      displayName: 'Snapshot lifecycle management',
      description: 'Snapshot lifecycle management (SLM) enables you to automatically take snapshots and control how long they are kept.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/manage-data/backup-restore/snapshot-lifecycle-management',
        description: 'Learn more about SLM.'
      }
    },
    sql: {
      displayName: 'SQL',
      description: 'Elasticsearch SQL is an X-Pack component that allows SQL-like queries to be executed in real-time against Elasticsearch.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/explore-analyze/query-filter/languages/sql',
        description: 'Learn more about Elasticsearch SQL.'
      }
    },
    synonyms: {
      displayName: 'Synonyms',
      description: 'The synonyms APIs provide a convenient way to manage synonyms sets used with the synonym graph token filter.\n\nSynonyms are sets of words or phrases that are treated as equivalent during search. For example, a search for "great" also matches documents containing "excellent", "wonderful", "terrific", and so on.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/text-analysis/token-filters/synonym-token-filter',
        description: 'Learn more about the synonym token filter.'
      }
    },
    tasks: {
      displayName: 'Task management',
      description: 'The task management APIs enable you to get information about the tasks currently running on one or more nodes in the cluster.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/rest-api/common-parms#task-management',
        description: 'Learn more about task management parameters.'
      }
    },
    text_structure: {
      displayName: 'Text structure',
      description: 'The text structure APIs enable you to analyze the structure of text files. The structure that is found can then be used to create an ingest pipeline to index similar files into an Elasticsearch index.'
    },
    transform: {
      displayName: 'Transform',
      description: 'Transforms enable you to retrieve information from source indices, process it, and store it in destination indices.\n\nFor example, you can use transforms to pivot your data into entity-centric indices that summarize the behavior of users or sessions or other entities in your data.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/manage-data/ingest/transform-enrich/transforms',
        description: 'Learn more about transforms.'
      }
    },
    xpack: {
      displayName: 'Usage',
      description: 'The usage APIs enable you to get comprehensive information about the installed X-Pack features in your cluster and the usage of the features.'
    },
    watcher: {
      displayName: 'Watcher',
      description: 'The watcher APIs provide an interface to manage watches and the Elasticsearch Watcher service.',
      externalDocs: {
        url: 'https://www.elastic.co/docs/monitor-warnings-errors/watcher',
        description: 'Learn more about Watcher.'
      }
    }
  }

  return model
}
