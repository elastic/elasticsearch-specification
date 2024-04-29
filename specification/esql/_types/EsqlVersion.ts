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
 * The version of the ES|QL language in which the "query" field was written.
 */
export enum EsqlVersion {
  /**
   * Run against the first version of ES|QL.
   * @codegen_name V2024_04_01
   */
  '2024.04.01'
}

// Note: ideally this should be a constant of type EsqlVersion, but the schema.json model doesn't
// has support for this. So define a new type that is just a literal value, to be used by code generators.

/**
 * Version of the ES|QL language that should be used by default in stateful client libraries.
 *
 * This value is guaranteed to be stable within a major version of the Elastic Stack, even if newer versions
 * of the ES|QL language are added within that major version.
 */
export type BaseStatefulEsqlVersion = '2024.04.01'

/**
 * Version of the ES|QL language that should be used by default in serverless client libraries.
 *
 * This value is guaranteed to be stable for a given value of the Serverless API version, even if newer versions
 * of the ES|QL language are added within that API version.
 */
export type BaseServerlessEsqlVersion = '2024.04.01'
