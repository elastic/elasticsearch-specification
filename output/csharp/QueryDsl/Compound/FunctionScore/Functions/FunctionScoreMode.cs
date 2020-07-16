
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum FunctionScoreMode {
  
		[DataMember(Name = "multiply")] Multiply,
		[DataMember(Name = "sum")] Sum,
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "first")] First,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "min")] Min
	}
}
