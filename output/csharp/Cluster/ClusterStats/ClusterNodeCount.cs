using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterNodeCount  {
		
		[DataMember(Name="coordinating_only")]
		public int CoordinatingOnly { get; set; }


		[DataMember(Name="data")]
		public int Data { get; set; }


		[DataMember(Name="ingest")]
		public int Ingest { get; set; }


		[DataMember(Name="master")]
		public int Master { get; set; }


		[DataMember(Name="total")]
		public int Total { get; set; }


		[DataMember(Name="voting_only")]
		public int VotingOnly { get; set; }

	}
}
