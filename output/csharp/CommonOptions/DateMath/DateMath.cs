
using System;

namespace Nest.CommonOptions {
public readonly struct DateMath : IComparable<DateMath>, IEquatable<DateMath> {
		public DateMath(string value) => Value = value;

		private string Value { get; }

		public bool Equals(DateMath other) => this.Value.Equals(other.Value);
		public int CompareTo(DateMath other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is DateMath other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(DateMath a, DateMath b) => a.CompareTo(b) == 0;
		public static bool operator !=(DateMath a, DateMath b) => !(a == b);
	}
}
