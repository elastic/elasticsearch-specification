
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ConditionType {
  
		[DataMember(Name = "always")] Always,
		[DataMember(Name = "never")] Never,
		[DataMember(Name = "script")] Script,
		[DataMember(Name = "compare")] Compare,
		[DataMember(Name = "array_compare")] ArrayCompare
	}
}
