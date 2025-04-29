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

export enum StopWordLanguage {
  _arabic_,
  _armenian_,
  _basque_,
  _bengali_,
  _brazilian_,
  _bulgarian_,
  _catalan_,
  _cjk_,
  _czech_,
  _danish_,
  _dutch_,
  _english_,
  _estonian_,
  _finnish_,
  _french_,
  _galician_,
  _german_,
  _greek_,
  _hindi_,
  _hungarian_,
  _indonesian_,
  _irish_,
  _italian_,
  _latvian_,
  _lithuanian_,
  _norwegian_,
  _persian_,
  _portuguese_,
  _romanian_,
  _russian_,
  _serbian_,
  _sorani_,
  _spanish_,
  _swedish_,
  _thai_,
  _turkish_,
  _none_
}

/**
 * Language value, such as _arabic_ or _thai_. Defaults to _english_.
 * Each language value corresponds to a predefined list of stop words in Lucene. See Stop words by language for supported language values and their stop words.
 * Also accepts an array of stop words.
 * @class_serializer: StopWordsFormatter
 */
export type StopWords = StopWordLanguage | string[]
