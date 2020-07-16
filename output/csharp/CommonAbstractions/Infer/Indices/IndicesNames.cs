
using System;

namespace Nest.CommonAbstractions {
public readonly struct IndicesNames : IComparable<IndicesNames>, IEquatable<IndicesNames> {
		public IndicesNames(string value) => Value = value;

		private string Value { get; }

		public bool Equals(IndicesNames other) => this.Value.Equals(other.Value);
		public int CompareTo(IndicesNames other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is IndicesNames other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(IndicesNames a, IndicesNames b) => a.CompareTo(b) == 0;
		public static bool operator !=(IndicesNames a, IndicesNames b) => !(a == b);
	}
}
