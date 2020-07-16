using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class IndicesStats  {
		
		[DataMember(Name="primaries")]
		public IndexStats Primaries { get; set; }


		[DataMember(Name="shards")]
		public IDictionary<string, List<ShardStats>> Shards { get; set; }


		[DataMember(Name="total")]
		public IndexStats Total { get; set; }


		[DataMember(Name="uuid")]
		public string Uuid { get; set; }

	}
}
