using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeUsageInformation  {
		
		[DataMember(Name="rest_actions")]
		public IDictionary<string, int> RestActions { get; set; }


		[DataMember(Name="since")]
		public DateTimeOffset Since { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
