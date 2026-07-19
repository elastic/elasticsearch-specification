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

/* global $ argv, path, cd, nothrow */

import { Model, TypeName, Property, ValueOf } from './metamodel';

type TypeChange = {
  codegenName: string,
  oldType: string,
  newType: string,
};

type PropertyChanges = {
  addedProperties: string[],
  removedProperties: string[],
  changedProperties: Record<string, TypeChange>,
  isEnum: boolean,
};

type EndpointChanges = {
  requestPath?: PropertyChanges,
  requestQuery?: PropertyChanges,
  requestBody?: PropertyChanges,
  responseBody?: PropertyChanges,
};

type Changes = {
  addedEndpoints: string[],
  removedEndpoints: string[],
  changedEndpoints: Record<string, EndpointChanges>,
  changedTypes: Record<string, PropertyChanges>,
};

async function downloadSchema(branch: string): Promise<Model> {
  const response = await fetch(`https://raw.githubusercontent.com/elastic/elasticsearch-specification/${branch}/output/schema/schema.json`);
  if (response.ok) {
    return await response.json();
  }
  console.log(`Cannot read schema for branch ${branch}`);
  process.exit(1);
}

function findEndpoint(name: string, schema: Model) {
  for (const endpoint of schema.endpoints) {
    if (endpoint.name === name) {
      return endpoint;
    }
  }
}

function findType(typeName: TypeName, schema: Model) {
  for (const type of schema.types) {
    if (type.name.namespace === typeName.namespace && type.name.name === typeName.name) {
      return type;
    }
  }
}

function findProp(name: string, props: Property[]) {
  for (const prop of props) {
    if (prop.name === name) {
      return prop;
    }
  }
}

function typeToString(type: ValueOf) {
  if (type.kind === "instance_of") {
    return `\`${type.type.name}\``;
  }
  else if (type.kind === "array_of") {
    return "array of " + typeToString(type.value);
  }
  else if (type.kind === "dictionary_of") {
    return "associative array with " + typeToString(type.key) + " keys and " + typeToString(type.value) + " values";
  }
  else if (type.kind === "union_of") {
    const items = type.items.map(t => typeToString(t))
    return items.slice(0, -1).join(', ') + ' or ' + items[items.length - 1];
  }
  else if (type.kind === "literal_value") {
    return JSON.stringify(type.value);
  }
  else if (type.kind === "user_defined_value") {
    return "<user-defined>";
  }
}

