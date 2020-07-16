
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum GeoValidationMethod {
  
		[DataMember(Name = "coerce")] Coerce,
		[DataMember(Name = "ignore_malformed")] IgnoreMalformed,
		[DataMember(Name = "strict")] Strict
	}
}
