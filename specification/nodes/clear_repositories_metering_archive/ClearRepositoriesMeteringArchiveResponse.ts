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

import { NodesResponseBase } from '@nodes/_types/NodesResponseBase'
import { RepositoryMeteringInformation } from '@nodes/_types/RepositoryMeteringInformation'
import { Dictionary } from '@spec_utils/Dictionary'
import { Name } from '@_types/common'

export class ResponseBase extends NodesResponseBase {
  /**
   * Name of the cluster. Based on the `cluster.name` setting.
   * @ext_doc_id cluster-name
   */
  cluster_name: Name
  /**
   * Contains repositories metering information for the nodes selected by the request.
   */
  nodes: Dictionary<string, RepositoryMeteringInformation>
}

export class Response {
  body: ResponseBase
}
