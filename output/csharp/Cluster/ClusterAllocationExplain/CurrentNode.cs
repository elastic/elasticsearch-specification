using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class CurrentNode  {
		
		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="attributes")]
		public IDictionary<string, string> Attributes { get; set; }


		[DataMember(Name="transport_address")]
		public string TransportAddress { get; set; }


		[DataMember(Name="weight_ranking")]
		public int WeightRanking { get; set; }

	}
}
