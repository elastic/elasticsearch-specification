using Nest.Search;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ExplainResponse<TDocument> : ResponseBase {
		
		[DataMember(Name="explanation")]
		public ExplanationDetail Explanation { get; set; }


		[DataMember(Name="get")]
		public InlineGet<TDocument> Get { get; set; }


		[DataMember(Name="matched")]
		public bool Matched { get; set; }

	}
}
