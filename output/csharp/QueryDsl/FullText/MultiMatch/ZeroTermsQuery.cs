
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum ZeroTermsQuery {
  
		[DataMember(Name = "all")] All,
		[DataMember(Name = "none")] None
	}
}
