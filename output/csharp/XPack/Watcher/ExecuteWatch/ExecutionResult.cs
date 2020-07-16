using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecutionResult  {
		
		[DataMember(Name="actions")]
		public List<ExecutionResultAction> Actions { get; set; }


		[DataMember(Name="condition")]
		public ExecutionResultCondition Condition { get; set; }


		[DataMember(Name="execution_duration")]
		public int ExecutionDuration { get; set; }


		[DataMember(Name="execution_time")]
		public DateTimeOffset ExecutionTime { get; set; }


		[DataMember(Name="input")]
		public ExecutionResultInput Input { get; set; }

	}
}
