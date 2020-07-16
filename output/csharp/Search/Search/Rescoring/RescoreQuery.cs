using Nest.QueryDsl;
using Nest.Internal;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class RescoreQuery  {
		
		[DataMember(Name="rescore_query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="query_weight")]
		public double QueryWeight { get; set; }


		[DataMember(Name="rescore_query_weight")]
		public double RescoreQueryWeight { get; set; }


		[DataMember(Name="score_mode")]
		public ScoreMode ScoreMode { get; set; }

	}
}
