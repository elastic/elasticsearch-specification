using Nest.XPack;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecuteEnrichPolicyResponse : IResponse {
		
		[DataMember(Name="status")]
		public ExecuteEnrichPolicyStatus Status { get; set; }


		[DataMember(Name="task_id")]
		public TaskId TaskId { get; set; }

	}
}
