using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterGetSettingsResponse : IResponse {
		
		[DataMember(Name="persistent")]
		public IDictionary<string, object> Persistent { get; set; }


		[DataMember(Name="transient")]
		public IDictionary<string, object> Transient { get; set; }

	}
}
