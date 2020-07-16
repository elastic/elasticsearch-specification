
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum DefaultOperator {
  
		[DataMember(Name = "AND")] And,
		[DataMember(Name = "OR")] Or
	}
}
