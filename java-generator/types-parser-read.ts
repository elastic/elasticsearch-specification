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
import {$fieldName, $instanceOf, $parseFieldName, $propertyName, $typeName, stringTypes} from "./naming";
import * as changeCase from "change-case";
import {specification} from "./specs";

const valueTypes = ["String", "Float", "Double", "Integer", "Boolean", "Long",
"boolean", "int", "long", "float", "double"];
const $declareType = (type: Domain.InstanceOf): string => {
  if (type instanceof  Domain.ArrayOf) return $declareType(type.of);
  if (type instanceof Domain.Type) {
    const lookup = specification.typeLookup[type.name];
    if (lookup instanceof Domain.Enum) return "Field";
  }
  const t = $instanceOf(type, false);
  if (valueTypes.includes(t)) return t.replace("Integer", "int");
  return "Object";
};

const $propertyExpression = (prop: Domain.InterfaceProperty, parent: Domain.Interface) =>
  `${$typeName(parent.name)}::set${$propertyName(prop.name)}`;

const $fieldRef = (prop: Domain.InterfaceProperty) => $parseFieldName(prop.name);

const $valueParse = (typeSymbol:string, type: Domain.InstanceOf, parent: Domain.Interface, recurse:number = 0) => {
  if (valueTypes.includes(typeSymbol)) return "";
  if (typeSymbol === "Date") return "(p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text())))";
  if (typeSymbol === "Object") return "(p, t) -> p.objectText()";
  if (typeSymbol === "String") return "(p, t) -> p.text()";
  if (stringTypes.includes(typeSymbol)) return `(p, t) -> ${typeSymbol}.createFrom(p)`;

  if (type instanceof Domain.UnionOf) return `(p, t) ->  new ${typeSymbol}()`;
  if (type instanceof  Domain.ArrayOf) {
    if (recurse !== 0) return `(p, t) -> null /* TODO ${typeSymbol} */`;
    return $valueParse($instanceOf(type.of, false), type.of, parent, ++recurse)
  }

  if (type instanceof Domain.Dictionary) {
    const $key = (i: Domain.InstanceOf) => {
      if (i instanceof Domain.Type) {
        if (valueTypes.includes($instanceOf(i, false)))
          return `n -> () -> n`;
        if (stringTypes.includes(i.name))
          return `n -> () -> new ${$instanceOf(i, false)}(n)`;
        return `${$instanceOf(i, false)}.PARSER.apply(p, null)`;
      }
      return `null /* TODO ${$instanceOf(i, false)} */`;
    };
    const $val = (i: Domain.InstanceOf) => {
      const ti = $instanceOf(i, false);
      if (i instanceof Domain.Type) {
        if (ti === "Object") return `XContentParser::binaryValue`;
        if (ti === "String") return `pp -> pp.text()`;
        if (ti === "Integer") return `pp -> pp.intValue()`;
        if (ti === "Boolean") return `pp -> pp.booleanValue()`;
        if (ti === "Double") return `pp -> pp.doubleValue()`;
        if (ti === "Long") return `pp -> pp.longValue()`;
        const tt = specification.typeLookup[i.name];
        if (tt instanceof Domain.Enum)
          return `pp -> ${ti}.PARSER.apply(p)`;
        return `pp -> ${ti}.PARSER.apply(pp, null)`;
      }
      return `null /* TODO ${ti} */`;
    };
    return `(p, t) -> new NamedContainer<>(${$key(type.key)},${$val(type.value)})`;
  }

  if (type instanceof Domain.SingleKeyDictionary) {
    return `null /* TODO SingleKeyDictionary ${type.value} */`;
  }

  if (type instanceof Domain.UserDefinedValue) {
    return `null /* TODO UserDefinedValue */`;
  }

  const t = specification.typeLookup[type.name];
  if (t instanceof Domain.Enum)
    return `(p, t) -> ${typeSymbol}.PARSER.apply(p)`;
  if (t instanceof Domain.Interface && t.implementsUnion())
    return `(p, t) -> new ${$typeName(t.name)}().fromXContent(p)`;

  if (["TDocument", "TPartialDocument", "TResult", "T", "TCatRecord"].includes(typeSymbol))
    return `(p, t) -> null /* TODO ${typeSymbol} */`;

  return `(p, t) -> ${typeSymbol}.PARSER.apply(p, t)`;
};

const recursiveArray = (t: Domain.InstanceOf) => t instanceof Domain.ArrayOf ? recursiveArray(t.of) : t;

const primitiveParseDeclare = {
  boolean: "Boolean",
  int: "Int",
  long: "Long",
  float: "Float",
  double: "Double"
}

const $parseProperty = (prop: Domain.InterfaceProperty, parent: Domain.Interface) => {
  const typeSymbol = $instanceOf(prop.type, false);
  let declareType = $declareType(prop.type);
  declareType = primitiveParseDeclare[declareType] || declareType;
  if (prop.type instanceof Domain.ArrayOf) declareType += "Array";
  const exp = $propertyExpression(prop, parent);
  let args = $valueParse(typeSymbol, prop.type, parent);
  if (args !== "") args += ", ";

  const closedOverType = recursiveArray(prop.type);
  let trailingArgs = $fieldRef(prop);
  const lookup = specification.typeLookup[closedOverType.name];
  if (lookup instanceof Domain.Enum) {
    if (prop.type instanceof Domain.ArrayOf) trailingArgs += ", ObjectParser.ValueType.STRING_ARRAY";
    else trailingArgs += ", ObjectParser.ValueType.STRING_OR_NULL";
  }

  const declareParser = `PARSER.declare${declareType}(${exp}, ${args}${trailingArgs});`;

  if (closedOverType instanceof Domain.Type && closedOverType.closedGenerics.length > 0) {
    const closedOverSymbol = $instanceOf(closedOverType, false);
    const field = $fieldName(prop.name);
    let instance = `${closedOverSymbol} ${field} = new ${closedOverSymbol}();`;
    if (closedOverSymbol.includes("<T>") || closedOverSymbol.includes("<TDocument>"))
    {
      const rawSym = closedOverSymbol.replace("<T>", "").replace("<TDocument>", "");
      const newRaw = closedOverSymbol.replace("<T>", "<>").replace("<TDocument>", "<>");
      instance = `${rawSym} ${field} = new ${newRaw}();`;
    }
    return [instance, declareParser.replace(closedOverSymbol, field)];
  }

  return [declareParser];
};

// FIXME: add properties of the parent class
export const $parseProperties = (type: Domain.Interface) => type.properties.flatMap(p => $parseProperty(p, type)).join("\n    ");
