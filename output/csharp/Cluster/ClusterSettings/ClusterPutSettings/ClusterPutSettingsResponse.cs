using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterPutSettingsResponse : IResponse {
		
		[DataMember(Name="acknowledged")]
		public bool Acknowledged { get; set; }


		[DataMember(Name="persistent")]
		public IDictionary<string, object> Persistent { get; set; }


		[DataMember(Name="transient")]
		public IDictionary<string, object> Transient { get; set; }

	}
}
