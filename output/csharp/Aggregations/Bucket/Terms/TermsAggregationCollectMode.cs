
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum TermsAggregationCollectMode {
  
		[DataMember(Name = "depth_first")] DepthFirst,
		[DataMember(Name = "breadth_first")] BreadthFirst
	}
}
