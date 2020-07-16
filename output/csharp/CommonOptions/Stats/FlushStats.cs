using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class FlushStats  {
		
		[DataMember(Name="periodic")]
		public long Periodic { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="total_time")]
		public string TotalTime { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }

	}
}
