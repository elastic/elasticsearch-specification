
using System;

namespace Nest.CommonAbstractions {
public readonly struct IndexMetrics : IComparable<IndexMetrics>, IEquatable<IndexMetrics> {
		public IndexMetrics(string value) => Value = value;

		private string Value { get; }

		public bool Equals(IndexMetrics other) => this.Value.Equals(other.Value);
		public int CompareTo(IndexMetrics other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is IndexMetrics other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(IndexMetrics a, IndexMetrics b) => a.CompareTo(b) == 0;
		public static bool operator !=(IndexMetrics a, IndexMetrics b) => !(a == b);
	}
}
