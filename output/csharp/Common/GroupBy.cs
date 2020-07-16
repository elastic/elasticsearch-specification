
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum GroupBy {
  
		[DataMember(Name = "nodes")] Nodes,
		[DataMember(Name = "parents")] Parents,
		[DataMember(Name = "none")] None
	}
}
