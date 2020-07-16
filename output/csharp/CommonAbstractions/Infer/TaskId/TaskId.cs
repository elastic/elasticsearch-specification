
using System;

namespace Nest.CommonAbstractions {
public readonly struct TaskId : IComparable<TaskId>, IEquatable<TaskId> {
		public TaskId(string value) => Value = value;

		private string Value { get; }

		public bool Equals(TaskId other) => this.Value.Equals(other.Value);
		public int CompareTo(TaskId other) => string.Compare(Value, other.Value, StringComparison.Ordinal);

		public override bool Equals(object obj)
		{
			if (ReferenceEquals(null, obj)) return false;
			return obj is TaskId other && Equals(other);
		}

		public override int GetHashCode() => Value.GetHashCode();
		public override string ToString() => Value;
		public static bool operator ==(TaskId a, TaskId b) => a.CompareTo(b) == 0;
		public static bool operator !=(TaskId a, TaskId b) => !(a == b);
	}
}
