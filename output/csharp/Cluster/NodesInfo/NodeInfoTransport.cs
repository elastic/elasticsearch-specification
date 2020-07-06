using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeInfoTransport  {
		
		[DataMember(Name="bound_address")]
		public List<string> BoundAddress { get; set; }


		[DataMember(Name="publish_address")]
		public string PublishAddress { get; set; }

	}
}
