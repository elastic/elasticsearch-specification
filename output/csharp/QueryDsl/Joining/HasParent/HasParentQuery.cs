using Nest.Search;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class HasParentQuery  {
		
		[DataMember(Name="ignore_unmapped")]
		public bool IgnoreUnmapped { get; set; }


		[DataMember(Name="inner_hits")]
		public InnerHits InnerHits { get; set; }


		[DataMember(Name="parent_type")]
		public RelationName ParentType { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="score")]
		public bool Score { get; set; }

	}
}
