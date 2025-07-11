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
import { Id } from '@_types/common'
import { DateTime, Duration } from '@_types/Time'

/**
 * Start datafeeds.
 *
 * A datafeed must be started in order to retrieve data from Elasticsearch. A datafeed can be started and stopped
 * multiple times throughout its lifecycle.
 *
 * Before you can start a datafeed, the anomaly detection job must be open. Otherwise, an error occurs.
 *
 * If you restart a stopped datafeed, it continues processing input data from the next millisecond after it was stopped.
 * If new data was indexed for that exact millisecond between stopping and starting, it will be ignored.
 *
 * When Elasticsearch security features are enabled, your datafeed remembers which roles the last user to create or
 * update it had at the time of creation or update and runs the query using those same roles. If you provided secondary
 * authorization headers when you created or updated the datafeed, those credentials are used instead.
 * @rest_spec_name ml.start_datafeed
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-start-datafeed
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/datafeeds/{datafeed_id}/_start'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase
     * alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric
     * characters.
     */
    datafeed_id: Id
  }
  query_parameters: {
    /**
     * The time that the datafeed should end, which can be specified by using one of the following formats:
     *
     * * ISO 8601 format with milliseconds, for example `2017-01-22T06:00:00.000Z`
     * * ISO 8601 format without milliseconds, for example `2017-01-22T06:00:00+00:00`
     * * Milliseconds since the epoch, for example `1485061200000`
     *
     * Date-time arguments using either of the ISO 8601 formats must have a time zone designator, where `Z` is accepted
     * as an abbreviation for UTC time. When a URL is expected (for example, in browsers), the `+` used in time zone
     * designators must be encoded as `%2B`.
     * The end time value is exclusive. If you do not specify an end time, the datafeed
     * runs continuously.
     */
    end?: DateTime // default ""
    /**
     * The time that the datafeed should begin, which can be specified by using the same formats as the `end` parameter.
     * This value is inclusive.
     * If you do not specify a start time and the datafeed is associated with a new anomaly detection job, the analysis
     * starts from the earliest time for which data is available.
     * If you restart a stopped datafeed and specify a start value that is earlier than the timestamp of the latest
     * processed record, the datafeed continues from 1 millisecond after the timestamp of the latest processed record.
     */
    start?: DateTime // default ""
    /**
     * Specifies the amount of time to wait until a datafeed starts.
     * @server_default 20s */
    timeout?: Duration
  }
  body: {
    /** Refer to the description for the `end` query parameter. */
    end?: DateTime // default ""
    /** Refer to the description for the `start` query parameter.  */
    start?: DateTime // default ""
    /**
     * Refer to the description for the `timeout` query parameter.
     * @server_default 20s */
    timeout?: Duration
  }
}
