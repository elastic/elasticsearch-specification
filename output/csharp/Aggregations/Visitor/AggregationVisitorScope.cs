
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum AggregationVisitorScope {
  
		[DataMember(Name = "Unknown")] Unknown,
		[DataMember(Name = "Aggregation")] Aggregation,
		[DataMember(Name = "Bucket")] Bucket
	}
}
