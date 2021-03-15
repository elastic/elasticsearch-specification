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

/** Errors for an endpoint */
export class EndpointError {
  request: string[]
  response: string[]
}

/** Model errors: general errors and endpoint errors */
export class ValidationErrors {
  generalErrors: string[]
  endpointErrors: Record<string, EndpointError>
}

const endpointErrors = new Map<string, EndpointError>()
const generalErrors: string[] = []

/** Add some error information relative to an endpoint's request or response */
export function addEndpointError (endpoint: string, part: 'request' | 'response', message: string): void {
  let error = endpointErrors.get(endpoint)
  if (error == null) {
    error = { request: [], response: [] }
    endpointErrors.set(endpoint, error)
  }

  error[part].push(message)
}

/** Add a general error, unrelated to an endpoint */
export function addGeneralError (message: string): void {
  generalErrors.push(message)
}

export function getValidationErrors (): ValidationErrors {
  const result = {
    generalErrors: generalErrors,
    endpointErrors: {}
  }

  // Filter out endpoints with no errors
  for (const [endpoint, error] of endpointErrors) {
    if (error.request.length !== 0 || error.response.length !== 0) {
      result.endpointErrors[endpoint] = error
    }
  }

  return result
}

export function logErrors (): void {
  const logArray = function (errs: string[], prefix = ''): void {
    for (const err of errs) {
      console.error(`${prefix}${err}`)
    }
  }

  logArray(generalErrors)
  // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
  const names = Array.from(endpointErrors.keys()).sort()
  for (const name of names) {
    const endpointErrs = endpointErrors.get(name)
    if (endpointErrs != null) {
      for (const part of ['request', 'response']) {
        logArray(endpointErrs[part], `${name} ${part}`)
      }
    }
  }
}
