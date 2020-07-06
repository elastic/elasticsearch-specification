
using System;

namespace Nest.Internal {
public readonly struct TimeSpan : IComparable<TimeSpan>, IEquatable<TimeSpan> {
		public TimeSpan(string value) => Value = value;

		private string Value { get; }

		public bool Equals(TimeSpan other) => this.Value.Equals(other.Value);
		public int CompareTo(TimeSpan other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is TimeSpan other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(TimeSpan a, TimeSpan b) => a.CompareTo(b) == 0;
		public static bool operator !=(TimeSpan a, TimeSpan b) => !(a == b);
	}
}
