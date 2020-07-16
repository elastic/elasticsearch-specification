using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class IndicesShardStores  {
		
		[DataMember(Name="shards")]
		public IDictionary<string, ShardStoreWrapper> Shards { get; set; }

	}
}
