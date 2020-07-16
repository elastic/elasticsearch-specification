using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardIndexing  {
		
		[DataMember(Name="delete_current")]
		public long DeleteCurrent { get; set; }


		[DataMember(Name="delete_time_in_millis")]
		public long DeleteTimeInMillis { get; set; }


		[DataMember(Name="delete_total")]
		public long DeleteTotal { get; set; }


		[DataMember(Name="index_current")]
		public long IndexCurrent { get; set; }


		[DataMember(Name="index_failed")]
		public long IndexFailed { get; set; }


		[DataMember(Name="index_time_in_millis")]
		public long IndexTimeInMillis { get; set; }


		[DataMember(Name="index_total")]
		public long IndexTotal { get; set; }


		[DataMember(Name="is_throttled")]
		public bool IsThrottled { get; set; }


		[DataMember(Name="noop_update_total")]
		public long NoopUpdateTotal { get; set; }


		[DataMember(Name="throttle_time_in_millis")]
		public long ThrottleTimeInMillis { get; set; }

	}
}
