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

import { RequestBase } from '@_types/Base'
import { integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { MediaType } from '@_types/common'

/**
 * Get the cluster health.
 *
 * Get a report with the health status of an Elasticsearch cluster.
 * The report contains a list of indicators that compose Elasticsearch functionality.
 *
 * Each indicator has a health status of: green, unknown, yellow or red.
 * The indicator will provide an explanation and metadata describing the reason for its current health status.
 *
 * The cluster’s status is controlled by the worst indicator status.
 *
 * In the event that an indicator’s status is non-green, a list of impacts may be present in the indicator result which detail the functionalities that are negatively affected by the health issue.
 * Each impact carries with it a severity level, an area of the system that is affected, and a simple description of the impact on the system.
 *
 * Some health indicators can determine the root cause of a health problem and prescribe a set of steps that can be performed in order to improve the health of the system.
 * The root cause and remediation steps are encapsulated in a diagnosis.
 * A diagnosis contains a cause detailing a root cause analysis, an action containing a brief description of the steps to take to fix the problem, the list of affected resources (if applicable), and a detailed step-by-step troubleshooting guide to fix the diagnosed problem.
 *
 * NOTE: The health indicators perform root cause analysis of non-green health statuses. This can be computationally expensive when called frequently.
 * When setting up automated polling of the API for health status, set verbose to false to disable the more expensive analysis logic.
 * @rest_spec_name health_report
 * @availability stack since=8.7.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id health-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_health_report'
      methods: ['GET']
    },
    {
      path: '/_health_report/{feature}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A feature of the cluster, as returned by the top-level health report API.
     */
    feature?: string | string[]
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Explicit operation timeout.
     */
    timeout?: Duration
    /**
     * Opt-in for more information about the health of the system.
     * @server_default true
     */
    verbose?: boolean
    /**
     * Limit the number of affected resources the health report API returns.
     * @server_default 1000
     */
    size?: integer
  }
}
