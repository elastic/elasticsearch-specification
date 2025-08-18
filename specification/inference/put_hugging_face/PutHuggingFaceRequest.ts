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
import {
  HuggingFaceServiceSettings,
  HuggingFaceServiceType,
  HuggingFaceTaskType
} from '@inference/_types/CommonTypes'
import { InferenceChunkingSettings } from '@inference/_types/Services'

/**
 * Create a Hugging Face inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `hugging_face` service.
 *
 * You must first create an inference endpoint on the Hugging Face endpoint page to get an endpoint URL.
 * Select the model you want to use on the new endpoint creation page (for example `intfloat/e5-small-v2`), then select the sentence embeddings task under the advanced configuration section.
 * Create the endpoint and copy the URL after the endpoint initialization has been finished.
 *
 * The following models are recommended for the Hugging Face service:
 *
 * * `all-MiniLM-L6-v2`
 * * `all-MiniLM-L12-v2`
 * * `all-mpnet-base-v2`
 * * `e5-base-v2`
 * * `e5-small-v2`
 * * `multilingual-e5-base`
 * * `multilingual-e5-small`
 * @rest_spec_name inference.put_hugging_face
 * @availability stack since=8.12.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-huggingface
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{huggingface_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: HuggingFaceTaskType
    /**
     * The unique identifier of the inference endpoint.
     */
    huggingface_inference_id: Id
  }
  query_parameters: {
    /**
     * Specifies the amount of time to wait for the inference endpoint to be created.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The chunking configuration object.
     * @ext_doc_id inference-chunking
     */
    chunking_settings?: InferenceChunkingSettings
    /**
     * The type of service supported for the specified task type. In this case, `hugging_face`.
     */
    service: HuggingFaceServiceType
    /**
     * Settings used to install the inference model. These settings are specific to the `hugging_face` service.
     */
    service_settings: HuggingFaceServiceSettings
  }
}
