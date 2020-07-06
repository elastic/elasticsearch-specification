using Nest.Search;
using Nest.Internal;
using Nest.QueryDsl;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class HasChildQuery  {
		
		[DataMember(Name="ignore_unmapped")]
		public bool IgnoreUnmapped { get; set; }


		[DataMember(Name="inner_hits")]
		public InnerHits InnerHits { get; set; }


		[DataMember(Name="max_children")]
		public int MaxChildren { get; set; }


		[DataMember(Name="min_children")]
		public int MinChildren { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="score_mode")]
		public ChildScoreMode ScoreMode { get; set; }


		[DataMember(Name="type")]
		public RelationName Type { get; set; }

	}
}
