using Nest.QueryDsl;
using Nest.Internal;
using Nest.Search;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class NestedSort  {
		
		[DataMember(Name="filter")]
		public QueryContainer Filter { get; set; }


		[DataMember(Name="max_children")]
		public int MaxChildren { get; set; }


		[DataMember(Name="nested")]
		public NestedSort Nested { get; set; }


		[DataMember(Name="path")]
		public Field Path { get; set; }

	}
}
