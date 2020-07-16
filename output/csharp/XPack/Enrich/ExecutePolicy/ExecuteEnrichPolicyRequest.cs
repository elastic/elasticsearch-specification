using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecuteEnrichPolicyRequest : RequestBase {
		
		[DataMember(Name="wait_for_completion")]
		public bool WaitForCompletion { get; set; }

	}
}
