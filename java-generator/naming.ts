import * as changeCase from "change-case";
import Domain from "elasticsearch-client-specification/src/domain";

export const stringTypes =
  ["Field", "Id", "Ids", "IndexName", "Indices", "Routing", "LongId", "IndexMetrics", "Metrics", "Name", "Names",
    "NodeIds", "PropertyName", "RelationName", "TaskId", "Timestamp",
    "Uri", "Date", "TimeSpan"
  ];
export const numberTypes = ["short", "byte", "integer", "long", "float", "double"];
export const objectTypes = ["SourceDocument"];

const reservedTypes = ["string", "integer", "double", "boolean", "object"];

export const $typeName = (name: string) => {
  if (reservedTypes.includes(name) || !name.includes("<"))
    return changeCase.pascalCase(name, {stripRegexp:/[^A-Z0-9<>]/gi });

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

export const $instanceOf = (instance: Domain.InstanceOf) => {
  if (instance instanceof Domain.Type)  {
    if (instance.closedGenerics.length === 0)
      return $typeName(instance.name);

    const generics = instance.closedGenerics.map($instanceOf).flat(Infinity);
    return `${$typeName(instance.name)}<${generics.join(", ")}>`;
  }
  else if (instance instanceof Domain.ArrayOf) return `List<${$instanceOf(instance.of)}>`;
  else if (instance instanceof Domain.Dictionary) return `NamedContainer<${$instanceOf(instance.key)}, ${$instanceOf(instance.value)}>`;
  else if (instance instanceof Domain.UnionOf) return `Either<${instance.items.map($instanceOf).join(", ")}>`;
};

