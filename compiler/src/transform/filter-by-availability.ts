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

import { Availabilities, Endpoint, Model, TypeDefinition, TypeName, ValueOf } from '../model/metamodel'
import { readFile, writeFile } from 'fs/promises'
import stringify from 'safe-stable-stringify'
import { argv } from 'zx'
import { join } from 'path'

function filterModel (inputModel: Model, stack, serverless: boolean): Model {
  // filter used against the provided availability
  // used to filter out endpoints and as a filter for items with availability (Enum & Property).
  function include (availabilities: Availabilities, stack: boolean, serverless: boolean): boolean {
    if ((availabilities.stack != null) && stack && !serverless) {
      return true
    }
    if ((availabilities.serverless != null) && serverless && !stack) {
      return true
    }
    if (((availabilities.serverless != null) || (availabilities.stack != null)) && serverless && stack) {
      return true
    }
    return false
  }

  // used to filter out individual items within types.
  function filterItem () {
    return (item) => {
      return (item.availability !== undefined) ? include(item.availability, stack, serverless) : true
    }
  }

  // short comparison for two TypeNames
  function cmpTypeNames (t1, t2: TypeName): boolean {
    return t1.name === t2.name && t1.namespace === t2.namespace
  }

  // return early if the type already has been added
  // fetches the original type from the input model
  // save its presence to prevent recursion and doubles
  // continues down the type tree for any new types
  function addTypeToOutput (typeName: TypeName): void {
    if (seen.get(typeName.namespace)?.includes(typeName.name) === true) {
      return
    }

    inputModel.types.forEach((typeDef) => {
      if (cmpTypeNames(typeName, typeDef.name)) {
        // add the TypeDefinition to the output
        output.types.push(typeDef)

        // store the type infos to prevent doubles & recursive calls
        if (seen.get(typeName.namespace) !== undefined) {
          seen.get(typeName.namespace)?.push(typeName.name)
        } else {
          seen.set(typeName.namespace, [typeName.name])
        }

        // first time seeing this type so we explore the type
        exploreTypedef(typeDef)
      }
    })
  }

  // handles the basic type field we can find
  // user_defined_value and literal_value are omitted.
  function addValueOf (item: ValueOf): void {
    switch (item.kind) {
      case 'instance_of':
        addTypeToOutput(item.type)
        break
      case 'array_of':
        addValueOf(item.value)
        break
      case 'union_of':
        item.items.forEach((member) => {
          addValueOf(member)
        })
        break
      case 'dictionary_of':
        addValueOf(item.key)
        addValueOf(item.value)
        break
    }
  }

  function exploreTypedef (typeDef: TypeDefinition): void {
    // handle generics
    // not really useful for everyone, still useful for type_alias
    if (typeDef.kind === 'interface' || typeDef.kind === 'request' || typeDef.kind === 'response' || typeDef.kind === 'type_alias') {
      typeDef.generics?.forEach((generic) => {
        addTypeToOutput(generic)
      })
    }

    // handle behaviors
    if (typeDef.kind === 'interface' || typeDef.kind === 'request' || typeDef.kind === 'response') {
      typeDef.behaviors?.forEach((behavior) => {
        addTypeToOutput(behavior.type)
        behavior.generics?.forEach((generic) => {
          addValueOf(generic)
        })
      })
    }

    // handle inherits & implements
    if (typeDef.kind === 'interface' || typeDef.kind === 'request') {
      if (typeDef.inherits !== undefined) {
        addTypeToOutput(typeDef.inherits.type)
      }
      typeDef.implements?.forEach((implemented) => {
        addTypeToOutput(implemented.type)
      })
    }

    // handle body value and body properties for request and response
    if (typeDef.kind === 'request' || typeDef.kind === 'response') {
      switch (typeDef.body.kind) {
        case 'value':
          addValueOf(typeDef.body.value)
          break
        case 'properties':
          typeDef.body.properties.forEach((property) => {
            addValueOf(property.type)
          })
          break
      }
    }

    // left over specific cases
    switch (typeDef.kind) {
      case 'interface':
        typeDef.properties.forEach((property) => {
          addValueOf(property.type)
        })
        break

      case 'request':
        typeDef.path.forEach((path) => {
          addValueOf(path.type)
        })
        typeDef.query.forEach((query) => {
          addValueOf(query.type)
        })
        break

      case 'type_alias':
        addValueOf(typeDef.type)
        break
    }
  }

  const seen = new Map<string, string[]>()

  const output: Model = {
    _info: inputModel._info,
    types: new Array<TypeDefinition>(),
    endpoints: new Array<Endpoint>()
  }

  // we filter to include only the matching endpoints
  inputModel.endpoints.forEach((endpoint) => {
    if (include(endpoint.availability, stack, serverless)) {
      // add the current endpoint
      output.endpoints.push(endpoint)

      // add the request and response type for current endpoint
      inputModel.types.forEach((typeDef) => {
        if (((endpoint.request !== null) && cmpTypeNames(endpoint.request, typeDef.name)) || ((endpoint.response !== null) && cmpTypeNames(endpoint.response, typeDef.name))) {
          output.types.push(typeDef)
        }
      })
    }
  })

  // filter type items (properties / enum members)
  inputModel.types.forEach((typeDef) => {
    switch (typeDef.kind) {
      case 'interface':
        typeDef.properties = typeDef.properties.filter(filterItem())
        break
      case 'enum':
        typeDef.members = typeDef.members.filter(filterItem())
        addTypeToOutput(typeDef.name)
        break
      case 'request':
        output.endpoints.forEach((endpoint) => {
          if (endpoint.request?.name === typeDef.name.name && endpoint.request.namespace === typeDef.name.namespace) {
            typeDef.path = typeDef.path.filter(filterItem())
            typeDef.query = typeDef.query.filter(filterItem())
            // filter out body properties
            switch (typeDef.body.kind) {
              case 'properties':
                typeDef.body.properties = typeDef.body.properties.filter(filterItem())
                break
            }
          }
        })
        break
      case 'response':
        output.endpoints.forEach((endpoint) => {
          if (endpoint.response?.name === typeDef.name.name && endpoint.response.namespace === typeDef.name.namespace) {
            // filter out body properties
            switch (typeDef.body.kind) {
              case 'properties':
                typeDef.body.properties = typeDef.body.properties.filter(filterItem())
                break
            }
          }
        })
        break
      case 'type_alias':
        addTypeToOutput(typeDef.name)
    }
  })

  // we complete the spec with the missing types for the tree until exhaustion
  output.types.forEach((typeDef) => {
    exploreTypedef(typeDef)
  })

  return output
}

async function filterSchema (inPath: string, outPath: string, stack: boolean, serverless: boolean): Promise<void> {
  if (!stack && !serverless) {
    throw new Error('Expected one of --stack or --serverless to be specified.')
  }

  const inputText = await readFile(
    inPath,
    { encoding: 'utf8' }
  )

  const inputModel = JSON.parse(inputText)
  const outputModel = filterModel(inputModel, stack, serverless)

  console.log(outputModel.endpoints.length)
  console.log(outputModel.types.length)

  await writeFile(
    outPath,
    stringify(outputModel, null, 2),
    'utf8'
  )
}

const inputPath: string = argv.input ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json')
const outputPath = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema-filtered.json')
const stack: boolean = (argv.stack !== undefined)
const serverless: boolean = (argv.serverless !== undefined)

// Usage:
// npm run filter-by-availability -- [--serverless|--stack]
// Optional args:
// input, if not provided default to versioned schema.json
// output, if not provided default to schema-filtered.json
filterSchema(inputPath, outputPath, stack, serverless)
  .catch(reason => {
    console.error((reason.message !== null) ? reason.message : reason)
  })
  .finally(() => console.log('Done, filtered schema is at', outputPath))
