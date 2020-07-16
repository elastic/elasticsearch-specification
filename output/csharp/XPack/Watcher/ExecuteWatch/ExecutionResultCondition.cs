using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecutionResultCondition  {
		
		[DataMember(Name="met")]
		public bool Met { get; set; }


		[DataMember(Name="status")]
		public Status Status { get; set; }


		[DataMember(Name="type")]
		public ConditionType Type { get; set; }

	}
}
