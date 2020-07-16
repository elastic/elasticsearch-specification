using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryVerifyIndex  {
		
		[DataMember(Name="check_index_time_in_millis")]
		public long CheckIndexTimeInMillis { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }

	}
}
