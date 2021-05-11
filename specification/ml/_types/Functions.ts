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

export enum CountFunction {
  Count = 0,
  HighCount = 1,
  LowCount = 2
}

export enum DistinctCountFunction {
  DistinctCount = 0,
  LowDistinctCount = 1,
  HighDistinctCount = 2
}

export enum GeographicFunction {
  LatLong = 0
}

export enum InfoContentFunction {
  InfoContent = 0,
  HighInfoContent = 1,
  LowInfoContent = 2
}

export enum MetricFunction {
  Min = 0,
  Max = 1,
  Median = 2,
  HighMedian = 3,
  LowMedian = 4,
  Mean = 5,
  HighMean = 6,
  LowMean = 7,
  Metric = 8,
  Varp = 9,
  HighVarp = 10,
  LowVarp = 11
}

export enum NonNullSumFunction {
  NonNullSum = 0,
  HighNonNullSum = 1,
  LowNonNullSum = 2
}

export enum NonZeroCountFunction {
  NonZeroCount = 0,
  LowNonZeroCount = 1,
  HighNonZeroCount = 2
}

export enum RareFunction {
  Rare = 0,
  FreqRare = 1
}

export enum SumFunction {
  Sum = 0,
  HighSum = 1,
  LowSum = 2
}
