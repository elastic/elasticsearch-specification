"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createValueObject = void 0;
const naming_1 = require("./naming");
exports.$createValueObject = (type, valueType) => {
    const t = naming_1.$typeName(type.name);
    return `
using System;

namespace Nest.${naming_1.$namespace(type.namespace)} {
public readonly struct ${t} : IComparable<${t}>, IEquatable<${t}> {
\t\tpublic ${t}(string value) => Value = value;

\t\tprivate string Value { get; }

\t\tpublic bool Equals(${t} other) => this.Value.Equals(other.Value);
\t\tpublic int CompareTo(${t} other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

\t\tpublic override bool Equals(object obj)
\t\t{
\t\t\tif (ReferenceEquals(null, obj)) return false;
\t\t\treturn obj is ${t} other && Equals(other);
\t\t}

\t\tpublic override int GetHashCode() => Value.GetHashCode();
\t\tpublic override string ToString() => Value;
\t\tpublic static bool operator ==(${t} a, ${t} b) => a.CompareTo(b) == 0;
\t\tpublic static bool operator !=(${t} a, ${t} b) => !(a == b);
\t}
}
`;
};
//# sourceMappingURL=types-value.js.map