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
 * Reset the features.
 * Clear all of the state information stored in system indices by Elasticsearch features, including the security and machine learning indices.
 *
 * WARNING: Intended for development and testing use only. Do not reset features on a production cluster.
 *
 * Return a cluster to the same state as a new installation by resetting the feature state for all Elasticsearch features.
 * This deletes all state information stored in system indices.
 *
 * The response code is HTTP 200 if the state is successfully reset for all features.
 * It is HTTP 500 if the reset operation failed for any feature.
 *
 * Note that select features might provide a way to reset particular system indices.
 * Using this API resets all features, both those that are built-in and implemented as plugins.
 *
 * To list the features that will be affected, use the get features API.
 *
 * IMPORTANT: The features installed on the node you submit this request to are the features that will be reset. Run on the master node if you have any doubts about which plugins are installed on individual nodes.
 * @rest_spec_name features.reset_features
 * @availability stack since=7.12.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 */
export interface Request extends RequestBase {}
