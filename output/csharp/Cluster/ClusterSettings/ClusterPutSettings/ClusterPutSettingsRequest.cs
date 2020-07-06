using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterPutSettingsRequest : RequestBase {
		
		[DataMember(Name="flat_settings")]
		public bool FlatSettings { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="persistent")]
		public IDictionary<string, object> Persistent { get; set; }


		[DataMember(Name="transient")]
		public IDictionary<string, object> Transient { get; set; }

	}
}
