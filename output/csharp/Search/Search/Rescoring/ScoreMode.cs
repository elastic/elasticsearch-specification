
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum ScoreMode {
  
		[DataMember(Name = "avg")] Avg,
		[DataMember(Name = "max")] Max,
		[DataMember(Name = "min")] Min,
		[DataMember(Name = "multiply")] Multiply,
		[DataMember(Name = "total")] Total
	}
}
