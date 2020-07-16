
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum IndexSortMissing {
  
		[DataMember(Name = "_first")] First,
		[DataMember(Name = "_last")] Last
	}
}
