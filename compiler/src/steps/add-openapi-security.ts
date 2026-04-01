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
 * Adds OpenAPI security schemes and security requirements to the model for each flavor.
 * Stack flavor includes: apiKeyAuth, basicAuth, bearerAuth
 * Serverless flavor includes: apiKeyAuth only
 */
export default async function addOpenApiSecurity (model: model.Model): Promise<model.Model> {
  if (model._openapi == null) {
    model._openapi = {}
  }

  if (model._openapi.flavors == null) {
    model._openapi.flavors = {}
  }

  // Stack flavor security configuration
  model._openapi.flavors.stack = {
    securitySchemes: {
      apiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: `Elasticsearch APIs support key-based authentication.
You must create an API key and use the encoded value in the request header.
For example:

\`\`\`
curl -X GET "\${ES_URL}/_cat/indices?v=true" \\
  -H "Authorization: ApiKey \${API_KEY}"
\`\`\`

To get API keys, use the \`/_security/api_key\` APIs.`
      },
      basicAuth: {
        type: 'http',
        scheme: 'basic'
      },
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        description: `Elasticsearch APIs support the use of bearer tokens in the \`Authorization\` HTTP header to authenticate with the API.
For examples, refer to [Token-based authentication services](https://www.elastic.co/docs/deploy-manage/users-roles/cluster-or-deployment-auth/token-based-authentication-services)`
      }
    },
    security: [
      { apiKeyAuth: [] },
      { basicAuth: [] },
      { bearerAuth: [] }
    ]
  }

  // Serverless flavor security configuration
  model._openapi.flavors.serverless = {
    securitySchemes: {
      apiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: `Elasticsearch APIs use key-based authentication.
You must create an API key and use the encoded value in the request header.
For example:

\`\`\`
curl -X GET "\${ES_URL}/_cat/indices?v=true" \\
  -H "Authorization: ApiKey \${API_KEY}"
\`\`\`

For more information about where to find API keys for the Elasticsearch endpoint (\${ES_URL}) for a project, go to [Get started with Elasticsearch Serverless](https://www.elastic.co/docs/solutions/search/serverless-elasticsearch-get-started).`
      }
    },
    security: [
      { apiKeyAuth: [] }
    ]
  }

  return model
}
