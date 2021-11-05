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
 * The absence of any type. This is commonly used in APIs that don't return a body.
 *
 * Although "void" is generally used for the unit type that has only one value, this is to be interpreted as
 * the bottom type that has no value at all. Most languages have a unit type, but few have a bottom type.
 *
 * See https://en.m.wikipedia.org/wiki/Unit_type and https://en.m.wikipedia.org/wiki/Bottom_type
 */
export type Void = void
