using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ModelSizeStats  {
		
		[DataMember(Name="bucket_allocation_failures_count")]
		public long BucketAllocationFailuresCount { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="log_time")]
		public DateTimeOffset LogTime { get; set; }


		[DataMember(Name="memory_status")]
		public MemoryStatus MemoryStatus { get; set; }


		[DataMember(Name="model_bytes")]
		public long ModelBytes { get; set; }


		[DataMember(Name="result_type")]
		public string ResultType { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }


		[DataMember(Name="total_by_field_count")]
		public long TotalByFieldCount { get; set; }


		[DataMember(Name="total_over_field_count")]
		public long TotalOverFieldCount { get; set; }


		[DataMember(Name="total_partition_field_count")]
		public long TotalPartitionFieldCount { get; set; }

	}
}
