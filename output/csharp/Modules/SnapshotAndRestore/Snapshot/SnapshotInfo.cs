using Nest.Internal;
using Nest.Modules;
using Nest.CommonAbstractions;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotInfo  {
		
		[DataMember(Name="duration_in_millis")]
		public long DurationInMillis { get; set; }


		[DataMember(Name="end_time")]
		public DateTimeOffset EndTime { get; set; }


		[DataMember(Name="end_time_in_millis")]
		public long EndTimeInMillis { get; set; }


		[DataMember(Name="failures")]
		public List<SnapshotShardFailure> Failures { get; set; }


		[DataMember(Name="indices")]
		public List<IndexName> Indices { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="snapshot")]
		public string Snapshot { get; set; }


		[DataMember(Name="shards")]
		public ShardStatistics Shards { get; set; }


		[DataMember(Name="start_time")]
		public DateTimeOffset StartTime { get; set; }


		[DataMember(Name="start_time_in_millis")]
		public long StartTimeInMillis { get; set; }


		[DataMember(Name="state")]
		public string State { get; set; }

	}
}
