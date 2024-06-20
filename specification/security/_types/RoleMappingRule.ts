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

import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Name, Names } from '@_types/common'

/**
 * @variants container
 */
export class RoleMappingRule {
  any?: RoleMappingRule[]
  all?: RoleMappingRule[]
  // `field` should have been defined as SingleKeyDictionary<String, ScalarValue|ScalarValue[]>
  // However, this was initially defined as a container with a limited number of variants,
  // and was later made non_exhaustive to limit breaking changes.
  field?: FieldRule
  except?: RoleMappingRule
}

/**
 * @variants container
 * @non_exhaustive
 */
export class FieldRule {
  username?: Names
  dn?: Names
  groups?: Names
}
