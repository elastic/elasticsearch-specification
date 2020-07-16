using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardMerges  {
		
		[DataMember(Name="current")]
		public long Current { get; set; }


		[DataMember(Name="current_docs")]
		public long CurrentDocs { get; set; }


		[DataMember(Name="current_size_in_bytes")]
		public long CurrentSizeInBytes { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="total_auto_throttle_in_bytes")]
		public long TotalAutoThrottleInBytes { get; set; }


		[DataMember(Name="total_docs")]
		public long TotalDocs { get; set; }


		[DataMember(Name="total_size_in_bytes")]
		public long TotalSizeInBytes { get; set; }


		[DataMember(Name="total_stopped_time_in_millis")]
		public long TotalStoppedTimeInMillis { get; set; }


		[DataMember(Name="total_throttled_time_in_millis")]
		public long TotalThrottledTimeInMillis { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }

	}
}
