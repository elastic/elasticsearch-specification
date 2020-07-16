
using System.Runtime.Serialization;

namespace Nest.CommonOptions {

	public enum ShapeRelation {
  
		[DataMember(Name = "intersects")] Intersects,
		[DataMember(Name = "disjoint")] Disjoint,
		[DataMember(Name = "within")] Within
	}
}
