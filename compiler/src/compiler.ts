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

import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import stringify from 'safe-stable-stringify'
import { Model } from './model/metamodel'
import { compileEndpoints, compileSpecification } from './model/build-model'
import buildJsonSpec, { JsonSpec } from './model/json-spec'
import { ValidationErrors } from './validation-errors'

type StepFunction = (model: Model, restSpec: Map<string, JsonSpec>, errors: ValidationErrors) => Promise<Model>

/**
 * The main job of the compiler is to generate the Model and write it on disk.
 * If needed you can add one or more intermediate steps between the
 * model generation and the disk write. This can be done by using
 * the `step` method.
 * Each steps takes as input the model and the rest-api-spec,
 * and must return the model, even if it wasn't changed.
 */
export default class Compiler {
  queue: StepFunction[]
  model: Model
  jsonSpec: Map<string, JsonSpec>
  errors: ValidationErrors
  specsFolder: string
  outputFolder: string

  constructor (specsFolder: string, outputFolder: string) {
    this.queue = []
    this.errors = new ValidationErrors()
    this.specsFolder = specsFolder
    this.outputFolder = outputFolder
  }

  generateModel (): this {
    this.jsonSpec = buildJsonSpec()
    const endpoints = compileEndpoints()
    this.model = compileSpecification(endpoints, this.specsFolder, this.outputFolder)
    return this
  }

  async write (): Promise<void> {
    for (const step of this.queue) {
      this.model = await step(this.model, this.jsonSpec, this.errors)
    }

    await mkdir(join(this.outputFolder, 'schema'), { recursive: true })
    await writeFile(
      join(this.outputFolder, 'schema', 'schema.json'),
      stringify(this.model, null, 2),
      { encoding: 'utf8', flag: 'w' }
    )

    this.errors.log()

    await writeFile(
      join(this.outputFolder, 'schema', 'validation-errors.json'),
      stringify(this.errors, null, 2),
      { encoding: 'utf8', flag: 'w' }
    )
  }

  step (step: StepFunction): this {
    this.queue.push(step)
    return this
  }
}
