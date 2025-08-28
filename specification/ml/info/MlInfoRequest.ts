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
 * Get machine learning information.
 * Get defaults and limits used by machine learning.
 * This endpoint is designed to be used by a user interface that needs to fully
 * understand machine learning configurations where some options are not
 * specified, meaning that the defaults should be used. This endpoint may be
 * used to find out what those defaults are. It also provides information about
 * the maximum size of machine learning jobs that could run in the current
 * cluster configuration.
 * @rest_spec_name ml.info
 * @availability stack since=6.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_ml
 * @doc_id get-ml-info
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/info'
      methods: ['GET']
    }
  ]
}
