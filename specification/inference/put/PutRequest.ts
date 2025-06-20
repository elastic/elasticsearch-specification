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
import { InferenceEndpoint } from '@inference/_types/Services'
import { TaskType } from '@inference/_types/TaskType'

/**
 * Create an inference endpoint.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Mistral, Azure OpenAI, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face.
 * For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models.
 * However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 *
 * The following integrations are available through the inference API. You can find the available task types next to the integration name:
 * * AlibabaCloud AI Search (`completion`, `rerank`, `sparse_embedding`, `text_embedding`)
 * * Amazon Bedrock (`completion`, `text_embedding`)
 * * Anthropic (`completion`)
 * * Azure AI Studio (`completion`, `text_embedding`)
 * * Azure OpenAI (`completion`, `text_embedding`)
 * * Cohere (`completion`, `rerank`, `text_embedding`)
 * * Elasticsearch (`rerank`, `sparse_embedding`, `text_embedding` - this service is for built-in models and models uploaded through Eland)
 * * ELSER (`sparse_embedding`)
 * * Google AI Studio (`completion`, `text_embedding`)
 * * Google Vertex AI (`rerank`, `text_embedding`)
 * * Hugging Face (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 * * Mistral (`chat_completion`, `completion`, `text_embedding`)
 * * OpenAI (`chat_completion`, `completion`, `text_embedding`)
 * * VoyageAI (`text_embedding`, `rerank`)
 * * Watsonx inference integration (`text_embedding`)
 * * JinaAI (`text_embedding`, `rerank`)
 * @rest_spec_name inference.put
 * @availability stack since=8.11.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{inference_id}'
      methods: ['PUT']
    },
    {
      path: '/_inference/{task_type}/{inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The task type. Refer to the integration list in the API description for the available task types.
     */
    task_type?: TaskType
    /**
     * The inference Id
     */
    inference_id: Id
  }
  /** @codegen_name inference_config */
  body: InferenceEndpoint
}
