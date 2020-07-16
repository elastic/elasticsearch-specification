using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SimulatedActions  {
		
		[DataMember(Name="actions")]
		public List<string> Actions { get; set; }


		[DataMember(Name="all")]
		public SimulatedActions All { get; set; }


		[DataMember(Name="use_all")]
		public bool UseAll { get; set; }

	}
}
