using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterProcessOpenFileDescriptors  {
		
		[DataMember(Name="avg")]
		public long Avg { get; set; }


		[DataMember(Name="max")]
		public long Max { get; set; }


		[DataMember(Name="min")]
		public long Min { get; set; }

	}
}
