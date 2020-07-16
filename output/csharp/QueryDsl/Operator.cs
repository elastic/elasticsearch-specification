
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum Operator {
  
		[DataMember(Name = "and")] And,
		[DataMember(Name = "or")] Or
	}
}
