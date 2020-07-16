using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardRefresh  {
		
		[DataMember(Name="listeners")]
		public long Listeners { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }

	}
}
