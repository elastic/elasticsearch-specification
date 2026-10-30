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

import { Dictionary } from '@spec_utils/Dictionary'

/**
 * The input for the `decision` task.
 * Either a string, or an object. The object form additionally allows specifying images.
 * @codegen_names string, object
 */
export type DecisionInput = string | DecisionInputObject

/**
 * An object describing the input for the `decision` task, which additionally allows specifying images.
 */
export class DecisionInputObject {
  /**
   * The type of input. Not all services and models support all input types.
   */
  type: DecisionInputType
  /**
   * The format of the input. For the `text` type this must be `text`. For the `image` type this must be `base64` or `url`.
   * If not specified, this defaults to `text` for the `text` type and `base64` for the `image` type.
   * Not all services and models support all formats.
   */
  format?: DecisionInputFormat
  /**
   * The value of the input. For the `base64` format, this must be a base64-encoded data URI, that is, "data:content/type;base64,...".
   * For the `url` format, this must be a URL that points to the content, that is, "https://example.com/image.jpg".
   */
  value: string
}

/**
 * The type of input for the `decision` task.
 */
export enum DecisionInputType {
  text,
  image
}

/**
 * The format of the input for the `decision` task.
 */
export enum DecisionInputFormat {
  text,
  base64,
  url
}

/**
 * The task settings of the `decision` task.
 */
export class DecisionTaskSettings {
  /**
   * The questions to answer, keyed by question name. The answers in the response use the same names.
   * The questions replace the ones of the inference endpoint as a whole. At least one question is required.
   */
  questions?: Dictionary<string, DecisionQuestion>
}

/**
 * A question answered by the `decision` task.
 * The type of the question determines the type of its answer.
 * @variants internal tag='type'
 */
export type DecisionQuestion =
  | PredicateDecisionQuestion
  | ChoiceDecisionQuestion
  | ScoreDecisionQuestion

export class DecisionQuestionBase {
  /**
   * A description of what to decide. It must not be empty.
   */
  instructions: string
}

/**
 * A question answered with the probability that the statement in `instructions` is true.
 */
export class PredicateDecisionQuestion extends DecisionQuestionBase {
  type: 'predicate'
}

/**
 * A question answered with one option out of a fixed set of choices.
 */
export class ChoiceDecisionQuestion extends DecisionQuestionBase {
  type: 'choice'
  /**
   * The options to choose from, each mapped to an optional description. At least two choices are required.
   */
  choices: Dictionary<string, string | null>
}

/**
 * A question answered with the probability-weighted position on an ordered scale of levels.
 */
export class ScoreDecisionQuestion extends DecisionQuestionBase {
  type: 'score'
  /**
   * The levels of the scale, ordered from lowest to highest. At least two levels are required.
   */
  levels: Array<DecisionScoreLevel>
}

/**
 * A level of a `score` question: either a plain label, or an object with a label and an optional description.
 * @codegen_names label, object
 */
export type DecisionScoreLevel = string | DecisionScoreLevelObject

export class DecisionScoreLevelObject {
  /**
   * The label of the level.
   */
  label: string
  /**
   * A description of the level.
   */
  description?: string
}
