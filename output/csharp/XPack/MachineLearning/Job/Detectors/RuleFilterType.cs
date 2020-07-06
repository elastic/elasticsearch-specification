
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum RuleFilterType {
  
		[DataMember(Name = "include")] Include,
		[DataMember(Name = "exclude")] Exclude
	}
}
