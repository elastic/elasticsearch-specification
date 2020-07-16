
using System;

namespace Nest.CommonAbstractions {
public readonly struct IndexName : IComparable<IndexName>, IEquatable<IndexName> {
		public IndexName(string value) => Value = value;

		private string Value { get; }

		public bool Equals(IndexName other) => this.Value.Equals(other.Value);
		public int CompareTo(IndexName other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is IndexName other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(IndexName a, IndexName b) => a.CompareTo(b) == 0;
		public static bool operator !=(IndexName a, IndexName b) => !(a == b);
	}
}
