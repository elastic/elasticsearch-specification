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

import { VersionString } from "../../common";
import { AsciiFoldingTokenFilter } from "./AsciiFoldingTokenFilter";
import { CommonGramsTokenFilter } from "./CommonGramsTokenFilter";
import { HyphenationDecompounderTokenFilter } from "./compound_word/HyphenationDecompounderTokenFilter";
import { ConditionTokenFilter } from "./ConditionTokenFilter";
import { DelimitedPayloadTokenFilter } from "./delimited_payload/DelimitedPayloadTokenFilter";
import { EdgeNGramTokenFilter } from "./edge_n_gram/EdgeNGramTokenFilter";
import { ElisionTokenFilter } from "./ElisionTokenFilter";
import { FingerprintTokenFilter } from "./FingerprintTokenFilter";
import { HunspellTokenFilter } from "./HunspellTokenFilter";
import { KeepTypesTokenFilter } from "./KeepTypesTokenFilter";
import { KeepWordsTokenFilter } from "./KeepWordsTokenFilter";
import { KeywordMarkerTokenFilter } from "./KeywordMarkerTokenFilter";
import { KStemTokenFilter } from "./KStemTokenFilter";
import { LengthTokenFilter } from "./LengthTokenFilter";
import { LimitTokenCountTokenFilter } from "./LimitTokenCountTokenFilter";
import { LowercaseTokenFilter } from "./LowercaseTokenFilter";
import { MultiplexerTokenFilter } from "./MultiplexerTokenFilter";
import { NGramTokenFilter } from "./NGramTokenFilter";
import { NoriPartOfSpeechTokenFilter } from "./NoriPartOfSpeechTokenFilter";
import { PatternCaptureTokenFilter } from "./PatternCaptureTokenFilter";
import { PatternReplaceTokenFilter } from "./PatternReplaceTokenFilter";
import { PorterStemTokenFilter } from "./PorterStemTokenFilter";
import { PredicateTokenFilter } from "./PredicateTokenFilter";
import { RemoveDuplicatesTokenFilter } from "./RemoveDuplicatesTokenFilter";
import { ReverseTokenFilter } from "./ReverseTokenFilter";
import { ShingleTokenFilter } from "./shingle/ShingleTokenFilter";
import { SnowballTokenFilter } from "./SnowballTokenFilter";
import { StemmerOverrideTokenFilter } from "./StemmerOverrideTokenFilter";
import { StemmerTokenFilter } from "./StemmerTokenFilter";
import { StopTokenFilter } from "./stop/StopTokenFilter";
import { SynonymGraphTokenFilter } from "./synonym/SynonymGraphTokenFilter";
import { SynonymTokenFilter } from "./synonym/SynonymTokenFilter";
import { TrimTokenFilter } from "./TrimTokenFilter";
import { TruncateTokenFilter } from "./TruncateTokenFilter";
import { UniqueTokenFilter } from "./UniqueTokenFilter";
import { UppercaseTokenFilter } from "./UppercaseTokenFilter";
import { WordDelimiterTokenFilter } from "./word_delimiter/WordDelimiterTokenFilter";
import { WordDelimiterGraphTokenFilter } from "./word_delimiter_graph/WordDelimiterGraphTokenFilter";

export class TokenFilterBase {
  type: string;
  version?: VersionString;
}

export type TokenFilter =
  | AsciiFoldingTokenFilter
  | CommonGramsTokenFilter
  | ConditionTokenFilter
  | DelimitedPayloadTokenFilter
  //DictionaryDecompounderTokenFilter |
  | EdgeNGramTokenFilter
  | ElisionTokenFilter
  | FingerprintTokenFilter
  | HunspellTokenFilter
  | HyphenationDecompounderTokenFilter
  | KeepTypesTokenFilter
  | KeepWordsTokenFilter
  | KeywordMarkerTokenFilter
  | KStemTokenFilter
  | LengthTokenFilter
  | LimitTokenCountTokenFilter
  | LowercaseTokenFilter
  | MultiplexerTokenFilter
  | NGramTokenFilter
  | NoriPartOfSpeechTokenFilter
  | PatternCaptureTokenFilter
  | PatternReplaceTokenFilter
  | PorterStemTokenFilter
  | PredicateTokenFilter
  | RemoveDuplicatesTokenFilter
  | ReverseTokenFilter
  | ShingleTokenFilter
  | SnowballTokenFilter
  | StemmerOverrideTokenFilter
  | StemmerTokenFilter
  | StopTokenFilter
  | SynonymGraphTokenFilter
  | SynonymTokenFilter
  | TrimTokenFilter
  | TruncateTokenFilter
  | UniqueTokenFilter
  | UppercaseTokenFilter
  | WordDelimiterGraphTokenFilter
  | WordDelimiterTokenFilter;
