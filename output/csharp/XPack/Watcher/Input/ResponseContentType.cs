
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ResponseContentType {
  
		[DataMember(Name = "json")] Json,
		[DataMember(Name = "yaml")] Yaml,
		[DataMember(Name = "text")] Text
	}
}
