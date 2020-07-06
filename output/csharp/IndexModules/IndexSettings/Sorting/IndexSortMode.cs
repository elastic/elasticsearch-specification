
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum IndexSortMode {
  
		[DataMember(Name = "min")] Min,
		[DataMember(Name = "max")] Max
	}
}
