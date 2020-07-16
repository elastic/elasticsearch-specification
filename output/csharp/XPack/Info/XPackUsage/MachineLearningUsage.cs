using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class MachineLearningUsage : XPackUsage {
		
		[DataMember(Name="datafeeds")]
		public IDictionary<string, DataFeed> Datafeeds { get; set; }


		[DataMember(Name="jobs")]
		public IDictionary<string, Job> Jobs { get; set; }


		[DataMember(Name="node_count")]
		public int NodeCount { get; set; }

	}
}
