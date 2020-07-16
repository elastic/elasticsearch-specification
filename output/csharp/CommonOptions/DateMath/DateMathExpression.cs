
using System;

namespace Nest.CommonOptions {
public readonly struct DateMathExpression : IComparable<DateMathExpression>, IEquatable<DateMathExpression> {
		public DateMathExpression(string value) => Value = value;

		private string Value { get; }

		public bool Equals(DateMathExpression other) => this.Value.Equals(other.Value);
		public int CompareTo(DateMathExpression other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is DateMathExpression other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(DateMathExpression a, DateMathExpression b) => a.CompareTo(b) == 0;
		public static bool operator !=(DateMathExpression a, DateMathExpression b) => !(a == b);
	}
}
