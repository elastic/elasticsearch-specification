
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum GeoHashPrecision {
  
		[DataMember(Name = "Precision1")] Precision1,
		[DataMember(Name = "Precision2")] Precision2,
		[DataMember(Name = "Precision3")] Precision3,
		[DataMember(Name = "Precision4")] Precision4,
		[DataMember(Name = "Precision5")] Precision5,
		[DataMember(Name = "Precision6")] Precision6,
		[DataMember(Name = "Precision7")] Precision7,
		[DataMember(Name = "Precision8")] Precision8,
		[DataMember(Name = "Precision9")] Precision9,
		[DataMember(Name = "Precision10")] Precision10,
		[DataMember(Name = "Precision11")] Precision11,
		[DataMember(Name = "Precision12")] Precision12
	}
}
