
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum NoriDecompoundMode {
  
		[DataMember(Name = "discard")] Discard,
		[DataMember(Name = "none")] None,
		[DataMember(Name = "mixed")] Mixed
	}
}
