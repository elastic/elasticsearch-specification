
using System.Runtime.Serialization;

namespace Nest.Ingest {

	public enum ConvertProcessorType {
  
		[DataMember(Name = "integer")] Integer,
		[DataMember(Name = "long")] Long,
		[DataMember(Name = "float")] Float,
		[DataMember(Name = "double")] Double,
		[DataMember(Name = "string")] String,
		[DataMember(Name = "boolean")] Boolean,
		[DataMember(Name = "auto")] Auto
	}
}
