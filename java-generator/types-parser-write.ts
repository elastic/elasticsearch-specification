import Domain from "elasticsearch-client-specification/src/domain";
import {$fieldName, $instanceOf, $parseFieldName, $propertyName, $typeName, numberTypes, stringTypes} from "./naming";
import * as changeCase from "change-case";
import {specification} from "./specs";

const directWriteTypes = ["Object", "String", "Integer", "Boolean", "Double", "Long", "Float"];

const $writePropertyWrapped = (prop: Domain.InterfaceProperty, parent: Domain.Interface) =>
  [`if (${$fieldName(prop.name)} != null) {`]
    .concat($writeProperty(prop, parent).map(e => `  ${e}`))
    .concat([`}`]);

const $writeProperty = (prop: Domain.InterfaceProperty, parent: Domain.Interface) : string[] => {
  const typeSymbol = $instanceOf(prop.type);
  if (directWriteTypes.includes(typeSymbol))
    return [`builder.field(${$parseFieldName(prop.name)}.getPreferredName(), ${$fieldName(prop.name)});`];

  if (typeSymbol === "Date")
    return [
      `builder.field(${$parseFieldName(prop.name)}.getPreferredName(),`,
      `  DateTimeFormatter.ISO_DATE.format(${$fieldName(prop.name)}.toInstant()));`
    ];

  if (prop.type instanceof Domain.UnionOf) {
    const lr = (type: Domain.InstanceOf) => {
      const s = $instanceOf(type);
      if (directWriteTypes.includes(s)) return "builder::value";
      if (s === "Date")
        return `r -> builder.value(DateTimeFormatter.ISO_DATE.format(r.toInstant()))`;
      if (type instanceof Domain.ArrayOf)
        return `builder::value /* TODO ${s} */`;
      return "r-> r.toXContent(builder, params)";
    };
    return [
      `builder.field(${$parseFieldName(prop.name)}.getPreferredName());`,
      `${$fieldName(prop.name)}.map(${lr(prop.type.items[0])}, ${lr(prop.type.items[1])});`,
    ];
  }
  if (prop.type instanceof Domain.ArrayOf)
    return [
      `builder.array(${$parseFieldName(prop.name)}.getPreferredName(), ${$fieldName(prop.name)});`,
    ];

  if (stringTypes.includes(typeSymbol))
    return [
      `builder.field(${$parseFieldName(prop.name)}.getPreferredName());`,
      `${$fieldName(prop.name)}.toXContent(builder, params);`,
    ];

  if (["TDocument", "TPartialDocument", "TResult", "T", "TCatRecord"].includes(typeSymbol))
    return [`builder.field(${$parseFieldName(prop.name)}.getPreferredName(), ${$fieldName(prop.name)});`];

  return [
    `builder.field(${$parseFieldName(prop.name)}.getPreferredName());`,
    `${$fieldName(prop.name)}.toXContent(builder, params);`,
  ];
};

export const $writeProperties = (type: Domain.Interface) => type.properties.flatMap(p => $writePropertyWrapped(p, type)).join("\n    ");
