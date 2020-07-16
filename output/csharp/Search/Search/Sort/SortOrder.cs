
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum SortOrder {
  
		[DataMember(Name = "asc")] Asc,
		[DataMember(Name = "desc")] Desc
	}
}
