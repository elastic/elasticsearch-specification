
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum MultiValueMode {
  
		[DataMember(Name = "min")] Min,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "sum")] Sum
	}
}
