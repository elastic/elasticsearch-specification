using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class MultiSearchResponse : IResponse {
		
		[DataMember(Name="all_responses")]
		public List<IResponse> AllResponses { get; set; }


		[DataMember(Name="took")]
		public long Took { get; set; }


		[DataMember(Name="total_responses")]
		public int TotalResponses { get; set; }

	}
}
