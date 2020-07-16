
using System;

namespace Nest.CommonAbstractions {
public readonly struct Field : IComparable<Field>, IEquatable<Field> {
		public Field(string value) => Value = value;

		private string Value { get; }

		public bool Equals(Field other) => this.Value.Equals(other.Value);
		public int CompareTo(Field other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is Field other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(Field a, Field b) => a.CompareTo(b) == 0;
		public static bool operator !=(Field a, Field b) => !(a == b);
	}
}
