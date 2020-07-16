using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AlertingUsage : XPackUsage {
		
		[DataMember(Name="count")]
		public AlertingCount Count { get; set; }


		[DataMember(Name="execution")]
		public AlertingExecution Execution { get; set; }


		[DataMember(Name="watch")]
		public AlertingInput Watch { get; set; }

	}
}
