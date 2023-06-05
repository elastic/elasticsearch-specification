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
import { Void } from '@spec_utils/VoidValue'

/**
 * The cluster remote info API allows you to retrieve all of the configured
 * remote cluster information. It returns connection and endpoint information
 * keyed by the configured remote cluster alias.
 * @rest_spec_name cluster.remote_info
 * @availability stack since=6.1.0 stability=stable
 * @doc_id cluster-remote-info
 */
export interface Request extends RequestBase {}
