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

import * as model from '../model/metamodel'
import { JsonSpec } from '../model/json-spec'
import * as path from 'path'
import * as fs from 'fs'
import * as yaml from 'js-yaml'

/**
 * Scan the API folders in the specification to locate examples
 * for all the API endpoints. Then add the examples to the model.
 */
export default class ExamplesProcessor {
  specsFolder: string

  constructor (specsFolder: string) {
    this.specsFolder = specsFolder
  }

  // Add request and response examples for all the endpoints in the model.
  // Note that the 'jsonSpec' is a parameter that is passed to a 'Step'.
  // We don't need that parameter for the the 'addExamples' functionality.
  async addExamples (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
    const requestExamplesProcessor = new RequestExamplesProcessor(model, this.specsFolder)
    const responseExamplesProcessor = new ResponseExamplesProcessor(model, this.specsFolder)
    for (const endpoint of model.endpoints) {
      if (endpoint.request != null) { requestExamplesProcessor.addExamples(endpoint.request) }
      if (endpoint.response != null) { responseExamplesProcessor.addExamples(endpoint.response) }
    }
    return model
  }
}

/*
  * Base class for the request and response examples processors.
  */
class BaseExamplesProcessor {
  model: model.Model
  specsFolder: string
  static languageExamples: Record<string, model.ExampleAlternative[]> = {}

  constructor (model: model.Model, specsFolder: string) {
    this.model = model
    this.specsFolder = specsFolder
    if (Object.keys(BaseExamplesProcessor.languageExamples).length === 0) {
      // load the language examples
      const examplesJson = this.specsFolder + '/../docs/examples/languageExamples.json'
      if (fs.existsSync(examplesJson)) {
        BaseExamplesProcessor.languageExamples = JSON.parse(fs.readFileSync(examplesJson, 'utf8'))
      }
    }
  }

  // Log a 'warning' message.
  warning (message: string): void {
    console.warn('=== [ExamplesProcessor]: ' + message)
  }

  // Get all the subfolders in a folder.
  getSubfolders (folderPath: string): string[] {
    const entries = fs.readdirSync(folderPath, { withFileTypes: true })
    const folders = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
    return folders
  }

  // Get all the files in a folder.
  getFilesInFolder (folderPath: string): string[] {
    const entries = fs.readdirSync(folderPath, { withFileTypes: true })
    const files = entries
      .filter(entry => entry.isFile())
      .map(entry => entry.name)
    return files
  }

  // Check if a path exists and is a directory.
  isDirectory (path: string): boolean {
    try {
      const stats = fs.statSync(path)
      return stats.isDirectory()
    } catch (error) {
      if (error.code === 'ENOENT') {
        // Path does not exist
        return false
      } else {
        // Other error, rethrow
        throw error
      }
    }
  }

  // Given the spec location of a request or response,
  // return the path to the examples folder for that
  // request or response.
  getExamplesFolder (specLocation: string): string | undefined {
    const specDir = path.dirname(specLocation)
    const specPath = path.join(this.specsFolder, specDir)
    const examplesFolder = path.join(specPath, 'examples')
    if (this.isDirectory(examplesFolder)) {
      return examplesFolder
    }
    return undefined
  }

  // Given an examples request or response folder, return all the
  // valid example files in that folder.
  getExampleFiles (folder: string): string[] {
    if (!this.isDirectory(folder)) {
      return []
    }
    // Currently we only allow YAML example files.
    const exampleFiles = this.getFilesInFolder(folder)
      .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
    if (exampleFiles.length === 0) {
      this.warning(`No example files found in ${folder}`)
      return []
    }
    return exampleFiles
  }

  // Look up all the example files in a folder. Use the filename without extension
  // as the name of the example, and the YAML content as the example value.
  // Return a map of example names to example values.
  getExampleMap (folder: string): Map<string, model.Example> {
    const exampleFiles = this.getExampleFiles(folder)
    const examples = new Map<string, model.Example>()
    for (const fileName of exampleFiles) {
      const filePath = path.join(folder, fileName)
      const exampleFileContent = fs.readFileSync(filePath, 'utf8')
      const exampleName = path.basename(fileName, path.extname(fileName))
      const example: model.Example = yaml.load(exampleFileContent)
      // find the language alternative examples and add them
      const alternativeKey = 'specification/' + filePath.split('/specification/')[1]
      if (BaseExamplesProcessor.languageExamples[alternativeKey] !== undefined) {
        example.alternatives = BaseExamplesProcessor.languageExamples[alternativeKey]
      }
      // Some of the example files set their 'value' as a JSON string,
      // and some files set their 'value' as an object. For consistency,
      // if the value is not a JSON string, convert it to a JSON string.
      if (typeof example.value !== 'string') {
        // Convert to prettified JSON string
        example.value = JSON.stringify(example.value, null, 2)
      }
      examples.set(exampleName, example)
    }
    return examples
  }
}

