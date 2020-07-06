using Nest.Search;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ValidateQueryResponse : IResponse {
		
		[DataMember(Name="explanations")]
		public List<ValidationExplanation> Explanations { get; set; }


		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }


		[DataMember(Name="valid")]
		public bool Valid { get; set; }

	}
}
