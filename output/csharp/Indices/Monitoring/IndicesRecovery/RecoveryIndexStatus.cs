using Nest.Indices;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryIndexStatus  {
		
		[DataMember(Name="bytes")]
		public RecoveryBytes Bytes { get; set; }


		[DataMember(Name="files")]
		public RecoveryFiles Files { get; set; }


		[DataMember(Name="size")]
		public RecoveryBytes Size { get; set; }


		[DataMember(Name="source_throttle_time_in_millis")]
		public long SourceThrottleTimeInMillis { get; set; }


		[DataMember(Name="target_throttle_time_in_millis")]
		public long TargetThrottleTimeInMillis { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }

	}
}
