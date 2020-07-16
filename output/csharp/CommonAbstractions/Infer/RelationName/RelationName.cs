
using System;

namespace Nest.CommonAbstractions {
public readonly struct RelationName : IComparable<RelationName>, IEquatable<RelationName> {
		public RelationName(string value) => Value = value;

		private string Value { get; }

		public bool Equals(RelationName other) => this.Value.Equals(other.Value);
		public int CompareTo(RelationName other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is RelationName other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(RelationName a, RelationName b) => a.CompareTo(b) == 0;
		public static bool operator !=(RelationName a, RelationName b) => !(a == b);
	}
}
