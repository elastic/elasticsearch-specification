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

import { AdditionalProperties } from '@spec_utils/behaviors'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'


/**
 * @behavior_meta AdditionalProperties fieldname=user_defined_tags description="Additional tags defined by user."
 */
class Tags implements AdditionalProperties<string, string> {
  _id: string
  _alias: string
  _type: string
  _organisation: string
}

class ProjectTags {
  origin: SingleKeyDictionary<string, Tags>
  linked_projects?: Dictionary<string, Tags>
}

export class Response  {
  /**
   * @codegen_name project_tags
   */
  body: ProjectTags
}
