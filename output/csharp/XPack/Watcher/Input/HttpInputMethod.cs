
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum HttpInputMethod {
  
		[DataMember(Name = "head")] Head,
		[DataMember(Name = "get")] Get,
		[DataMember(Name = "post")] Post,
		[DataMember(Name = "put")] Put,
		[DataMember(Name = "delete")] Delete
	}
}
