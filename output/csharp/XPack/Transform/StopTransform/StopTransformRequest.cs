using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StopTransformRequest : RequestBase {
		
		[DataMember(Name="allow_no_match")]
		public bool AllowNoMatch { get; set; }


		[DataMember(Name="force")]
		public bool Force { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="wait_for_checkpoint")]
		public bool WaitForCheckpoint { get; set; }


		[DataMember(Name="wait_for_completion")]
		public bool WaitForCompletion { get; set; }

	}
}
