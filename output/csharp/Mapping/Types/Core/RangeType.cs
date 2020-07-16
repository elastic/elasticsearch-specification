
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum RangeType {
  
		[DataMember(Name = "integer_range")] IntegerRange,
		[DataMember(Name = "float_range")] FloatRange,
		[DataMember(Name = "long_range")] LongRange,
		[DataMember(Name = "double_range")] DoubleRange,
		[DataMember(Name = "date_range")] DateRange,
		[DataMember(Name = "ip_range")] IpRange
	}
}
