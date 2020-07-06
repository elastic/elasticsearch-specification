
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum MatchType {
  
		[DataMember(Name = "simple")] Simple,
		[DataMember(Name = "regex")] Regex
	}
}
