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
import { Id, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'
import {
  AmazonSageMakerServiceSettings,
  AmazonSageMakerServiceType,
  AmazonSageMakerTaskSettings
} from '@inference/_types/CommonTypes'
import { InferenceChunkingSettings } from '@inference/_types/Services'
import { TaskTypeAmazonSageMaker } from '@inference/_types/TaskType'

/**
 * Create an Amazon SageMaker inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `amazon_sagemaker` service.
 * @rest_spec_name inference.put_amazonsagemaker
 * @availability stack since=9.1.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-amazonsagemaker
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{task_type}/{amazonsagemaker_inference_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The type of the inference task that the model will perform.
     */
    task_type: TaskTypeAmazonSageMaker
    /**
     * The unique identifier of the inference endpoint.
     */
    amazonsagemaker_inference_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
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
     * The type of service supported for the specified task type. In this case, `amazon_sagemaker`.
     */
    service: AmazonSageMakerServiceType
    /**
     * Settings used to install the inference model.
     * These settings are specific to the `amazon_sagemaker` service and `service_settings.api` you specified.
     */
    service_settings: AmazonSageMakerServiceSettings
    /**
     * Settings to configure the inference task.
     * These settings are specific to the task type and `service_settings.api` you specified.
     */
    task_settings?: AmazonSageMakerTaskSettings
  }
}
