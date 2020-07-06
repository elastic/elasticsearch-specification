
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum GeoStrategy {
  
		[DataMember(Name = "recursive")] Recursive,
		[DataMember(Name = "term")] Term
	}
}
