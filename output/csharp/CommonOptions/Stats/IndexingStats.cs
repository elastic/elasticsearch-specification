using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class IndexingStats  {
		
		[DataMember(Name="index_current")]
		public long IndexCurrent { get; set; }


		[DataMember(Name="delete_current")]
		public long DeleteCurrent { get; set; }


		[DataMember(Name="delete_time")]
		public string DeleteTime { get; set; }


		[DataMember(Name="delete_time_in_millis")]
		public long DeleteTimeInMillis { get; set; }


		[DataMember(Name="delete_total")]
		public long DeleteTotal { get; set; }


		[DataMember(Name="is_throttled")]
		public bool IsThrottled { get; set; }


		[DataMember(Name="noop_update_total")]
		public long NoopUpdateTotal { get; set; }


		[DataMember(Name="throttle_time")]
		public string ThrottleTime { get; set; }


		[DataMember(Name="throttle_time_in_millis")]
		public long ThrottleTimeInMillis { get; set; }


		[DataMember(Name="index_time")]
		public string IndexTime { get; set; }


		[DataMember(Name="index_time_in_millis")]
		public long IndexTimeInMillis { get; set; }


		[DataMember(Name="index_total")]
		public long IndexTotal { get; set; }


		[DataMember(Name="types")]
		public IDictionary<string, IndexingStats> Types { get; set; }

	}
}
