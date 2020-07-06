using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryTranslogStatus  {
		
		[DataMember(Name="percent")]
		public string Percent { get; set; }


		[DataMember(Name="recovered")]
		public long Recovered { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="total_on_start")]
		public long TotalOnStart { get; set; }


		[DataMember(Name="total_time")]
		public string TotalTime { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }

	}
}
