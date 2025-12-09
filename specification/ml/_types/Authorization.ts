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

export class ApiKeyAuthorization {
  /**
   * The identifier for the API key.
   */
  id: string
  /**
   * The name of the API key.
   */
  name: string
}

export class DatafeedAuthorization {
  /**
   *  If an API key was used for the most recent update to the datafeed, its name and identifier are listed in the response.
   */
  api_key?: ApiKeyAuthorization
  /**
   *  If a user ID was used for the most recent update to the datafeed, its roles at the time of the update are listed in the response.
   */
  roles?: string[]
  /**
   * If a service account was used for the most recent update to the datafeed, the account name is listed in the response.
   */
  service_account?: string
}

export class DataframeAnalyticsAuthorization {
  /**
   *  If an API key was used for the most recent update to the job, its name and identifier are listed in the response.
   */
  api_key?: ApiKeyAuthorization
  /**
   *  If a user ID was used for the most recent update to the job, its roles at the time of the update are listed in the response.
   */
  roles?: string[]
  /**
   * If a service account was used for the most recent update to the job, the account name is listed in the response.
   */
  service_account?: string
}

export class TransformAuthorization {
  /**
   *  If an API key was used for the most recent update to the transform, its name and identifier are listed in the response.
   */
  api_key?: ApiKeyAuthorization
  /**
   *  If a user ID was used for the most recent update to the transform, its roles at the time of the update are listed in the response.
   */
  roles?: string[]
  /**
   * If a service account was used for the most recent update to the transform, the account name is listed in the response.
   */
  service_account?: string
}
