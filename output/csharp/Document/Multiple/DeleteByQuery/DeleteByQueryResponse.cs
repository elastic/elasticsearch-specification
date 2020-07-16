using Nest.Internal;
using Nest.Document;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class DeleteByQueryResponse : IResponse {
		
		[DataMember(Name="batches")]
		public long Batches { get; set; }


		[DataMember(Name="deleted")]
		public long Deleted { get; set; }


		[DataMember(Name="failures")]
		public List<BulkIndexByScrollFailure> Failures { get; set; }


		[DataMember(Name="noops")]
		public long Noops { get; set; }


		[DataMember(Name="requests_per_second")]
		public float RequestsPerSecond { get; set; }


		[DataMember(Name="retries")]
		public Retries Retries { get; set; }


		[DataMember(Name="slice_id")]
		public int SliceId { get; set; }


		[DataMember(Name="task")]
		public TaskId Task { get; set; }


		[DataMember(Name="throttled_millis")]
		public long ThrottledMillis { get; set; }


		[DataMember(Name="throttled_until_millis")]
		public long ThrottledUntilMillis { get; set; }


		[DataMember(Name="timed_out")]
		public bool TimedOut { get; set; }


		[DataMember(Name="took")]
		public long Took { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="version_conflicts")]
		public long VersionConflicts { get; set; }

	}
}
