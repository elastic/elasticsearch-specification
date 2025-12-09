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
import { long } from '@_types/Numeric'
import { InferenceConfigCreateContainer } from '@ml/_types/inference'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  TrainedModelPrefixStrings,
  TrainedModelType
} from '../_types/TrainedModel'
import { Definition, Input } from './types'

/**
 * Create a trained model.
 * Enable you to supply a trained model that is not created by data frame analytics.
 * @rest_spec_name ml.put_trained_model
 * @availability stack since=7.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml trained model
 * @doc_id put-trained-models
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/trained_models/{model_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the trained model.
     */
    model_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If set to `true` and a `compressed_definition` is provided,
     * the request defers definition decompression and skips relevant
     * validations.
     * @availability stack since=8.0.0
     * @availability serverless
     * @server_default false
     */
    defer_definition_decompression?: boolean

    /**
     * Whether to wait for all child operations (e.g. model download)
     * to complete.
     * @availability stack since=8.8.0
     * @availability serverless
     * @server_default false
     */
    wait_for_completion?: boolean
  }
  body: {
    /**
     * The compressed (GZipped and Base64 encoded) inference definition of the
     * model. If compressed_definition is specified, then definition cannot be
     * specified.
     */
    compressed_definition?: string
    /**
     * The inference definition for the model. If definition is specified, then
     * compressed_definition cannot be specified.
     */
    definition?: Definition
    /**
     * A human-readable description of the inference trained model.
     */
    description?: string
    /**
     * The default configuration for inference. This can be either a regression
     * or classification configuration. It must match the underlying
     * definition.trained_model's target_type. For pre-packaged models such as
     * ELSER the config is not required.
     */
    inference_config?: InferenceConfigCreateContainer
    /**
     * The input field names for the model definition.
     */
    input?: Input
    /**
     * An object map that contains metadata about the model.
     */
    metadata?: UserDefinedValue
    /**
     * The model type.
     * @server_default tree_ensemble
     */
    model_type?: TrainedModelType
    /**
     * The estimated memory usage in bytes to keep the trained model in memory.
     * This property is supported only if defer_definition_decompression is true
     * or the model definition is not supplied.
     */
    model_size_bytes?: long
    /**
     * The platform architecture (if applicable) of the trained mode. If the model
     * only works on one platform, because it is heavily optimized for a particular
     * processor architecture and OS combination, then this field specifies which.
     * The format of the string must match the platform identifiers used by Elasticsearch,
     * so one of, `linux-x86_64`, `linux-aarch64`, `darwin-x86_64`, `darwin-aarch64`,
     * or `windows-x86_64`. For portable models (those that work independent of processor
     * architecture or OS features), leave this field unset.
     */
    platform_architecture?: string
    /**
     * An array of tags to organize the model.
     */
    tags?: string[]
    /**
     * Optional prefix strings applied at inference
     * @availability stack since=8.12.0
     * @availability serverless
     */
    prefix_strings?: TrainedModelPrefixStrings
  }
}
