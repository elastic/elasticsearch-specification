
using System;

namespace Nest.CommonAbstractions {
public readonly struct Metrics : IComparable<Metrics>, IEquatable<Metrics> {
		public Metrics(string value) => Value = value;

		private string Value { get; }

		public bool Equals(Metrics other) => this.Value.Equals(other.Value);
		public int CompareTo(Metrics other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is Metrics other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(Metrics a, Metrics b) => a.CompareTo(b) == 0;
		public static bool operator !=(Metrics a, Metrics b) => !(a == b);
	}
}
