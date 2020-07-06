using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterOperatingSystemPrettyNane  {
		
		[DataMember(Name="count")]
		public int Count { get; set; }


		[DataMember(Name="pretty_name")]
		public string PrettyName { get; set; }

	}
}
