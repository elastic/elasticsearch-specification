using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeInfoNetworkInterface  {
		
		[DataMember(Name="address")]
		public string Address { get; set; }


		[DataMember(Name="mac_address")]
		public string MacAddress { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
