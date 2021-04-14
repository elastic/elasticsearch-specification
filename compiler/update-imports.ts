import { join } from 'path'
import ora from 'ora'
import minimist from 'minimist'
import {
  Project
} from 'ts-morph'

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

const log = ora('Updating spec').start()
const specsFolder = join(__dirname, '..', 'specification')
const tsConfigFilePath = join(specsFolder, 'tsconfig.json')

async function removeImports (): Promise<void> {
  if (options.rebuild !== true) return
  const project = new Project({ tsConfigFilePath })
  for (const sourceFile of project.getSourceFiles()) {
    if (typeof options.file === 'string' && !sourceFile.getFilePath().includes(options.file)) continue
    log.text = `Removing imports in ${sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, '')}`
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
    log.text = `Updating imports in ${sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, '')}`
    sourceFile.fixMissingImports({}, { quotePreference: 'single' })
    sourceFile.organizeImports({}, { quotePreference: 'single' })
  }
  await project.save()
}

removeImports()
  .then(fixImports)
  .then(() => {
    log.succeed('Done!')
  })
  .catch(err => {
    log.fail(err)
    console.log(err)
    process.exit(1)
  })
