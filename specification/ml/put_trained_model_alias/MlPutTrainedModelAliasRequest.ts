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
import { Id, Name } from '@_types/common'

/**
 * Create or update a trained model alias.
 * A trained model alias is a logical name used to reference a single trained
 * model.
 * You can use aliases instead of trained model identifiers to make it easier to
 * reference your models. For example, you can use aliases in inference
 * aggregations and processors.
 * An alias must be unique and refer to only a single trained model. However,
 * you can have multiple aliases for each trained model.
 * If you use this API to update an alias such that it references a different
 * trained model ID and the model uses a different type of data frame analytics,
 * an error occurs. For example, this situation occurs if you have a trained
 * model for regression analysis and a trained model for classification
 * analysis; you cannot reassign an alias from one type of trained model to
 * another.
 * If you use this API to update an alias and there are very few input fields in
 * common between the old and new trained models for the model alias, the API
 * returns a warning.
 * @rest_spec_name ml.put_trained_model_alias
 * @availability stack since=7.13.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml trained model
 * @doc_id put-trained-models-aliases
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/trained_models/{model_id}/model_aliases/{model_alias}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The alias to create or update. This value cannot end in numbers.
     */
    model_alias: Name
    /**
     * The identifier for the trained model that the alias refers to.
     */
    model_id: Id
  }
  query_parameters: {
    /**
     * Specifies whether the alias gets reassigned to the specified trained
     * model if it is already assigned to a different model. If the alias is
     * already assigned and this parameter is false, the API returns an error.
     * @server_default false
     */
    reassign?: boolean
  }
}
