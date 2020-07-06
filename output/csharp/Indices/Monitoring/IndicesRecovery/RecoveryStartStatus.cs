using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryStartStatus  {
		
		[DataMember(Name="check_index_time")]
		public long CheckIndexTime { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public string TotalTimeInMillis { get; set; }

	}
}
