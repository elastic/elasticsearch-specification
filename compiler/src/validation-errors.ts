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

const IGNORED_ERRORS = [
  "request definition xpack.info:Request / query - Property 'human' is already defined in an ancestor class"
]

/** Errors for an endpoint */
export class EndpointError {
  request: string[]
  response: string[]
}

/** Model errors: general errors and endpoint errors */
export class ValidationErrors {
  generalErrors: string[]
  endpointErrors: Record<string, EndpointError>

  constructor () {
    this.generalErrors = []
    this.endpointErrors = {}
  }

  /** Add some error information relative to an endpoint's request or response */
  addEndpointError (endpoint: string, part: 'request' | 'response', message: string): void {
    if (IGNORED_ERRORS.includes(message)) {
      return
    }

    let error = this.endpointErrors[endpoint]
    if (error == null) {
      error = { request: [], response: [] }
      this.endpointErrors[endpoint] = error
    }

    error[part].push(message)
  }

  /** Add a general error, unrelated to an endpoint */
  addGeneralError (message: string): void {
    this.generalErrors.push(message)
  }

  /** Output this error log to the console */
  log (): void {
    let count = 0
    const logArray = function (errs: string[], prefix = ''): void {
      for (const err of errs) {
        console.error(`${prefix}${err}`)
        count++
      }
    }

    logArray(this.generalErrors)
    // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
    const names = Array.from(Object.keys(this.endpointErrors)).sort()
    for (const name of names) {
      const endpointErrs = this.endpointErrors[name]
      if (endpointErrs != null) {
        for (const part of ['request', 'response']) {
          logArray(endpointErrs[part], `${name} ${part}: `)
        }
      }
    }

    console.error(`${count} errors found.`)
  }
}
