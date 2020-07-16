
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ExcludeFrequent {
  
		[DataMember(Name = "all")] All,
		[DataMember(Name = "none")] None,
		[DataMember(Name = "by")] By,
		[DataMember(Name = "over")] Over
	}
}
