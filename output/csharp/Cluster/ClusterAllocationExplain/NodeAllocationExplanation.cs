using Nest.Cluster;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeAllocationExplanation  {
		
		[DataMember(Name="deciders")]
		public List<AllocationDecision> Deciders { get; set; }


		[DataMember(Name="node_attributes")]
		public IDictionary<string, string> NodeAttributes { get; set; }


		[DataMember(Name="node_decision")]
		public Decision NodeDecision { get; set; }


		[DataMember(Name="node_id")]
		public string NodeId { get; set; }


		[DataMember(Name="node_name")]
		public string NodeName { get; set; }


		[DataMember(Name="store")]
		public AllocationStore Store { get; set; }


		[DataMember(Name="transport_address")]
		public string TransportAddress { get; set; }


		[DataMember(Name="weight_ranking")]
		public int WeightRanking { get; set; }

	}
}
