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

import { Field } from '@_types/common'
import { Time } from '@_types/Time'

/**
 * @variants container
 */
export class TransformRetentionPolicyContainer {
  /** Specifies that the transform uses a time field to set the retention policy. */
  time: TransformRetentionPolicy
}

export class TransformRetentionPolicy {
  /** The date field that is used to calculate the age of the document. */
  field: Field
  /** Specifies the maximum age of a document in the destination index. Documents that are older than the configured value are removed from the destination index. */
  max_age: Time
}
