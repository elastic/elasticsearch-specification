using Nest.Indices;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class IndicesShardStoresResponse : IResponse {
		
		[DataMember(Name="indices")]
		public IDictionary<string, IndicesShardStores> Indices { get; set; }

	}
}
