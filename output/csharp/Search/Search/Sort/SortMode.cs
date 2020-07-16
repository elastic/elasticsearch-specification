
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum SortMode {
  
		[DataMember(Name = "min")] Min,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "sum")] Sum,
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "median")] Median
	}
}
