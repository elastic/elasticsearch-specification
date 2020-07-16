using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecutionState  {
		
		[DataMember(Name="successful")]
		public bool Successful { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
