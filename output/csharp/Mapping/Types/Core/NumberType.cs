
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum NumberType {
  
		[DataMember(Name = "float")] Float,
		[DataMember(Name = "half_float")] HalfFloat,
		[DataMember(Name = "scaled_float")] ScaledFloat,
		[DataMember(Name = "double")] Double,
		[DataMember(Name = "integer")] Integer,
		[DataMember(Name = "long")] Long,
		[DataMember(Name = "short")] Short,
		[DataMember(Name = "byte")] Byte
	}
}
