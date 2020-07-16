using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecutionAction  {
		
		[DataMember(Name="total")]
		public long Total { get; set; }


		[DataMember(Name="total_in_ms")]
		public long TotalInMs { get; set; }

	}
}
