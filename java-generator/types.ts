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

import Domain from "elasticsearch-client-specification/src/domain";
import {$fieldName, $instanceOf, $isPrimitiveType, $parseFieldName, $propertyName, $typeName} from "./naming";
import * as changeCase from "change-case";
import {$imports} from "./imports";
import {$parseProperties} from "./types-parser-read";
import {$writeProperties} from "./types-parser-write";

function isBaseClassName(name: string): boolean {
  return name === "RequestBase" || name === "ResponseBase";
}

export function $isBaseClass(type: Domain.Interface): boolean {
  return isBaseClassName(type.name);
}

const $typeExtends = (type: Domain.Interface) => {
  if (type.inherits.length === 0) {
    return "";
  } else {
    return `extends ${type.inherits.map(ref => $handleDictionaryResponse(type, ref)).join(", ")}`;
  }
};

const $handleDictionaryResponse = (type: Domain.Interface, ref: Domain.ImplementsReference) => {
  if (ref.type === undefined) return "";

  if (ref.type.name === "DictionaryResponseBase") {
    return `${$typeName(ref.type.name)}<${ref.closedGenerics.map(t => $instanceOf(t, true)).join(", ")}>`;
  }

  if ($isBaseClass(ref.type)) {
    return `${$typeName(ref.type.name)}<${type.name}>`;
  }

  return $typeName(ref.type.name);
};

const $implementsXContent = (type: Domain.Interface) => {
  if (type.name === "DictionaryResponseBase") return "";
  if ($isBaseClass(type)) return `implements XContentable<T>`;
  return `implements XContentable<${$typeName(type.name)}>`;
};

const $xCContentImplementation = (type: Domain.Interface) => {
  if(type.name === "DictionaryResponseBase") return "";

  if ($isBaseClass(type)) return `
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    toXContentInternal(builder, params);
    builder.endObject();
    return builder;
  }

  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    ${$writeProperties(type)}
  }
`

  // TODO: do not generate ToXContent for responses and FromXContent for requests
  // (but should be configurable to produce a server)
  let superToXContent = "super.toXContentInternal(builder, params);";
  if (type.inherits.length === 0) {
    superToXContent = "";
  }

  return `
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    ${superToXContent}
    ${$writeProperties(type)}
  }

  @Override
  public ${$typeName(type.name)} fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ${$typeName(type.name)}.PARSER.apply(parser, null);
  }

  public static final ObjectParser<${$typeName(type.name)}, Void> PARSER =
    new ObjectParser<>(${$typeName(type.name)}.class.getName(), false, ${$typeName(type.name)}::new);

  static {
    ${$parseProperties(type)}
  }
`;
};

const $abstractClass = (type: Domain.Interface) => {
  return type.name === "DictionaryResponseBase" || $isBaseClass(type)
    ? `abstract `
    : ``;
};

const $typeGenerics = (type: Domain.Interface) => {
  if ($isBaseClass(type)) return `<T extends ${$typeName(type.name)}<T>>`;

  if (type.openGenerics.length === 0) return "";

  return `<${type.openGenerics.map(g =>
    `${g}`
  ).join(", ")}>`;
};

const $property = (prop: Domain.InterfaceProperty, parent: Domain.Interface) => {
  let suppressWarnings = "";
  let returnThis = "return this";

  if ($isBaseClass(parent)) {
    suppressWarnings = `@SuppressWarnings("unchecked")\n  `;
    returnThis = "return (T)this";
  }

  if ($isBaseClass(parent)) {
    return `
  static final ParseField ${$parseFieldName(prop.name)} = new ParseField("${prop.name}");
  private ${$instanceOf(prop.type, false)} ${$fieldName(prop.name)};
  private boolean ${$fieldName(prop.name)}$isSet;
  public ${$instanceOf(prop.type, false)} get${$propertyName(prop.name)}() { return this.${$fieldName(prop.name)}; }
  ${suppressWarnings}public T set${$propertyName(prop.name)}(${$instanceOf(prop.type, false)} val) {
    this.${$fieldName(prop.name)} = val;
    ${$fieldName(prop.name)}$isSet = true;
    ${returnThis};
  }
`
  } else if ($isPrimitiveType(prop.type)) {
    return `
  static final ParseField ${$parseFieldName(prop.name)} = new ParseField("${prop.name}");
  private ${$instanceOf(prop.type, false)} ${$fieldName(prop.name)};
  private boolean ${$fieldName(prop.name)}$isSet;
  public ${$instanceOf(prop.type, false)} get${$propertyName(prop.name)}() { return this.${$fieldName(prop.name)}; }
  ${suppressWarnings}public ${$typeName(parent.name)}${$typeGenerics(parent)} set${$propertyName(prop.name)}(${$instanceOf(prop.type, false)} val) {
    this.${$fieldName(prop.name)} = val;
    ${$fieldName(prop.name)}$isSet = true;
    ${returnThis};
  }
`  } else {
  return `
  static final ParseField ${$parseFieldName(prop.name)} = new ParseField("${prop.name}");
  private ${$instanceOf(prop.type, false)} ${$fieldName(prop.name)};
  public ${$instanceOf(prop.type, false)} get${$propertyName(prop.name)}() { return this.${$fieldName(prop.name)}; }
  ${suppressWarnings}public ${$typeName(parent.name)}${$typeGenerics(parent)} set${$propertyName(prop.name)}(${$instanceOf(prop.type, false)} val) { this.${$fieldName(prop.name)} = val; ${returnThis}; }
`}

}
const $properties = (type: Domain.Interface): string => {
  const propsSeen = new Map<string, Domain.InterfaceProperty>();

  return type.properties.map(p => {
    const prevProp = propsSeen.get(p.name);
    if (prevProp) {
      console.log(`Duplicate property: ${type.name}.${p.name} (query param: ${prevProp.isRequestParameter}/${p.isRequestParameter})`);
      return "";
    } else {
      propsSeen.set(p.name, p);
      return $property(p, type)
    }
  }).join("");
}

export const $createClass = (type: Domain.Interface) => `
package org.elasticsearch.${type.namespace};

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
${[...$imports(type)].join("\n")}

public ${$abstractClass(type)}class ${$typeName(type.name)}${$typeGenerics(type)} ${$typeExtends(type)} ${$implementsXContent(type)} {
  ${$properties(type)}

  ${$xCContentImplementation(type)}
}
`;
