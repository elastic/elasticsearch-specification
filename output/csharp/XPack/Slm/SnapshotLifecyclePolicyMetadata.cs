using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SnapshotLifecyclePolicyMetadata  {
		
		[DataMember(Name="in_progress")]
		public SnapshotLifecycleInProgress InProgress { get; set; }


		[DataMember(Name="last_failure")]
		public SnapshotLifecycleInvocationRecord LastFailure { get; set; }


		[DataMember(Name="last_success")]
		public SnapshotLifecycleInvocationRecord LastSuccess { get; set; }


		[DataMember(Name="modified_date_millis")]
		public DateTimeOffset ModifiedDateMillis { get; set; }


		[DataMember(Name="next_execution_millis")]
		public DateTimeOffset NextExecutionMillis { get; set; }


		[DataMember(Name="policy")]
		public SnapshotLifecyclePolicy Policy { get; set; }


		[DataMember(Name="version")]
		public int Version { get; set; }

	}
}
