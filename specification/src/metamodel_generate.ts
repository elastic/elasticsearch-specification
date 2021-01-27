import { Specification } from './api-specification'
import { loadModel } from './metamodel_reader'
import fs from 'fs'

const spec = Specification.load()

const model = loadModel(spec)

fs.writeFileSync('../output/schema/schema.json', JSON.stringify(model, null, 2))

console.log('Schema generated in ../output/schema/schema.json')
