using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ClearCachedRealmsResponse : IResponse {
		
		[DataMember(Name="cluster_name")]
		public string ClusterName { get; set; }


		[DataMember(Name="nodes")]
		public IDictionary<string, SecurityNode> Nodes { get; set; }

	}
}
