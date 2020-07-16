
using System;

namespace Nest.CommonAbstractions {
public readonly struct Routing : IComparable<Routing>, IEquatable<Routing> {
		public Routing(string value) => Value = value;

		private string Value { get; }

		public bool Equals(Routing other) => this.Value.Equals(other.Value);
		public int CompareTo(Routing other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is Routing other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(Routing a, Routing b) => a.CompareTo(b) == 0;
		public static bool operator !=(Routing a, Routing b) => !(a == b);
	}
}
