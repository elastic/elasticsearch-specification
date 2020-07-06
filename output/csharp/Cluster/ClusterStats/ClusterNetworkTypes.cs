using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterNetworkTypes  {
		
		[DataMember(Name="http_types")]
		public IDictionary<string, int> HttpTypes { get; set; }


		[DataMember(Name="transport_types")]
		public IDictionary<string, int> TransportTypes { get; set; }

	}
}
