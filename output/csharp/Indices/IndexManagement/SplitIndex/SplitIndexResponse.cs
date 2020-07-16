using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class SplitIndexResponse : IResponse {
		
		[DataMember(Name="shards_acknowledged")]
		public bool ShardsAcknowledged { get; set; }

	}
}
