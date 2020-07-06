using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using Nest.XPack;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GraphExploreRequest : RequestBase {
		
		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="connections")]
		public Hop Connections { get; set; }


		[DataMember(Name="controls")]
		public GraphExploreControls Controls { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="vertices")]
		public List<GraphVertexDefinition> Vertices { get; set; }

	}
}
