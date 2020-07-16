
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum TermsAggregationExecutionHint {
  
		[DataMember(Name = "map")] Map,
		[DataMember(Name = "global_ordinals")] GlobalOrdinals,
		[DataMember(Name = "global_ordinals_hash")] GlobalOrdinalsHash,
		[DataMember(Name = "global_ordinals_low_cardinality")] GlobalOrdinalsLowCardinality
	}
}
