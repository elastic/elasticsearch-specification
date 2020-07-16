using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StopRollupJobRequest : RequestBase {
		
		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="wait_for_completion")]
		public bool WaitForCompletion { get; set; }

	}
}
