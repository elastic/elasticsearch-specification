using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetSnapshotLifecycleStatsResponse : IResponse {
		
		[DataMember(Name="retention_deletion_time")]
		public string RetentionDeletionTime { get; set; }


		[DataMember(Name="retention_deletion_time_millis")]
		public long RetentionDeletionTimeMillis { get; set; }


		[DataMember(Name="retention_failed")]
		public long RetentionFailed { get; set; }


		[DataMember(Name="retention_runs")]
		public long RetentionRuns { get; set; }


		[DataMember(Name="retention_timed_out")]
		public long RetentionTimedOut { get; set; }


		[DataMember(Name="total_snapshots_deleted")]
		public long TotalSnapshotsDeleted { get; set; }


		[DataMember(Name="total_snapshot_deletion_failures")]
		public long TotalSnapshotDeletionFailures { get; set; }


		[DataMember(Name="total_snapshots_failed")]
		public long TotalSnapshotsFailed { get; set; }


		[DataMember(Name="total_snapshots_taken")]
		public long TotalSnapshotsTaken { get; set; }

	}
}
