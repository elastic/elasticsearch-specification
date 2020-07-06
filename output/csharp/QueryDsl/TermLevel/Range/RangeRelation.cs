
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum RangeRelation {
  
		[DataMember(Name = "within")] Within,
		[DataMember(Name = "contains")] Contains,
		[DataMember(Name = "intersects")] Intersects
	}
}
