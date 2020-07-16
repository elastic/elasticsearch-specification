
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum EmailPriority {
  
		[DataMember(Name = "lowest")] Lowest,
		[DataMember(Name = "low")] Low,
		[DataMember(Name = "normal")] Normal,
		[DataMember(Name = "high")] High,
		[DataMember(Name = "highest")] Highest
	}
}
