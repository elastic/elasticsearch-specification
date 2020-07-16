
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum RollupMetric {
  
		[DataMember(Name = "min")] Min,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "sum")] Sum,
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "value_count")] ValueCount
	}
}
