
using System.Runtime.Serialization;

namespace Nest.Modules {

	public enum GeoPointFielddataFormat {
  
		[DataMember(Name = "array")] Array,
		[DataMember(Name = "doc_values")] DocValues,
		[DataMember(Name = "compressed")] Compressed,
		[DataMember(Name = "disabled")] Disabled
	}
}
