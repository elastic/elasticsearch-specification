
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum IcuNormalizationMode {
  
		[DataMember(Name = "decompose")] Decompose,
		[DataMember(Name = "compose")] Compose
	}
}
