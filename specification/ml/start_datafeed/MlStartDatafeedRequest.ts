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
import { Time } from '@_types/Time'

/**
 * Starts one or more datafeeds.
 * A datafeed must be started in order to retrieve data from Elasticsearch. A
 * datafeed can be started and stopped multiple times throughout its lifecycle.
 * When you start a datafeed, you can specify a start time. This enables you to
 * include a training period, providing you have this data available in
 * Elasticsearch. If you want to analyze from the beginning of a dataset, you
 * can specify any date earlier than that beginning date.
 * If you do not specify a start time and the datafeed is associated with a new
 * anomaly detection job, the analysis starts from the earliest time for which
 * data is available.
 * When you start a datafeed, you can also specify an end time. If you do so,
 * the job analyzes data from the start time until the end time, at which point
 * the analysis stops. This scenario is useful for a one-off batch analysis. If
 * you do not specify an end time, the datafeed runs continuously.
 * The start and end times can be specified by using one of the following
 * formats:
 * * ISO 8601 format with milliseconds, for example 2017-01-22T06:00:00.000Z
 * * ISO 8601 format without milliseconds, for example 2017-01-22T06:00:00+00:00
 * * Milliseconds since the epoch, for example 1485061200000
 * Date-time arguments using either of the ISO 8601 formats must have a time
 * zone designator, where Z is accepted as an abbreviation for UTC time.
 * If the system restarts, any jobs that had datafeeds running are also
 * restarted.
 * When a stopped datafeed is restarted, it continues processing input data from
 * the next millisecond after it was stopped. If new data was indexed for that
 * exact millisecond between stopping and starting, it will be ignored. If you
 * specify a start value that is earlier than the timestamp of the latest
 * processed record, the datafeed continues from 1 millisecond after the
 * timestamp of the latest processed record.
 * @rest_spec_name ml.start_datafeed
 * @since 5.5.0
 * @stability stable
 * @cluster_privileges manage_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * A numerical character string that uniquely identifies the datafeed. This
     * identifier can contain lowercase alphanumeric characters (a-z and 0-9),
     * hyphens, and underscores. It must start and end with alphanumeric
     * characters.
     */
    datafeed_id: Id
  }
  query_parameters: {
    /**
     * The time that the datafeed should begin. This value is inclusive.
     * @server_default an empty string
     */
    start?: Time
  }
  body: {
    /**
     * The time that the datafeed should end. This value is exclusive.
     * @server_default an empty string
     */
    end?: Time
    /**
     * The time that the datafeed should begin. This value is inclusive.
     * @server_default an empty string
     */
    start?: Time
    /**
     * Controls the amount of time to wait until a datafeed starts.
     * @server_default 20s
     * */
    timeout?: Time
  }
}
