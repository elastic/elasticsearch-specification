"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const ts_morph_1 = require("ts-morph");
const utils_1 = require("./model/utils");
const specsFolder = (0, path_1.join)(__dirname, '..', '..', 'specification');
const tsConfigFilePath = (0, path_1.join)(specsFolder, 'tsconfig.json');
function findDanglingTypes() {
    var _a, _b, _c, _d, _e;
    const project = new ts_morph_1.Project({ tsConfigFilePath });
    const definedButNeverUsed = [];
    for (const sourceFile of project.getSourceFiles()) {
        for (const declaration of sourceFile.getClasses()) {
            if (utils_1.customTypes.includes((_a = declaration.getName()) !== null && _a !== void 0 ? _a : ''))
                continue;
            if ((0, utils_1.isDefinedButNeverUsed)(declaration)) {
                definedButNeverUsed.push(`${(_b = declaration.getName()) !== null && _b !== void 0 ? _b : ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`);
            }
        }
        for (const declaration of sourceFile.getInterfaces()) {
            if ((0, utils_1.isDefinedButNeverUsed)(declaration)) {
                definedButNeverUsed.push(`${(_c = declaration.getName()) !== null && _c !== void 0 ? _c : ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`);
            }
        }
        for (const declaration of sourceFile.getEnums()) {
            if ((0, utils_1.isDefinedButNeverUsed)(declaration)) {
                definedButNeverUsed.push(`${(_d = declaration.getName()) !== null && _d !== void 0 ? _d : ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`);
            }
        }
        for (const declaration of sourceFile.getTypeAliases()) {
            if ((0, utils_1.isDefinedButNeverUsed)(declaration)) {
                definedButNeverUsed.push(`${(_e = declaration.getName()) !== null && _e !== void 0 ? _e : ''},${formatDanglingPath(declaration.getSourceFile().getFilePath())}`);
            }
        }
    }
    (0, fs_1.writeFileSync)((0, path_1.join)(__dirname, '..', '..', 'output', 'dangling-types', 'dangling.csv'), definedButNeverUsed.join('\n'), 'utf8');
}
function formatDanglingPath(path) {
    return path.replace(/.*[/\\]specification[/\\]?/, '');
}
findDanglingTypes();
console.log('Done!');
