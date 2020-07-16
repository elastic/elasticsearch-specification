using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardWarmer  {
		
		[DataMember(Name="current")]
		public long Current { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }

	}
}
