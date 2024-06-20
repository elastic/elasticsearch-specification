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
 * Extracts structured fields out of a single text field within a document.
 * You choose which field to extract matched fields from, as well as the grok pattern you expect will match.
 * A grok pattern is like a regular expression that supports aliased expressions that can be reused.
 * @doc_id grok-processor
 * @rest_spec_name ingest.processor_grok
 * @availability stack since=6.1.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {}
