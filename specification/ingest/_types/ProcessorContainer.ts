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

import { AppendProcessor } from '@ingest/processors/AppendProcessor'
import { BytesProcessor } from '@ingest/processors/BytesProcessor'
import { CircleProcessor } from '@ingest/processors/CircleProcessor'
import { ConvertProcessor } from '@ingest/processors/ConvertProcessor'
import { CsvProcessor } from '@ingest/processors/CsvProcessor'
import { DateIndexNameProcessor } from '@ingest/processors/DateIndexNameProcessor'
import { DateProcessor } from '@ingest/processors/DateProcessor'
import { DissectProcessor } from '@ingest/processors/DissectProcessor'
import { DotExpanderProcessor } from '@ingest/processors/DotExpanderProcessor'
import { DropProcessor } from '@ingest/processors/DropProcessor'
import { EnrichProcessor } from '@ingest/processors/EnrichProcessor'
import { FailProcessor } from '@ingest/processors/FailProcessor'
import { ForeachProcessor } from '@ingest/processors/ForeachProcessor'
import { GrokProcessor } from '@ingest/processors/GrokProcessor'
import { GsubProcessor } from '@ingest/processors/GsubProcessor'
import { InferenceProcessor } from '@ingest/processors/InferenceProcessor'
import { JoinProcessor } from '@ingest/processors/JoinProcessor'
import { JsonProcessor } from '@ingest/processors/JsonProcessor'
import { KeyValueProcessor } from '@ingest/processors/KeyValueProcessor'
import { LowercaseProcessor } from '@ingest/processors/LowercaseProcessor'
import { PipelineProcessor } from '@ingest/processors/PipelineProcessor'
import { AttachmentProcessor } from '@ingest/processors/plugins/AttachmentProcessor'
import { GeoIpProcessor } from '@ingest/processors/plugins/GeoIpProcessor'
import { UserAgentProcessor } from '@ingest/processors/plugins/UserAgentProcessor'
import { RemoveProcessor } from '@ingest/processors/RemoveProcessor'
import { RenameProcessor } from '@ingest/processors/RenameProcessor'
import { ScriptProcessor } from '@ingest/processors/ScriptProcessor'
import { SetProcessor } from '@ingest/processors/SetProcessor'
import { SetSecurityUserProcessor } from '@ingest/processors/SetSecurityUserProcessor'
import { SortProcessor } from '@ingest/processors/SortProcessor'
import { SplitProcessor } from '@ingest/processors/SplitProcessor'
import { TrimProcessor } from '@ingest/processors/TrimProcessor'
import { UppercaseProcessor } from '@ingest/processors/UppercaseProcessor'
import { UrlDecodeProcessor } from '@ingest/processors/UrlDecodeProcessor'

/**
 * @variants container
 */
export class ProcessorContainer {
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
