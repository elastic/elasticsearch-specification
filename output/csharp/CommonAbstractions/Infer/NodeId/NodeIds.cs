
using System;

namespace Nest.CommonAbstractions {
public readonly struct NodeIds : IComparable<NodeIds>, IEquatable<NodeIds> {
		public NodeIds(string value) => Value = value;

		private string Value { get; }

		public bool Equals(NodeIds other) => this.Value.Equals(other.Value);
		public int CompareTo(NodeIds other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is NodeIds other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(NodeIds a, NodeIds b) => a.CompareTo(b) == 0;
		public static bool operator !=(NodeIds a, NodeIds b) => !(a == b);
	}
}
