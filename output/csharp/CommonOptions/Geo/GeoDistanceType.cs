
using System.Runtime.Serialization;

namespace Nest.CommonOptions {

	public enum GeoDistanceType {
  
		[DataMember(Name = "arc")] Arc,
		[DataMember(Name = "plane")] Plane
	}
}
