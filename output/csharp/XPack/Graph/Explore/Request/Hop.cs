using Nest.XPack;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Hop  {
		
		[DataMember(Name="connections")]
		public Hop Connections { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="vertices")]
		public List<GraphVertexDefinition> Vertices { get; set; }

	}
}
