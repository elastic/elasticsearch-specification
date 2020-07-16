using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ReloadDetails  {
		
		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="reloaded_analyzers")]
		public List<string> ReloadedAnalyzers { get; set; }


		[DataMember(Name="reloaded_node_ids")]
		public List<string> ReloadedNodeIds { get; set; }

	}
}
