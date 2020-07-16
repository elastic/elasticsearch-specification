using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class FiltersAggregation  {
		
		[DataMember(Name="filters")]
		public Union<IDictionary<string, QueryContainer>, List<QueryContainer>> Filters { get; set; }


		[DataMember(Name="other_bucket")]
		public bool OtherBucket { get; set; }


		[DataMember(Name="other_bucket_key")]
		public string OtherBucketKey { get; set; }

	}
}
