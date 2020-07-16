
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum FunctionBoostMode {
  
		[DataMember(Name = "multiply")] Multiply,
		[DataMember(Name = "replace")] Replace,
		[DataMember(Name = "sum")] Sum,
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "min")] Min
	}
}
