
using System;

namespace Nest.CommonAbstractions {
public readonly struct LongId : IComparable<LongId>, IEquatable<LongId> {
		public LongId(string value) => Value = value;

		private string Value { get; }

		public bool Equals(LongId other) => this.Value.Equals(other.Value);
		public int CompareTo(LongId other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is LongId other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(LongId a, LongId b) => a.CompareTo(b) == 0;
		public static bool operator !=(LongId a, LongId b) => !(a == b);
	}
}
