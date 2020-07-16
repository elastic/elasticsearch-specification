using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class RefreshStats  {
		
		[DataMember(Name="external_total")]
		public long ExternalTotal { get; set; }


		[DataMember(Name="external_total_time_in_millis")]
		public long ExternalTotalTimeInMillis { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="total_time")]
		public string TotalTime { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }

	}
}
