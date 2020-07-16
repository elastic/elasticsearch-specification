
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum TotalHitsRelation {
  
		[DataMember(Name = "eq")] Eq,
		[DataMember(Name = "gte")] Gte
	}
}
