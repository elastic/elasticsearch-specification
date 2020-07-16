
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum HttpMethod {
  
		[DataMember(Name = "GET")] Get,
		[DataMember(Name = "POST")] Post,
		[DataMember(Name = "PUT")] Put,
		[DataMember(Name = "DELETE")] Delete,
		[DataMember(Name = "HEAD")] Head
	}
}
