using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class HotThreadInformation  {
		
		[DataMember(Name="hosts")]
		public List<string> Hosts { get; set; }


		[DataMember(Name="node_id")]
		public string NodeId { get; set; }


		[DataMember(Name="node_name")]
		public string NodeName { get; set; }


		[DataMember(Name="threads")]
		public List<string> Threads { get; set; }

	}
}
