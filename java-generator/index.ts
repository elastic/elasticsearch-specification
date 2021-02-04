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

/* tslint:disable:no-console */
import Domain from "elasticsearch-client-specification/src/domain";
import fs from "fs";
import * as changeCase from "change-case";
import {stringTypes, objectTypes, numberTypes} from "./naming";
import {$createValueObject} from "./types-value";
import {$createUnionType} from "./types-union";
import {$createClass} from "./types";
import {$createEnum} from "./enums";
import {specification} from "./specs";

import {Emitter, testIt} from "./emitter";

if (specification.domain_errors.length + specification.endpoint_errors.length !== 0) {
  if (specification.endpoint_errors.length > 0) console.error("The specification contains the following endpoint mapping errors:");
  for (const e of specification.endpoint_errors) console.error("  - " + e);
// tslint:disable-next-line:max-line-length
} else console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types.");

const $createType = (type: Domain.Interface) => {
  if (stringTypes.includes(type.name))
    return $createValueObject(type, "String");
  if (objectTypes.includes(type.name))
    return $createValueObject(type, "Object");
  if (type.implementsUnion()) return $createUnionType(type);
  return $createClass(type)
};

const $renderType = (type: Domain.TypeDeclaration) => {
  if (type instanceof Domain.Interface) return $createType(type)
  if (type instanceof Domain.Enum) return $createEnum(type);

  console.log(`Don't know how to render ${type.constructor.name}(${type.name})`);
};

const OUTPUT_DIR = "../output/java/src/main/java/org/elasticsearch";

const spec = specification;

// Do not generate, point to the hand-written version
spec.typeLookup.SingleKeyDictionary.namespace = "org.elasticsearch";

spec.types.forEach(type => {
  // Move core types to a single package -- Why?
  if (type.namespace.startsWith("mapping.types.core."))
    type.namespace = "mapping.types.core";

  if (type.namespace.endsWith(".boolean")) {
    type.namespace += "_";
  }

  if (type instanceof Domain.UnionAlias) {
    if (type.wraps.items.length === 2
      && type.wraps.items[0] instanceof Domain.Type
      && type.wraps.items[0].name === "string") {
      // Only keep the second part of the union
      //replaceType(type, new Domain.NumberAlias(type.name, ));
      return; //TODO
    }
  }

  if (type instanceof Domain.RequestInterface) {
    normalizeArrays(type.properties);
    if (type.queryParameters) {
      normalizeArrays(type.queryParameters);
    }

    if (type.body && type.body[0] instanceof Domain.InterfaceProperty) {
      // @ts-ignore
      normalizeArrays(type.body);
    }
  } else if (type instanceof Domain.Interface) {
    normalizeArrays(type.properties);
  }
})

function normalizeArrays(props: Domain.InterfaceProperty[]): void {
  props.forEach((prop, idx) => {
    if (prop.type instanceof Domain.Type && prop.type.name === "Array") {
      const newType = new Domain.ArrayOf();
      newType.of = prop.type.closedGenerics[0];
      prop.type = newType;
    }
  })
}

// generateOne("CatNodeAttributesRecord");
generateAll();

function generateOne(name: string) {
  generateType(specification.typeLookup[name]);
}

function generateAll() {
  // Cleanup previously generated files, keeping top-level helper classes.
  fs.readdirSync(OUTPUT_DIR).forEach(name => {
    const file = `${OUTPUT_DIR}/${name}`;
    if (fs.statSync(file).isDirectory()) {
      fs.rmdirSync(`${OUTPUT_DIR}/${name}`, {recursive: true})
    }
  });

  let filesCount = 0;
  for (const type of specification.types) {
    if (generateType(type)) {
      filesCount++;
    }
  }
  console.log(`${filesCount} files generated.`);
}

function generateType(type: Domain.TypeDeclaration): boolean {
  if (numberTypes.includes(type.name)
    || type.name === "Date"
    || type.name === "Dictionary"
    || type.name === "SingleKeyDictionary"
    || type instanceof Domain.StringAlias
    || type instanceof Domain.UnionAlias
    || type instanceof Domain.NumberAlias
    || type.namespace === "org.elastisearch") {
    // console.log(`Skipping ${type.constructor.name} ${type.name}`);
    return;
  }

  const ns = type.namespace;
  const folder = ns.replace(/\./g, "/");
  const exportFolder = `${OUTPUT_DIR}/${folder}`;
  if (!fs.existsSync(exportFolder)) fs.mkdirSync(exportFolder, { recursive: true });

  const render = $renderType(type);
  if (!render) {
    console.error(`Nothing generated for type ${type.constructor.name}(${type.name})`);
    return false;
  } else {
    fs.writeFileSync(`${exportFolder}/${changeCase.pascalCase(type.name)}.java`, render);
    // console.log(`Rendered type ${type.constructor.name}(${type.name})`)
    return true;
  }
}
