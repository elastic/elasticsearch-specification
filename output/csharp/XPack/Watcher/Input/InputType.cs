
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum InputType {
  
		[DataMember(Name = "http")] Http,
		[DataMember(Name = "search")] Search,
		[DataMember(Name = "simple")] Simple
	}
}
