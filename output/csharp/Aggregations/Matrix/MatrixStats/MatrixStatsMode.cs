
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum MatrixStatsMode {
  
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "min")] Min,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "sum")] Sum,
		[DataMember(Name = "median")] Median
	}
}
