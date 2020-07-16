using Nest.Search;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class Sort  {
		
		[DataMember(Name="missing")]
		public object Missing { get; set; }


		[DataMember(Name="mode")]
		public SortMode Mode { get; set; }


		[DataMember(Name="nested")]
		public NestedSort Nested { get; set; }


		[DataMember(Name="numeric_type")]
		public NumericType NumericType { get; set; }


		[DataMember(Name="order")]
		public SortOrder Order { get; set; }


		[DataMember(Name="sort_key")]
		public Field SortKey { get; set; }

	}
}
