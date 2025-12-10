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
import { MediaType, Name } from '@_types/common'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { EventType } from '../_types/AnalyticsEvent'

/**
 * Create a behavioral analytics collection event.
 * @rest_spec_name search_application.post_behavioral_analytics_event
 * @availability stack stability=experimental visibility=public
 * @doc_tag analytics
 * @doc_id behavioral-analytics-collection-event
 * @ext_doc_id behavioral-analytics-event-reference
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_application/analytics/{collection_name}/event/{event_type}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The name of the behavioral analytics collection.
     */
    collection_name: Name
    /**
     * The analytics event type.
     */
    event_type: EventType
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Whether the response type has to include more details
     */
    debug?: boolean
  }
  /** @codegen_name payload */
  body: UserDefinedValue
}
