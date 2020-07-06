
using System.Runtime.Serialization;

namespace Nest.CommonOptions {

	public enum GeoShapeRelation {
  
		[DataMember(Name = "intersects")] Intersects,
		[DataMember(Name = "disjoint")] Disjoint,
		[DataMember(Name = "within")] Within,
		[DataMember(Name = "contains")] Contains
	}
}
