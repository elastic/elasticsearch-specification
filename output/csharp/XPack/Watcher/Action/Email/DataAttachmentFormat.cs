
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum DataAttachmentFormat {
  
		[DataMember(Name = "json")] Json,
		[DataMember(Name = "yaml")] Yaml
	}
}
