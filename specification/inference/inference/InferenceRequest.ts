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
import { Duration } from '@_types/Time'
import { TaskSettings } from '@inference/_types/Services'
import { TaskType } from '@inference/_types/TaskType'

/**
 * Perform inference on the service.
 *
 * This API enables you to use machine learning models to perform specific tasks on data that you provide as an input.
 * It returns a response with the results of the tasks.
 * The inference endpoint you use can perform one specific task that has been defined when the endpoint was created with the create inference API.
 *
 * For details about using this API with a service, such as Amazon Bedrock, Anthropic, or HuggingFace, refer to the service-specific documentation.
 *
 * > info
 * > The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 * @rest_spec_name inference.inference
 * @availability stack since=8.11.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_inference
 * @doc_id inference-api-post
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{inference_id}'
      methods: ['POST']
    },
    {
      path: '/_inference/{task_type}/{inference_id}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The type of inference task that the model performs.
     */
    task_type?: TaskType
    /**
     * The unique identifier for the inference endpoint.
     */
    inference_id: Id
  }
  query_parameters: {
    /**
     * The amount of time to wait for the inference request to complete.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The query input, which is required only for the `rerank` task.
     * It is not required for other tasks.
     */
    query?: string
    /**
     * The text on which you want to perform the inference task.
     * It can be a single string or an array.
     *
     * > info
     * > Inference endpoints for the `completion` task type currently only support a single string as input.
     */
    input: string | string[]
    /**
     * Specifies the input data type for the text embedding model. The `input_type` parameter only applies to Inference Endpoints with the `text_embedding` task type. Possible values include:
     * * `SEARCH`
     * * `INGEST`
     * * `CLASSIFICATION`
     * * `CLUSTERING`
     * Not all services support all values. Unsupported values will trigger a validation exception.
     * Accepted values depend on the configured inference service, refer to the relevant service-specific documentation for more info.
     *
     * > info
     * > The `input_type` parameter specified on the root level of the request body will take precedence over the `input_type` parameter specified in `task_settings`.
     */
    input_type?: string
    /**
     * Task settings for the individual inference request.
     * These settings are specific to the task type you specified and override the task settings specified when initializing the service.
     */
    task_settings?: TaskSettings
  }
}
