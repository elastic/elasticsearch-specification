using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ActionStatus  {
		
		[DataMember(Name="ack")]
		public AcknowledgeState Ack { get; set; }


		[DataMember(Name="last_execution")]
		public ExecutionState LastExecution { get; set; }


		[DataMember(Name="last_successful_execution")]
		public ExecutionState LastSuccessfulExecution { get; set; }


		[DataMember(Name="last_throttle")]
		public ThrottleState LastThrottle { get; set; }

	}
}
