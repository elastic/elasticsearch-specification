using Nest.Indices;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class CloseIndexResponse : IResponse {
		
		[DataMember(Name="indices")]
		public IDictionary<string, CloseIndexResult> Indices { get; set; }


		[DataMember(Name="shards_acknowledged")]
		public bool ShardsAcknowledged { get; set; }

	}
}
