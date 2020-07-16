using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardStatsRecovery  {
		
		[DataMember(Name="current_as_source")]
		public long CurrentAsSource { get; set; }


		[DataMember(Name="current_as_target")]
		public long CurrentAsTarget { get; set; }


		[DataMember(Name="throttle_time_in_millis")]
		public long ThrottleTimeInMillis { get; set; }

	}
}
