"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const jsonSpecPath = (0, path_1.join)(__dirname, '..', '..', '..', 'specification', '_json_spec');
function buildJsonSpec() {
    const files = (0, fs_1.readdirSync)(jsonSpecPath)
        .filter(file => file.endsWith('.json'));
    const map = new Map();
    for (const file of files) {
        const json = require((0, path_1.join)(jsonSpecPath, file));
        const name = Object.keys(json)[0];
        map.set(name, json[name]);
    }
    return map;
}
exports.default = buildJsonSpec;
