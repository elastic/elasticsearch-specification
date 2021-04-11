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

class IndexRouting {
  allocation?: IndexRoutingAllocation
  rebalance?: IndexRoutingRebalance
}

class IndexRoutingAllocation {
  /** server_default all */
  enable?: IndexRoutingAllocationOptions
  include: Dictionary<string, string>
  initial_recovery?: Dictionary<string, string>
}

class IndexRoutingRebalance {
  /** server_default all */
  enable: IndexRoutingRebalanceOptions
  include: Dictionary<string, string>
}

enum IndexRoutingAllocationOptions {
  all = 0,
  primaries = 1,
  new_primaries = 2,
  none = 3
}

enum IndexRoutingRebalanceOptions {
  all = 0,
  primaries = 1,
  replicas = 2,
  none = 3
}
