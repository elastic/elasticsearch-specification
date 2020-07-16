
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum IndexSortOrder {
  
		[DataMember(Name = "asc")] Asc,
		[DataMember(Name = "desc")] Desc
	}
}
