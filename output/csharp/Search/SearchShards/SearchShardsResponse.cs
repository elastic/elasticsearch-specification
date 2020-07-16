using Nest.Search;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SearchShardsResponse : IResponse {
		
		[DataMember(Name="nodes")]
		public IDictionary<string, SearchNode> Nodes { get; set; }


		[DataMember(Name="shards")]
		public List<List<SearchShard>> Shards { get; set; }

	}
}
