
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ConditionOperator {
  
		[DataMember(Name = "gt")] Gt,
		[DataMember(Name = "gte")] Gte,
		[DataMember(Name = "lt")] Lt,
		[DataMember(Name = "lte")] Lte
	}
}
