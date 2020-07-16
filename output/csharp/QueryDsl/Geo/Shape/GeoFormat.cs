
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum GeoFormat {
  
		[DataMember(Name = "GeoJson")] GeoJson,
		[DataMember(Name = "WellKnownText")] WellKnownText
	}
}
