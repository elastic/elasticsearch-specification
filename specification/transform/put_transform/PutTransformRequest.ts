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
import { Request as PreviewTransformRequest } from '@transform/preview_transform/PreviewTransformRequest'
import { Id } from '@_types/common'

/**
 * @rest_spec_name transform.put_transform
 * @since 7.2.0
 * @stability stable
 */
export interface Request extends PreviewTransformRequest {
  path_parts: {
    /** Identifier for the transform. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. */
    transform_id: Id
  }
  query_parameters: {
    /** When true, deferrable validations are not run. This behavior may be desired if the source index does not exist until after the transform is created. */
    defer_validation?: boolean
  }
}
