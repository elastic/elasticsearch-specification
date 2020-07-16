using Nest.Internal;
using Nest.Document;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class ReindexStatus  {
		
		[DataMember(Name="batches")]
		public long Batches { get; set; }


		[DataMember(Name="created")]
		public long Created { get; set; }


		[DataMember(Name="deleted")]
		public long Deleted { get; set; }


		[DataMember(Name="noops")]
		public long Noops { get; set; }


		[DataMember(Name="requests_per_second")]
		public float RequestsPerSecond { get; set; }


		[DataMember(Name="retries")]
		public Retries Retries { get; set; }


		[DataMember(Name="throttled_millis")]
		public long ThrottledMillis { get; set; }


		[DataMember(Name="throttled_until_millis")]
		public long ThrottledUntilMillis { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="updated")]
		public long Updated { get; set; }


		[DataMember(Name="version_conflicts")]
		public long VersionConflicts { get; set; }

	}
}
