using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class CompositeAggregationSource  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="missing_bucket")]
		public bool MissingBucket { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="order")]
		public SortOrder Order { get; set; }


		[DataMember(Name="source_type")]
		public string SourceType { get; set; }

	}
}
