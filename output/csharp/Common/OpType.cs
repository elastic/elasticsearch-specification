
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum OpType {
  
		[DataMember(Name = "index")] Index,
		[DataMember(Name = "create")] Create
	}
}
