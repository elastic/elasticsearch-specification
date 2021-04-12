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

/**
 * @variants container
 */
class ProcessorContainer {
  attachment?: AttachmentProcessor
  append?: AppendProcessor
  csv?: CsvProcessor
  convert?: ConvertProcessor
  date?: DateProcessor
  date_index_name?: DateIndexNameProcessor
  dot_expander?: DotExpanderProcessor
  enrich?: EnrichProcessor
  fail?: FailProcessor
  foreach?: ForeachProcessor
  json?: JsonProcessor
  user_agent?: UserAgentProcessor
  kv?: KeyValueProcessor
  geoip?: GeoIpProcessor
  grok?: GrokProcessor
  gsub?: GsubProcessor
  join?: JoinProcessor
  lowercase?: LowercaseProcessor
  remove?: RemoveProcessor
  rename?: RenameProcessor
  script?: ScriptProcessor
  set?: SetProcessor
  sort?: SortProcessor
  split?: SplitProcessor
  trim?: TrimProcessor
  uppercase?: UppercaseProcessor
  urldecode?: UrlDecodeProcessor
  bytes?: BytesProcessor
  dissect?: DissectProcessor
  set_security_user?: SetSecurityUserProcessor
  pipeline?: PipelineProcessor
  drop?: DropProcessor
  circle?: CircleProcessor
  inference?: InferenceProcessor
}
