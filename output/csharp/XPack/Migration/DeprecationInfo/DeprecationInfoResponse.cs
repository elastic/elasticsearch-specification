using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeprecationInfoResponse : IResponse {
		
		[DataMember(Name="cluster_settings")]
		public List<DeprecationInfo> ClusterSettings { get; set; }


		[DataMember(Name="index_settings")]
		public IDictionary<string, List<DeprecationInfo>> IndexSettings { get; set; }


		[DataMember(Name="node_settings")]
		public List<DeprecationInfo> NodeSettings { get; set; }

	}
}
