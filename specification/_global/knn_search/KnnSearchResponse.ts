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

import { double, long } from '@_types/Numeric'
import { ShardStatistics } from '@_types/Stats'
import { HitsMetadata } from '@global/search/_types/hits'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class Response<TDocument> {
  body: {
    /** The milliseconds it took Elasticsearch to run the request. */
    took: long
    /**
     * If true, the request timed out before completion;
     * returned results may be partial or empty.
     */
    timed_out: boolean
    /**
     * A count of shards used for the request.
     */
    _shards: ShardStatistics
    /**
     * The returned documents and metadata.
     */
    hits: HitsMetadata<TDocument>
    /**
     * The field values for the documents. These fields
     * must be specified in the request using the `fields` parameter.
     */
    fields?: Dictionary<string, UserDefinedValue>
    /**
     * The highest returned document score. This value is null for requests
     * that do not sort by score.
     */
    max_score?: double
  }
}
