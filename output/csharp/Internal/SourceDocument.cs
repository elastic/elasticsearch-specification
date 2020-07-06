
using System;

namespace Nest.Internal {
public readonly struct SourceDocument : IComparable<SourceDocument>, IEquatable<SourceDocument> {
		public SourceDocument(string value) => Value = value;

		private string Value { get; }

		public bool Equals(SourceDocument other) => this.Value.Equals(other.Value);
		public int CompareTo(SourceDocument other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is SourceDocument other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(SourceDocument a, SourceDocument b) => a.CompareTo(b) == 0;
		public static bool operator !=(SourceDocument a, SourceDocument b) => !(a == b);
	}
}
