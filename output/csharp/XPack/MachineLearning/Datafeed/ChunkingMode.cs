
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ChunkingMode {
  
		[DataMember(Name = "auto")] Auto,
		[DataMember(Name = "manual")] Manual,
		[DataMember(Name = "off")] Off
	}
}
