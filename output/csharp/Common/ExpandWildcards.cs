
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum ExpandWildcards {
  
		[DataMember(Name = "open")] Open,
		[DataMember(Name = "closed")] Closed,
		[DataMember(Name = "hidden")] Hidden,
		[DataMember(Name = "none")] None,
		[DataMember(Name = "all")] All
	}
}
