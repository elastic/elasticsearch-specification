
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum GapPolicy {
  
		[DataMember(Name = "skip")] Skip,
		[DataMember(Name = "insert_zeros")] InsertZeros
	}
}
