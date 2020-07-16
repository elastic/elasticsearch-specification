
using System;

namespace Nest.CommonAbstractions {
public readonly struct PropertyName : IComparable<PropertyName>, IEquatable<PropertyName> {
		public PropertyName(string value) => Value = value;

		private string Value { get; }

		public bool Equals(PropertyName other) => this.Value.Equals(other.Value);
		public int CompareTo(PropertyName other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is PropertyName other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(PropertyName a, PropertyName b) => a.CompareTo(b) == 0;
		public static bool operator !=(PropertyName a, PropertyName b) => !(a == b);
	}
}
