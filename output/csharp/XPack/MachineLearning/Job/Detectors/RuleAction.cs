
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum RuleAction {
  
		[DataMember(Name = "skip_result")] SkipResult,
		[DataMember(Name = "skip_model_update")] SkipModelUpdate
	}
}