async function diffSchema(oldBranch: string, newBranch: string) {
  const changes: Changes = {
    addedEndpoints: [],
    removedEndpoints: [],
    changedEndpoints: {},
    changedTypes: {},
  };

  function diffProps(oldProps: Property[], newProps: Property[], propKind: string, endpoint?: string) {
    const chg: PropertyChanges = {
      addedProperties: [],
      removedProperties: [],
      changedProperties: {},
      isEnum: false,
    };
    for (const newProp of newProps) {
      const oldProp = findProp(newProp.name, oldProps);
      if (!oldProp) {
        chg.addedProperties.push(newProp.name);
      }
      else {
        const oldType = typeToString(oldProp.type);
        const newType = typeToString(newProp.type);
        if (oldType != newType) {
          chg.changedProperties[newProp.name] = {
            codegenName: newProp.codegenName ?? '',
            oldType: oldType,
            newType: newType,
          };
        }
      }
    }
    for (const oldProp of oldProps) {
      const newProp = findProp(oldProp.name, newProps);
      if (!newProp) {
        chg.removedProperties.push(oldProp.name);
        continue;
      }
    }
    if (chg.addedProperties.length || chg.removedProperties.length || Object.keys(chg.changedProperties).length) {
      if (endpoint) {
        if (!changes.changedEndpoints[endpoint]) {
          changes.changedEndpoints[endpoint] = {};
        }
        if (!changes.changedEndpoints[endpoint][propKind]) {
          changes.changedEndpoints[endpoint][propKind] = {};
        }
        changes.changedEndpoints[endpoint][propKind] = chg;
      }
      else {
        changes.changedTypes[propKind] = chg;
      }
    }
  }

  const oldSchema = await downloadSchema(oldBranch);
  const newSchema = await downloadSchema(newBranch);

  for (const newEndpoint of newSchema.endpoints) {
    const oldEndpoint = findEndpoint(newEndpoint.name, oldSchema);
    if (!oldEndpoint) {
      changes.addedEndpoints.push(newEndpoint.name);
      continue;
    }

    if (newEndpoint.request && oldEndpoint.request) {
      const newRequest = findType(newEndpoint.request, newSchema);
      const oldRequest = findType(oldEndpoint.request, oldSchema);
      if (newRequest && newRequest.kind != 'request') {
        console.log(`Error: Request for endpoint ${newEndpoint.name} has unexpected type`);
        continue;
      }
      else if (!newRequest) {
        continue;
      }
      if (oldRequest && oldRequest.kind != 'request') {
        console.log(`Error: Request for endpoint ${newEndpoint.name} has unexpected type`);
        continue;
      }
      else if (!oldRequest) {
        continue;
      }
      diffProps(oldRequest.path, newRequest.path, 'requestPath', newEndpoint.name);
      diffProps(oldRequest.query, newRequest.query, 'requestQuery', newEndpoint.name);
      if (oldRequest.body.kind === 'properties' && newRequest.body.kind === 'properties') {
        diffProps(oldRequest.body.properties, newRequest.body.properties, 'requestBody', newEndpoint.name);
      }
      else if (oldRequest.body.kind !== newRequest.body.kind) {
        console.log(`Error: Unsupported request body type change for endpoint ${newEndpoint.name}`);
      }
    }
    if (newEndpoint.response && oldEndpoint.response) {
      const newResponse = findType(newEndpoint.response, newSchema);
      const oldResponse = findType(oldEndpoint.response, oldSchema);
      if (newResponse && newResponse.kind != 'response') {
        console.log(`Error: Response for endpoint ${newEndpoint.name} has unexpected type`);
        continue;
      }
      else if (!newResponse) {
        continue;
      }
      if (oldResponse && oldResponse.kind != 'response') {
        console.log(`Error: Response for endpoint ${newEndpoint.name} has unexpected type`);
        continue;
      }
      else if (!oldResponse) {
        continue;
      }
      if (oldResponse.body.kind === 'properties' && newResponse.body.kind === 'properties') {
        diffProps(oldResponse.body.properties, newResponse.body.properties, 'responseBody', newEndpoint.name);
      }
      else if (oldResponse.body.kind !== newResponse.body.kind) {
        console.log(`Error: Unsupported response body type change for endpoint ${newEndpoint.name}`);
      }
    }
  }
  for (const oldEndpoint of oldSchema.endpoints) {
    const newEndpoint = findEndpoint(oldEndpoint.name, newSchema);
    if (!newEndpoint) {
      changes.removedEndpoints.push(oldEndpoint.name);
    }
  }

  for (const newType of newSchema.types) {
    const name = `${newType.name.namespace}::${newType.name.name}`;
    if (newType.kind === "interface") {
      const oldType = findType(newType.name, oldSchema);
      if (oldType && oldType.kind === 'interface') {
        diffProps(oldType.properties, newType.properties, name);
      }
    }
    else if (newType.kind === "enum") {
      const oldType = findType(newType.name, oldSchema);
      if (oldType && oldType.kind === 'enum') {
        for (const newMember of newType.members) {
          const oldMember = oldType.members.find(m => m.name === newMember.name);
          if (!oldMember) {
            if (!changes.changedTypes[name]) {
              changes.changedTypes[name] = {
                addedProperties: [],
                removedProperties: [],
                changedProperties: {},
                isEnum: true,
              }
            }
            changes.changedTypes[name].addedProperties.push(newMember.name);
          }
        }
        for (const oldMember of oldType.members) {
          const newMember = newType.members.find(m => m.name === oldMember.name);
          if (!newMember) {
            if (!changes.changedTypes[name]) {
              changes.changedTypes[name] = {
                addedProperties: [],
                removedProperties: [],
                changedProperties: {},
                isEnum: true,
              }
            }
            changes.changedTypes[name].removedProperties.push(oldMember.name);
          }
        }
      }
    }
  }

  return changes;
}

