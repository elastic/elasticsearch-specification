
using System;

namespace Nest.CommonAbstractions {
public readonly struct Ids : IComparable<Ids>, IEquatable<Ids> {
		public Ids(string value) => Value = value;

		private string Value { get; }

		public bool Equals(Ids other) => this.Value.Equals(other.Value);
		public int CompareTo(Ids other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is Ids other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(Ids a, Ids b) => a.CompareTo(b) == 0;
		public static bool operator !=(Ids a, Ids b) => !(a == b);
	}
}
