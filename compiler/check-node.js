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

const { readFileSync } = require('fs')
const { join } = require('path')

const nvmrc = readFileSync(join(__dirname, '..', '.nvmrc'), 'utf8')
const nodejsMajor = process.version.split('.').shift()?.slice(1)
const nvmMajor = nvmrc.trim().split('.').shift()

if (nodejsMajor !== nvmMajor) {
  console.error(`Bad nodejs major version, you are using ${nodejsMajor}, while ${nvmMajor} should be used. Run 'nvm install' to fix this.`)
  process.exit(1)
}
