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

import { NodeName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class Response {
  body: {
    policies: Dictionary<string, AutoscalingDeciders>
  }
}

export class AutoscalingDeciders {
  required_capacity: AutoscalingCapacity
  current_capacity: AutoscalingCapacity
  current_nodes: AutoscalingNode[]
  deciders: Dictionary<string, AutoscalingDecider>
}

export class AutoscalingCapacity {
  node: AutoscalingResources
  total: AutoscalingResources
}

export class AutoscalingResources {
  storage: integer
  memory: integer
}

export class AutoscalingNode {
  name: NodeName
}

export class AutoscalingDecider {
  required_capacity: AutoscalingCapacity
  reason_summary?: string
  reason_details?: UserDefinedValue
}
