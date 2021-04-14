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

import { join } from 'path'
import minimist from 'minimist'
import { Project } from 'ts-morph'

const options = minimist(process.argv.slice(2), {
  string: ['file'],
  boolean: ['rebuild', 'help'],
  default: {
    rebuild: false,
    help: false
  }
})

if (options.help === true) {
  console.log(`
npm run imports:fix -- [options]

Example: npm run imports:fix -- --help

--file <filename>   Useful if you want to fix a specific file instead of the entire specification.

--rebuild           This script can't fix broken imports (eg: the path is wrong). To adress this
                    you can use this option, which will remove and recreate the imports alltogheter.

--help              Prints this message.
`)
  process.exit(0)
}

const specsFolder = join(__dirname, '..', 'specification')
const tsConfigFilePath = join(specsFolder, 'tsconfig.json')

async function removeImports (): Promise<void> {
  if (options.rebuild !== true) return
  const project = new Project({ tsConfigFilePath })
  for (const sourceFile of project.getSourceFiles()) {
    if (typeof options.file === 'string' && !sourceFile.getFilePath().includes(options.file)) continue
    console.log(`Removing imports in ${sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, '')}`)
    for (const declaration of sourceFile.getImportDeclarations()) {
      declaration.remove()
    }
  }
  await project.save()
}

async function fixImports (): Promise<void> {
  const project = new Project({ tsConfigFilePath })
  for (const sourceFile of project.getSourceFiles()) {
    if (typeof options.file === 'string' && !sourceFile.getFilePath().includes(options.file)) continue
    console.log(`Updating imports in ${sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, '')}`)
    sourceFile.fixMissingImports({}, { quotePreference: 'single' })
    sourceFile.organizeImports({}, { quotePreference: 'single' })
  }
  await project.save()
}

removeImports()
  .then(fixImports)
  .then(() => {
    console.log('Done!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
