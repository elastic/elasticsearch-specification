
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum Normalization {
  
		[DataMember(Name = "no")] No,
		[DataMember(Name = "h1")] H1,
		[DataMember(Name = "h2")] H2,
		[DataMember(Name = "h3")] H3,
		[DataMember(Name = "z")] Z
	}
}
