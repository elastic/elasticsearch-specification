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

import { integer } from '@_types/Numeric'
import { ReasoningEffort } from './CommonTypes'

/**
 * Metadata about an inference endpoint, such as the model it serves, where it is available and what it supports.
 * It is returned for the endpoints of the Elastic Inference Service.
 * The internal fields that Elasticsearch uses to track the metadata are not part of the response.
 */
export class EndpointMetadata {
  /**
   * Properties of the endpoint that help clients to determine which model to use.
   */
  heuristics: EndpointMetadataHeuristics
  /**
   * Information to display for the endpoint.
   */
  display: EndpointMetadataDisplay
  /**
   * The identity of the model that the endpoint serves.
   * @availability stack since=9.6.0
   * @availability serverless
   */
  model_identity?: EndpointMetadataModelIdentity
  /**
   * The regions in which the endpoint is available.
   * @availability stack since=9.5.0
   * @availability serverless
   */
  regions?: EndpointMetadataRegion[]
  /**
   * If `true`, the region policy of the caller prohibits access to the endpoint.
   * @availability stack since=9.5.0
   * @availability serverless
   */
  denied_by_region_policy?: boolean
  /**
   * The capabilities of the endpoint.
   * @availability stack since=9.6.0
   * @availability serverless
   */
  capabilities?: EndpointMetadataCapabilities
}

export enum EndpointMetadataStatus {
  beta,
  preview,
  ga,
  deprecated
}

export class EndpointMetadataHeuristics {
  /**
   * Tags that describe the properties of the model, for example `multilingual`, `english` or `multimodal`.
   */
  properties: string[]
  /**
   * The release status of the model.
   */
  status?: EndpointMetadataStatus
  /**
   * The date on which the model was released, in `yyyy-MM-dd` format.
   */
  release_date?: string
  /**
   * The date on which the model reaches the end of its life, in `yyyy-MM-dd` format.
   */
  end_of_life_date?: string
}

export class EndpointMetadataDisplay {
  /**
   * The name to display for the endpoint.
   */
  name?: string
  /**
   * The creator of the model, for display purposes.
   */
  model_creator?: string
}

export class EndpointMetadataModelIdentity {
  /**
   * The model creator or lab, for example `anthropic`, `openai` or `jina`.
   */
  creator?: string
  /**
   * The model family within the creator, for example `claude`, `gpt` or `gemini`.
   */
  family?: string
  /**
   * The performance or size tier within the family, for example `sonnet` or `mini`.
   * It is not set if the model has no tier variants.
   */
  tier?: string
  /**
   * The version of the model.
   */
  version?: string
}

export class EndpointMetadataRegion {
  /**
   * The cloud service provider, for example `aws`, `gcp` or `azure`.
   */
  csp?: string
  /**
   * The region of the cloud service provider, for example `us-east-1`.
   */
  region?: string
  /**
   * The geographic area, for example `us` or `eu`.
   */
  geo?: string
  /**
   * The human-readable name of the region.
   * @availability stack since=9.6.0
   * @availability serverless
   */
  region_display_name?: string
}

export class EndpointMetadataCapabilities {
  /**
   * The reasoning support of the endpoint.
   */
  reasoning?: EndpointMetadataReasoningCapability
  /**
   * The context window of the model.
   */
  context_window?: EndpointMetadataContextWindow
  /**
   * The prompt template support of the endpoint.
   * It is returned only for chat completion endpoints that require a template instead of caller-authored messages.
   */
  templates?: EndpointMetadataTemplatesCapability
}

export class EndpointMetadataReasoningCapability {
  /**
   * The reasoning effort levels that the endpoint supports.
   */
  supported_effort_levels: ReasoningEffort[]
  /**
   * The reasoning effort level that the endpoint uses by default.
   */
  default_effort_level?: ReasoningEffort
}

export class EndpointMetadataContextWindow {
  /**
   * The maximum number of input tokens that the model accepts.
   */
  max_input_tokens?: integer
  /**
   * The maximum number of output tokens that the model generates.
   */
  max_output_tokens?: integer
}

export enum EndpointMetadataTemplatePolicy {
  required
}

export class EndpointMetadataTemplatesCapability {
  /**
   * Whether the endpoint requires chat completion requests to carry a prompt template.
   * Elasticsearch displays the policy so that clients can choose the request shape, but it doesn't enforce it.
   */
  policy: EndpointMetadataTemplatePolicy
}
