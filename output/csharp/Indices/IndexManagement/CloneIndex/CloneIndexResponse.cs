using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class CloneIndexResponse : IResponse {
		
		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="shards_acknowledged")]
		public bool ShardsAcknowledged { get; set; }

	}
}
