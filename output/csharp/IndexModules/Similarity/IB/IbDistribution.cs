
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum IbDistribution {
  
		[DataMember(Name = "ll")] Ll,
		[DataMember(Name = "spl")] Spl
	}
}
