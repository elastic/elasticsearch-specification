import * as changeCase from "change-case";
import Domain from "elasticsearch-client-specification/src/domain";
import {specification} from "./specs";

export const stringTypes =
  ["Field", "Id", "Ids", "IndexName", "Indices", "Routing", "LongId", "IndexMetrics", "Metrics", "Name", "Names",
    "NodeIds", "PropertyName", "RelationName", "TaskId", "Timestamp",
    "Uri", "Date", "TimeSpan"
  ];
export const numberTypes = [
  "short", "byte", "integer", "long", "float", "double",
  "number" // FIXME: should not be present
];
const boxedNumberTypes = {
  byte: "Byte",
  short: "Short",
  int: "Integer",
  long: "Long",
  float: "Float",
  double: "Double",
  number: "Double" // FIXME: should not be present
};

export const objectTypes = ["SourceDocument"];

export const $typeName = (name: string) => {
  if (name === "Array") {
    return "List";
  }

  return changeCase.pascalCase(name, {stripRegexp:/[^A-Z0-9<>]/gi });
};

export const $propertyName = (prop: string) => {
  if (prop === "+") return "Add";
  if (prop === "-") return "Subtract";
  if (prop.match(/^\d/)) return `${changeCase.pascalCase("average" + prop)}`;
  return prop.includes(".") || prop.includes("-") || prop.match(/^(\d|\W)/)
    ? changeCase.pascalCase(prop)
    : changeCase.pascalCase(prop);
};

export const $fieldName = (prop: string) => {
  if (prop.match(/^\d/)) return `_${changeCase.camelCase("average" + prop)}`;
  return prop.includes(".") || prop.includes("-") || prop.match(/^(\d|\W)/)
    ? `_${changeCase.camelCase(prop)}`
    : `_${changeCase.camelCase(prop)}`;
};

export const $parseFieldName = (prop: string) => {
  if (prop.match(/^\d/)) return changeCase.constantCase("average" + prop);
  return changeCase.constantCase(prop);
};

export const $isPrimitiveType = (instance: Domain.InstanceOf): boolean => {
  if (instance instanceof Domain.Type) {
    const realType = specification.typeLookup[instance.name];
    if (realType instanceof Domain.NumberAlias) {
      return true;
    }
  }

  return false;
}

export const $instanceOf = (instance: Domain.InstanceOf, boxed: boolean): string => {

  if (instance instanceof Domain.Type)  {
    const realType = specification.typeLookup[instance.name];
    if (realType instanceof Domain.StringAlias) return `String`;
    if (realType instanceof Domain.NumberAlias) {
      const primitiveType = realType.name === "integer" ? "int" : realType.name;
      return boxed ? boxedNumberTypes[primitiveType] : primitiveType;
    }

    if (instance.closedGenerics.length === 0)
      return $typeName(instance.name);

    const generics = instance.closedGenerics.map(t => $instanceOf(t, true)).flat(Infinity);
    return `${$typeName(instance.name)}<${generics.join(", ")}>`;
  }
  else if (instance instanceof Domain.ArrayOf) return `List<${$instanceOf(instance.of, true)}>`;
  else if (instance instanceof Domain.Dictionary) return `NamedContainer<${$instanceOf(instance.key, true)}, ${$instanceOf(instance.value, true)}>`;
  else if (instance instanceof Domain.UnionOf) return `Union${instance.items.length}<${instance.items.map(t => $instanceOf(t, true)).join(", ")}>`;
  else if (instance instanceof Domain.SingleKeyDictionary) {
    return `SingleKeyDictionary<${$instanceOf(instance.value, true)}>`;
  } else if (instance instanceof Domain.UserDefinedValue) {
    return "Object";
  } else {
    console.error(`Don't know how to "instanceof" `, instance);
    throw Error(`Don't know how to "instanceof" ${typeof instance}`)
  }
};

/**
 * Returns the implementation type for a domain type. Used for containers like lists whose public type is an interface
 * but need a concrete implementation for the type .
 * @param instance
 */
export const $implementationOf = (instance: Domain.InstanceOf): string => {
  return $instanceOf(instance, false);
}
