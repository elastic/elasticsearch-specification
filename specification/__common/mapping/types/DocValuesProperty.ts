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

import { BinaryProperty } from "./core/binary/BinaryProperty";
import { BooleanProperty } from "./core/boolean/BooleanProperty";
import { DateProperty } from "./core/date/DateProperty";
import { DateNanosProperty } from "./core/date_nanos/DateNanosProperty";
import { KeywordProperty } from "./core/keyword/KeywordProperty";
import { NumberProperty } from "./core/number/NumberProperty";
import { RangeProperty } from "./core/range/RangeProperty";
import { VersionProperty } from "./core/version/VersionProperty";
import { WildcardProperty } from "./core/wildcard/WildcardProperty";
import { CorePropertyBase } from "./CoreProperty";
import { GeoPointProperty } from "./geo/geo_point/GeoPointProperty";
import { GeoShapeProperty } from "./geo/geo_shape/GeoShapeProperty";
import { PointProperty } from "./geo/point/PointProperty";
import { CompletionProperty } from "./specialized/completion/CompletionProperty";
import { GenericProperty } from "./specialized/generic/GenericProperty";
import { IpProperty } from "./specialized/ip/IpProperty";
import { Murmur3HashProperty } from "./specialized/murmur3_hash/Murmur3HashProperty";
import { ShapeProperty } from "./specialized/shape/ShapeProperty";
import { TokenCountProperty } from "./specialized/token_count/TokenCountProperty";

export class DocValuesPropertyBase extends CorePropertyBase {
  doc_values?: boolean;
}

export type DocValuesProperty =
  | BinaryProperty
  | BooleanProperty
  | DateProperty
  | DateNanosProperty
  | KeywordProperty
  | NumberProperty
  | RangeProperty
  | GeoPointProperty
  | GeoShapeProperty
  | CompletionProperty
  | GenericProperty
  | IpProperty
  | Murmur3HashProperty
  | ShapeProperty
  | TokenCountProperty
  | VersionProperty
  | WildcardProperty
  | PointProperty;
