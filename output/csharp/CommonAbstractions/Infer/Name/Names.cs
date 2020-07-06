
using System;

namespace Nest.CommonAbstractions {
public readonly struct Names : IComparable<Names>, IEquatable<Names> {
		public Names(string value) => Value = value;

		private string Value { get; }

		public bool Equals(Names other) => this.Value.Equals(other.Value);
		public int CompareTo(Names other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is Names other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(Names a, Names b) => a.CompareTo(b) == 0;
		public static bool operator !=(Names a, Names b) => !(a == b);
	}
}
