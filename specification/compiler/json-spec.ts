/* eslint-disable @typescript-eslint/no-var-requires */

import { join } from 'path'
import { readdirSync } from 'fs'

const jsonSpecPath = join(__dirname, '..', 'specs', '_json_spec')

interface JsonSpec {
  documentation: {
    url: string
    description: string
  }
  stability: 'stable' | 'beta' | 'experimental'
  url: {
    paths: Array<{
      path: string
      method: string[]
      parts?: Record<string, {
        type: string
        description: string
        deprecated?: boolean
      }>
      deprecated?: {
        version: string
        description: string
      }
    }>
  }
  params: Record<string, {
    type: string
    description: string
    options?: string[]
  }>
  body?: {
    description: string
    required?: boolean
  }
}

export default function buildJsonSpec (): Map<string, JsonSpec> {
  const files = readdirSync(jsonSpecPath)
    .filter(file => file.endsWith('.json'))

  const map = new Map()
  for (const file of files) {
    const json = require(join(jsonSpecPath, file))
    const name = Object.keys(json)[0]
    map.set(name, json[name])
  }

  return map
}
