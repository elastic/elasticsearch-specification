using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class MonitoringUsage : XPackUsage {
		
		[DataMember(Name="collection_enabled")]
		public bool CollectionEnabled { get; set; }


		[DataMember(Name="enabled_exporters")]
		public IDictionary<string, long> EnabledExporters { get; set; }

	}
}
