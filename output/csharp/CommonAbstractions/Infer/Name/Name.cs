
using System;

namespace Nest.CommonAbstractions {
public readonly struct Name : IComparable<Name>, IEquatable<Name> {
		public Name(string value) => Value = value;

		private string Value { get; }

		public bool Equals(Name other) => this.Value.Equals(other.Value);
		public int CompareTo(Name other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is Name other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(Name a, Name b) => a.CompareTo(b) == 0;
		public static bool operator !=(Name a, Name b) => !(a == b);
	}
}
