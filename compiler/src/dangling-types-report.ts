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

import { writeFileSync } from 'fs'
import { join } from 'path'
import { Project } from 'ts-morph'
import { isDefinedButNeverUsed, customTypes } from './model/utils'

const specsFolder = join(__dirname, '..', '..', 'specification')
const tsConfigFilePath = join(specsFolder, 'tsconfig.json')

function findDanglingTypes (): void {
  const project = new Project({ tsConfigFilePath })

  const definedButNeverUsed: string[] = []
  for (const sourceFile of project.getSourceFiles()) {
    for (const declaration of sourceFile.getClasses()) {
      if (customTypes.includes(declaration.getName() ?? '')) continue
      if (isDefinedButNeverUsed(declaration)) {
        definedButNeverUsed.push(`${declaration.getName() ?? ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`)
      }
    }
    for (const declaration of sourceFile.getInterfaces()) {
      if (isDefinedButNeverUsed(declaration)) {
        definedButNeverUsed.push(`${declaration.getName() ?? ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`)
      }
    }
    for (const declaration of sourceFile.getEnums()) {
      if (isDefinedButNeverUsed(declaration)) {
        definedButNeverUsed.push(`${declaration.getName() ?? ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`)
      }
    }
    for (const declaration of sourceFile.getTypeAliases()) {
      if (isDefinedButNeverUsed(declaration)) {
        definedButNeverUsed.push(`${declaration.getName() ?? ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`)
      }
    }
  }

  writeFileSync(
    join(__dirname, '..', '..', 'output', 'dangling-types', 'dangling.csv'),
    definedButNeverUsed.join('\n'),
    'utf8'
  )
}

function formatDanglingPath (path: string): string {
  return path.replace(/.*[/\\]specification[/\\]?/, '')
}

findDanglingTypes()
console.log('Done!')
