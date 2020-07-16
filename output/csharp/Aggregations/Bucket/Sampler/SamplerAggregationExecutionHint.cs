
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum SamplerAggregationExecutionHint {
  
		[DataMember(Name = "map")] Map,
		[DataMember(Name = "global_ordinals")] GlobalOrdinals,
		[DataMember(Name = "bytes_hash")] BytesHash
	}
}
