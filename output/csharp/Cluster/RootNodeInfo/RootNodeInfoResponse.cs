using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class RootNodeInfoResponse : IResponse {
		
		[DataMember(Name="cluster_name")]
		public string ClusterName { get; set; }


		[DataMember(Name="cluster_uuid")]
		public string ClusterUuid { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="tagline")]
		public string Tagline { get; set; }


		[DataMember(Name="version")]
		public ElasticsearchVersionInfo Version { get; set; }

	}
}
