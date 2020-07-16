using Nest.XPack;
using Nest.Common;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GraphExploreResponse : IResponse {
		
		[DataMember(Name="connections")]
		public List<GraphConnection> Connections { get; set; }


		[DataMember(Name="failures")]
		public List<ShardFailure> Failures { get; set; }


		[DataMember(Name="timed_out")]
		public bool TimedOut { get; set; }


		[DataMember(Name="took")]
		public long Took { get; set; }


		[DataMember(Name="vertices")]
		public List<GraphVertex> Vertices { get; set; }

	}
}
