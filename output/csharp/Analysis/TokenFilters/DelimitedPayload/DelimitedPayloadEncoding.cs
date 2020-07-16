
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum DelimitedPayloadEncoding {
  
		[DataMember(Name = "int")] Int,
		[DataMember(Name = "float")] Float,
		[DataMember(Name = "identity")] Identity
	}
}
