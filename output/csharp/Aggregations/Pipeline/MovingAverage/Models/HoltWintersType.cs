
using System.Runtime.Serialization;

namespace Nest.Aggregations {

	public enum HoltWintersType {
  
		[DataMember(Name = "add")] Add,
		[DataMember(Name = "mult")] Mult
	}
}
