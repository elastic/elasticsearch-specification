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
import { Project, ts } from 'ts-morph'

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

const specsFolder = join(__dirname, '..', '..', 'specification')
const tsConfigFilePath = join(specsFolder, 'tsconfig.json')

const aliasedImports: string[] = []

async function removeImports (): Promise<void> {
  if (options.rebuild !== true) return
  const project = new Project({ tsConfigFilePath })
  for (const sourceFile of project.getSourceFiles()) {
    if (typeof options.file === 'string' && !sourceFile.getFilePath().includes(options.file)) continue
    console.log(`Removing imports in ${sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, '')}`)
    for (const declaration of sourceFile.getImportDeclarations()) {
      let hasImportAlias = false
      for (const namedImport of declaration.getNamedImports()) {
        if (namedImport.getAliasNode() != null) {
          aliasedImports.push(sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, ''))
          hasImportAlias = true
          break
        }
      }
      if (!hasImportAlias) {
        declaration.remove()
      }
    }
  }
  await project.save()
}

async function fixImports (): Promise<void> {
  const project = new Project({ tsConfigFilePath })
  for (const sourceFile of project.getSourceFiles()) {
    if (typeof options.file === 'string' && !sourceFile.getFilePath().includes(options.file)) continue
    console.log(`Updating imports in ${sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, '')}`)
    sourceFile.fixMissingImports({ semicolons: ts.SemicolonPreference.Remove }, {
      quotePreference: 'single',
      // @ts-expect-error
      importModuleSpecifierPreference: 'auto',
      includePackageJsonAutoImports: 'off'
    })
    sourceFile.organizeImports({ semicolons: ts.SemicolonPreference.Remove }, {
      quotePreference: 'single',
      // @ts-expect-error
      importModuleSpecifierPreference: 'auto',
      includePackageJsonAutoImports: 'off'
    })
  }
  await project.save()
}

removeImports()
  .then(fixImports)
  .then(() => {
    if (aliasedImports.length > 0) {
      console.log('\nThere are some import with aliases that can\'t be rebuilt automatically, run `make spec-compile` to verify if those need to be fixed manually:')
      console.log(aliasedImports.join('\n'))
    }
    console.log('\nDone!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
