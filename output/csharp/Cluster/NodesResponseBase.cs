using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodesResponseBase : IResponse {
		
		[DataMember(Name="_nodes")]
		public NodeStatistics Nodes { get; set; }

	}
}
