using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeProcessInfo  {
		
		[DataMember(Name="id")]
		public long Id { get; set; }


		[DataMember(Name="mlockall")]
		public bool Mlockall { get; set; }


		[DataMember(Name="refresh_interval_in_millis")]
		public long RefreshIntervalInMillis { get; set; }

	}
}
