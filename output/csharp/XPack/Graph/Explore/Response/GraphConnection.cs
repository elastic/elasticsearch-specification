using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GraphConnection  {
		
		[DataMember(Name="doc_count")]
		public long DocCount { get; set; }


		[DataMember(Name="source")]
		public long Source { get; set; }


		[DataMember(Name="target")]
		public long Target { get; set; }


		[DataMember(Name="weight")]
		public double Weight { get; set; }

	}
}
