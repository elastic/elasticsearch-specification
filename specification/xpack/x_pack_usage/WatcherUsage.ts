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

import { long, Name } from '../../__common/common'
import { Dictionary } from '../../__spec_utils/Dictionary'
import { UsageCount } from './UsageCount'
import { XPackUsage } from './XPackUsage'

export class WatcherUsage extends XPackUsage {
  execution: WatcherActionsUsage
  watch: WatcherWatchUsage
  count: UsageCount
}

export class WatcherActionsUsage {
  actions: Dictionary<Name, WatcherActionTotalsUsage>
}

export class WatcherWatchUsage {
  input: Dictionary<Name, UsageCount>
  condition?: Dictionary<Name, UsageCount>
  action?: Dictionary<Name, UsageCount>
  trigger: WatcherWatchTriggerUsage
}

export class WatcherWatchTriggerUsage {
  schedule?: WatcherWatchTriggerScheduleUsage
  _all: UsageCount
}

export class WatcherWatchTriggerScheduleUsage extends UsageCount {
  cron: UsageCount
  _all: UsageCount
}

export class WatcherActionTotalsUsage {
  total: long
  total_time_in_ms: long
}
