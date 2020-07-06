using Nest.Indices;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ReloadSearchAnalyzersResponse : IResponse {
		
		[DataMember(Name="reload_details")]
		public List<ReloadDetails> ReloadDetails { get; set; }


		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }

	}
}
