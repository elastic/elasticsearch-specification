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

/**
 * Get information.
 * The information provided by the API includes:
 *
 * * Build information including the build number and timestamp.
 * * License information about the currently installed license.
 * * Feature information for the features that are currently enabled and available under the current license.
 * @rest_spec_name xpack.info
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor
 * @doc_id info-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_xpack'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * A comma-separated list of the information categories to include in the response.
     * For example, `build,license,features`.
     */
    categories?: XPackCategory[]
    /**
     * If used, this otherwise ignored parameter must be set to true
     * @deprecated 8.0.0 Supported for backwards compatibility with 7.x
     */
    accept_enterprise?: boolean
    /**
     * Defines whether additional human-readable information is included in the response.
     * In particular, it adds descriptions and a tag line.
     * @server_default true
     */
    human?: boolean
  }
}

export enum XPackCategory {
  build,
  features,
  license
}
