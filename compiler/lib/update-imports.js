"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const minimist_1 = __importDefault(require("minimist"));
const ts_morph_1 = require("ts-morph");
const options = (0, minimist_1.default)(process.argv.slice(2), {
    string: ['file'],
    boolean: ['rebuild', 'help'],
    default: {
        rebuild: false,
        help: false
    }
});
if (options.help === true) {
    console.log(`
npm run imports:fix -- [options]

Example: npm run imports:fix -- --help

--file <filename>   Useful if you want to fix a specific file instead of the entire specification.

--rebuild           This script can't fix broken imports (eg: the path is wrong). To adress this
                    you can use this option, which will remove and recreate the imports alltogheter.

--help              Prints this message.
`);
    process.exit(0);
}
const specsFolder = (0, path_1.join)(__dirname, '..', '..', 'specification');
const tsConfigFilePath = (0, path_1.join)(specsFolder, 'tsconfig.json');
const aliasedImports = [];
async function removeImports() {
    if (options.rebuild !== true)
        return;
    const project = new ts_morph_1.Project({ tsConfigFilePath });
    for (const sourceFile of project.getSourceFiles()) {
        if (typeof options.file === 'string' && !sourceFile.getFilePath().includes(options.file))
            continue;
        console.log(`Removing imports in ${sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, '')}`);
        for (const declaration of sourceFile.getImportDeclarations()) {
            let hasImportAlias = false;
            for (const namedImport of declaration.getNamedImports()) {
                if (namedImport.getAliasNode() != null) {
                    aliasedImports.push(sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, ''));
                    hasImportAlias = true;
                    break;
                }
            }
            if (!hasImportAlias) {
                declaration.remove();
            }
        }
    }
    await project.save();
}
async function fixImports() {
    const project = new ts_morph_1.Project({ tsConfigFilePath });
    for (const sourceFile of project.getSourceFiles()) {
        if (typeof options.file === 'string' && !sourceFile.getFilePath().includes(options.file))
            continue;
        console.log(`Updating imports in ${sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, '')}`);
        sourceFile.fixMissingImports({ semicolons: ts_morph_1.ts.SemicolonPreference.Remove }, {
            quotePreference: 'single',
            importModuleSpecifierPreference: 'auto',
            includePackageJsonAutoImports: 'off'
        });
        sourceFile.organizeImports({ semicolons: ts_morph_1.ts.SemicolonPreference.Remove }, {
            quotePreference: 'single',
            importModuleSpecifierPreference: 'auto',
            includePackageJsonAutoImports: 'off'
        });
    }
    await project.save();
}
removeImports()
    .then(fixImports)
    .then(() => {
    if (aliasedImports.length > 0) {
        console.log('\nThere are some import with aliases that can\'t be rebuilt automatically, run `make spec-compile` to verify if those need to be fixed manually:');
        console.log(aliasedImports.join('\n'));
    }
    console.log('\nDone!');
})
    .catch(err => {
    console.log(err);
    process.exit(1);
});