function diffToMarkdown(changes: any) {
  const formatEndpoint = (e: string) => {
    const p = e.split('.');
    if (p.length == 1) {
      return `\`${e}\``;
    }
    return `\`${p[1]}\` (\`${p[0]}\` namespace)`;
  };

  const formatType = (t: string) => {
    const p = t.split('::');
    if (p.length == 1) {
      return `\`${t}\``;
    }
    const q = p[0].split('.');
    if (q.length == 1) {
      if (q[0].startsWith('_')) {
        return `\`${p[1]}\``;
      }
      return `\`${p[1]}\` (\`${p[0]}\` namespace)`;
    }
    return `\`${p[1]}\` (\`${q[0]}\` namespace)`;
  };

  if (changes.addedEndpoints.length) {
    console.log('# Added APIs');
    for (const e of changes.addedEndpoints) {
      console.log(`- ${formatEndpoint(e)}`);
    }
    console.log('');
  }
  if (changes.removedEndpoints.length) {
    console.log('# Removed APIs');
    for (const e of changes.removedEndpoints) {
      console.log(`- ${formatEndpoint(e)}`);
    }
    console.log('');
  }
  if (changes.changedEndpoints) {
    console.log('# Modified APIs');
    for (const e in changes.changedEndpoints) {
      console.log(`\n## ${formatEndpoint(e)}`);
      for (const p of changes.changedEndpoints[e].requestPath?.addedProperties ?? []) {
        console.log(`- Added \`${p}\` path property`);
      }
      for (const p of changes.changedEndpoints[e].requestQuery?.addedProperties ?? []) {
        console.log(`- Added \`${p}\` query property`);
      }
      for (const p of changes.changedEndpoints[e].requestBody?.addedProperties ?? []) {
        console.log(`- Added \`${p}\` request body property`);
      }
      for (const p of changes.changedEndpoints[e].responseBody?.addedProperties ?? []) {
        console.log(`- Added \`${p}\` response body property`);
      }

      for (const p in changes.changedEndpoints[e].requestPath?.changedProperties ?? {}) {
        const ch = changes.changedEndpoints[e].requestPath?.changedProperties?.[p];
        if (ch) {
          console.log(`- Changed type of \`${p}\` path property to ${ch.newType}`);
        }
      }
      for (const p in changes.changedEndpoints[e].requestQuery?.changedProperties ?? {}) {
        const ch = changes.changedEndpoints[e].requestQuery?.changedProperties?.[p];
        if (ch) {
          console.log(`- Changed type of \`${p}\` query property to ${ch.newType}`);
        }
      }
      for (const p in changes.changedEndpoints[e].requestBody?.changedProperties ?? {}) {
        const ch = changes.changedEndpoints[e].requestBody?.changedProperties?.[p];
        if (ch) {
          console.log(`- Changed type of \`${p}\` request body property to ${ch.newType}`);
        }
      }
      for (const p in changes.changedEndpoints[e].responseBody?.changedProperties ?? {}) {
        const ch = changes.changedEndpoints[e].responseBody?.changedProperties?.[p];
        if (ch) {
          console.log(`- Changed type of \`${p}\` response body property to ${ch.newType}`);
        }
      }

      for (const p of changes.changedEndpoints[e].requestPath?.removedProperties ?? []) {
        console.log(`- Removed \`${p}\` path property`);
      }
      for (const p of changes.changedEndpoints[e].requestQuery?.removedProperties ?? []) {
        console.log(`- Removed \`${p}\` query property`);
      }
      for (const p of changes.changedEndpoints[e].requestBody?.removedProperties ?? []) {
        console.log(`- Removed \`${p}\` request body property`);
      }
      for (const p of changes.changedEndpoints[e].responseBody?.removedProperties ?? []) {
        console.log(`- Removed \`${p}\` response body property`);
      }
      if (changes.changedEndpoints[e].requestBody?.changed) {
        console.log(`- Response body type changed to ${changes.changedEndpoints[e].requestBody.changed.newType}`);
      }
      if (changes.changedEndpoints[e].responseBody?.changed) {
        console.log(`- Response body type changed to ${changes.changedEndpoints[e].responseBody.changed.newType}`);
      }
    }
    console.log('');
  }
  if (changes.changedTypes) {
    console.log('# Modified Types');
    for (const t in changes.changedTypes) {
      const ch = changes.changedTypes[t];
      if (!ch.isEnum) {
        console.log(`\n## ${formatType(t)} type`);
        for (const p of changes.changedTypes[t].addedProperties ?? []) {
          console.log(`- Added \`${p}\` property`);
        }
        for (const p in changes.changedTypes[t].changedProperties ?? {}) {
          const ch = changes.changedTypes[t].changedProperties?.[p];
          if (ch) {
            console.log(`- Changed type of \`${p}\` property to ${ch.newType}`);
          }
        }
        for (const p of changes.changedTypes[t].removedProperties ?? []) {
          console.log(`- Removed \`${p}\` property`);
        }
      }
      else {
        console.log(`\n## ${formatType(t)} enumeration`);
        if (ch.addedProperties.length) {
          const members = ch.addedProperties.map(m => `\`${m}\``).join(', ');
          const plural = (ch.addedProperties.length > 1) ? 's' : '';
          console.log(`- Added ${members} member${plural}`);
        }
        if (ch.removedProperties.length) {
          const members = ch.removedProperties.map(m => `\`${m}\``).join(', ');
          const plural = (ch.removedProperties.length > 1) ? 's' : '';
          console.log(`- Removed ${members} member${plural}`);
        }
      }
    }
  }
}

async function main() {
  const oldBranch = process.argv[process.argv.length - 2] ?? '';
  const newBranch = process.argv[process.argv.length - 1] ?? '';
  const diff = await diffSchema(oldBranch, newBranch);
  diffToMarkdown(diff);
}

main()
