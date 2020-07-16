using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AlertingExecution  {
		
		[DataMember(Name="actions")]
		public IDictionary<string, ExecutionAction> Actions { get; set; }

	}
}
