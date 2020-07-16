
using System;

namespace Nest.CommonAbstractions {
public readonly struct Timestamp : IComparable<Timestamp>, IEquatable<Timestamp> {
		public Timestamp(string value) => Value = value;

		private string Value { get; }

		public bool Equals(Timestamp other) => this.Value.Equals(other.Value);
		public int CompareTo(Timestamp other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is Timestamp other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(Timestamp a, Timestamp b) => a.CompareTo(b) == 0;
		public static bool operator !=(Timestamp a, Timestamp b) => !(a == b);
	}
}
