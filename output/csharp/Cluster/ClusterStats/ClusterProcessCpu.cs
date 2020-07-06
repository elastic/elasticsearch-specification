using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterProcessCpu  {
		
		[DataMember(Name="percent")]
		public int Percent { get; set; }

	}
}
