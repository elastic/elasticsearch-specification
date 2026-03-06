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

import * as model from '../model/metamodel'

/**
 * Adds the `_info` field to the JSON model.
 */
export default async function addInfo (model: model.Model): Promise<model.Model> {
  model._info = {
    title: '',
    license: {
      name: 'Apache 2.0',
      url: 'https://github.com/elastic/elasticsearch-specification/blob/main/LICENSE'
    },
    flavors: {
      stack: {
        title: 'Elasticsearch API',
        description: 'Elasticsearch provides REST APIs that are used by the UI components and can be called directly to configure and access Elasticsearch features.\n## Documentation source and versions\nThis documentation is derived from the {branch} branch of the [elasticsearch-specification](https://github.com/elastic/elasticsearch-specification) repository. It is provided under license [Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/).\nThis documentation contains work-in-progress information for future Elastic Stack releases.'
      },
      serverless: {
        title: 'Elasticsearch Serverless API',
        description: 'Elasticsearch Serverless provides REST APIs that are used by the UI components and can be called directly to configure and access Elasticsearch features.\n## Documentation source and versions\nThis documentation is derived from the {branch} branch of the [elasticsearch-specification](https://github.com/elastic/elasticsearch-specification) repository. It is provided under license [Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/).\nThis documentation contains work-in-progress information for future Elastic Stack releases.'
      }
    }
  }

  return model
}
