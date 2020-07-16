using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AlertingInput  {
		
		[DataMember(Name="input")]
		public IDictionary<string, AlertingCount> Input { get; set; }


		[DataMember(Name="trigger")]
		public IDictionary<string, AlertingCount> Trigger { get; set; }

	}
}
