using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecutionResultInput  {
		
		[DataMember(Name="payload")]
		public IDictionary<string, object> Payload { get; set; }


		[DataMember(Name="status")]
		public Status Status { get; set; }


		[DataMember(Name="type")]
		public InputType Type { get; set; }

	}
}
