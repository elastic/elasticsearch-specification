
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum PhoneticRuleType {
  
		[DataMember(Name = "approx")] Approx,
		[DataMember(Name = "exact")] Exact
	}
}
