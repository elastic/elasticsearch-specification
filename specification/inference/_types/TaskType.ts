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

/**
 * Task types used in the API
 */
export enum TaskType {
  sparse_embedding,
  text_embedding,
  rerank,
  completion,
  chat_completion
}

export enum TaskTypeJinaAi {
  text_embedding,
  rerank
}

export enum TaskTypeAi21 {
  completion,
  chat_completion
}

export enum TaskTypeAlibabaCloudAI {
  text_embedding,
  rerank,
  completion,
  sparse_embedding
}

export enum TaskTypeAmazonBedrock {
  text_embedding,
  completion
}

export enum TaskTypeAmazonSageMaker {
  text_embedding,
  completion,
  chat_completion,
  sparse_embedding,
  rerank
}

export enum TaskTypeAnthropic {
  completion
}

export enum TaskTypeAzureAIStudio {
  text_embedding,
  completion,
  rerank
}

export enum TaskTypeAzureOpenAI {
  text_embedding,
  completion,
  chat_completion
}

export enum TaskTypeCohere {
  text_embedding,
  rerank,
  completion
}

export enum TaskTypeContextualAI {
  rerank
}

export enum TaskTypeCustom {
  text_embedding,
  sparse_embedding,
  rerank,
  completion
}

export enum TaskTypeDeepSeek {
  completion,
  chat_completion
}

export enum TaskTypeElasticsearch {
  sparse_embedding,
  text_embedding,
  rerank
}

export enum TaskTypeELSER {
  sparse_embedding
}

export enum TaskTypeGoogleAIStudio {
  text_embedding,
  completion
}

export enum TaskTypeGoogleVertexAI {
  chat_completion,
  completion,
  text_embedding,
  rerank
}

export enum TaskTypeHuggingFace {
  chat_completion,
  completion,
  rerank,
  text_embedding
}

export enum TaskTypeLlama {
  text_embedding,
  chat_completion,
  completion
}

export enum TaskTypeMistral {
  text_embedding,
  chat_completion,
  completion
}

export enum TaskTypeOpenAI {
  text_embedding,
  chat_completion,
  completion
}

export enum TaskTypeOpenShiftAi {
  text_embedding,
  chat_completion,
  completion,
  rerank
}

export enum TaskTypeVoyageAI {
  text_embedding,
  rerank
}

export enum TaskTypeWatsonx {
  text_embedding,
  chat_completion,
  completion
}