/*
  * Class to add the examples for an API request
  */
class RequestExamplesProcessor extends BaseExamplesProcessor {
  // Traverse all the types in the model to find a type that is
  // of type 'request' and has the same name and namespace as the request.
  getRequestDefinition (model: model.Model, request: model.TypeName): model.Request {
    for (const type of model.types) {
      if (type.kind === 'request') {
        if (type.name.name === request.name && type.name.namespace === request.namespace) {
          return type
        }
      }
    }
    throw new Error(`Can't find the request definiton for ${request.namespace}.${request.name}`)
  }

  // Given the spec location, return the request examples folder, if it exists.
  getExamplesRequestSubfolder (examplesSubfolder: string): string | undefined {
    const subFolder = path.join(examplesSubfolder, 'request')
    if (this.isDirectory(subFolder)) {
      return subFolder
    }
    return undefined
  }

  // Find all the request examples for this request and add them to the model.
  addExamples (request: model.TypeName): void {
    const requestDefinition = this.getRequestDefinition(this.model, request)
    const examplesFolder = this.getExamplesFolder(requestDefinition.specLocation)
    if (examplesFolder === undefined) {
      return
    }
    // Get the request examples subfolder.
    const examplesRequestSubfolder = this.getExamplesRequestSubfolder(examplesFolder)
    // If there is an examples/request folder, add the request examples to the model.
    if (examplesRequestSubfolder !== undefined) {
      const examples = this.getExampleMap(examplesRequestSubfolder)
      if (examples.size > 0) {
        requestDefinition.examples = Object.fromEntries(examples)
      }
    }
  }
}

/*
  * Class to add the examples for an API response
  */
class ResponseExamplesProcessor extends BaseExamplesProcessor {
  // Traverse all the types in the model to find a type that is
  // of type 'response' and has the same name and namespace as the response.
  getResponseDefinition (model: model.Model, response: model.TypeName): model.Response {
    for (const type of model.types) {
      if (type.kind === 'response') {
        if (type.name.name === response.name && type.name.namespace === response.namespace) {
          return type
        }
      }
    }
    throw new Error(`Can't find the response definiton for ${response.namespace}.${response.name}`)
  }

  // Given the spec location, return the response example folders if they exists.
  // A response example folder can be of either of these forms:
  //     response
  //     {nnn}_response
  // Where {nnn} is the HTTP response code. If the folder is named 'response',
  // assume that the response code is 200, otherwise pick up the response code
  // from the folder name.
  // Return a map of status code to the folder path.
  getExamplesResponseSubfolderMap (examplesSubfolder: string): Map<string, string> | undefined {
    const subfolders = this.getSubfolders(examplesSubfolder)
    // If we have a "response" subfolder, stop there and return.
    // We should not have a mix of response and {nnn}_response folders.
    if (subfolders.includes('response')) {
      const responseSubfolder = path.join(examplesSubfolder, 'response')
      return new Map([['200', responseSubfolder]])
    }
    // Look for subfolders of the format '{nnn}_response'.
    const rspSubfolders = subfolders.filter(folder => folder.endsWith('_response'))
    const responseTypeMap = new Map<string, string>()
    for (const rspSubfolder of rspSubfolders) {
      const match = rspSubfolder.match(/^([0-9]{3})_response$/)
      if (match == null) {
        throw new Error(`Unexpected response folder: ${rspSubfolder}`)
      }
      const statusCode = match[1]
      const responseSubfolder = path.join(examplesSubfolder, rspSubfolder)
      responseTypeMap.set(statusCode, responseSubfolder)
    }
    return responseTypeMap
  }

  // Find all the response examples for this request and add them to the model.
  addExamples (response: model.TypeName): void {
    const responseDefinition = this.getResponseDefinition(this.model, response)
    const examplesFolder = this.getExamplesFolder(responseDefinition.specLocation)
    if (examplesFolder === undefined) {
      return
    }
    // Get a map of status code to response example subfolder.
    const examplesResponseSubfolderMap = this.getExamplesResponseSubfolderMap(examplesFolder)
    const examples200ResponseSubfolder = examplesResponseSubfolderMap?.get('200')
    // If there is an examples/response or examples/200_response folder,
    // add the response examples to the model.
    if (examples200ResponseSubfolder !== undefined) {
      const examples = this.getExampleMap(examples200ResponseSubfolder)
      if (examples.size > 0) {
        responseDefinition.examples = Object.fromEntries(examples)
      }
    }
  }
}
