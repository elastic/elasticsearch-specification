using Nest.Search;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class NestedQuery  {
		
		[DataMember(Name="ignore_unmapped")]
		public bool IgnoreUnmapped { get; set; }


		[DataMember(Name="inner_hits")]
		public InnerHits InnerHits { get; set; }


		[DataMember(Name="path")]
		public Field Path { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="score_mode")]
		public NestedScoreMode ScoreMode { get; set; }

	}
}
