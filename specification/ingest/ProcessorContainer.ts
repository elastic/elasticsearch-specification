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

import { AppendProcessor } from './processors/AppendProcessor'
import { BytesProcessor } from './processors/BytesProcessor'
import { CircleProcessor } from './processors/CircleProcessor'
import { ConvertProcessor } from './processors/ConvertProcessor'
import { CsvProcessor } from './processors/CsvProcessor'
import { DateIndexNameProcessor } from './processors/DateIndexNameProcessor'
import { DateProcessor } from './processors/DateProcessor'
import { DissectProcessor } from './processors/DissectProcessor'
import { DotExpanderProcessor } from './processors/DotExpanderProcessor'
import { DropProcessor } from './processors/DropProcessor'
import { EnrichProcessor } from './processors/EnrichProcessor'
import { FailProcessor } from './processors/FailProcessor'
import { ForeachProcessor } from './processors/ForeachProcessor'
import { GrokProcessor } from './processors/GrokProcessor'
import { GsubProcessor } from './processors/GsubProcessor'
import { InferenceProcessor } from './processors/InferenceProcessor'
import { JoinProcessor } from './processors/JoinProcessor'
import { JsonProcessor } from './processors/JsonProcessor'
import { KeyValueProcessor } from './processors/KeyValueProcessor'
import { LowercaseProcessor } from './processors/LowercaseProcessor'
import { PipelineProcessor } from './processors/PipelineProcessor'
import { AttachmentProcessor } from './processors/plugins/AttachmentProcessor'
import { GeoIpProcessor } from './processors/plugins/GeoIpProcessor'
import { UserAgentProcessor } from './processors/plugins/UserAgentProcessor'
import { RemoveProcessor } from './processors/RemoveProcessor'
import { RenameProcessor } from './processors/RenameProcessor'
import { ScriptProcessor } from './processors/ScriptProcessor'
import { SetProcessor } from './processors/SetProcessor'
import { SetSecurityUserProcessor } from './processors/SetSecurityUserProcessor'
import { SortProcessor } from './processors/SortProcessor'
import { SplitProcessor } from './processors/SplitProcessor'
import { TrimProcessor } from './processors/TrimProcessor'
import { UppercaseProcessor } from './processors/UppercaseProcessor'
import { UrlDecodeProcessor } from './processors/UrlDecodeProcessor'

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
