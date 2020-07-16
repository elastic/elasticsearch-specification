
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum SuggestMode {
  
		[DataMember(Name = "missing")] Missing,
		[DataMember(Name = "popular")] Popular,
		[DataMember(Name = "always")] Always
	}
}
