
using System;

namespace Nest.CommonAbstractions {
public readonly struct Id : IComparable<Id>, IEquatable<Id> {
		public Id(string value) => Value = value;

		private string Value { get; }

		public bool Equals(Id other) => this.Value.Equals(other.Value);
		public int CompareTo(Id other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is Id other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(Id a, Id b) => a.CompareTo(b) == 0;
		public static bool operator !=(Id a, Id b) => !(a == b);
	}
}
