
using System.Runtime.Serialization;

namespace Nest.Indices {

	public enum ShardRoutingState {
  
		[DataMember(Name = "UNASSIGNED")] Unassigned,
		[DataMember(Name = "INITIALIZING")] Initializing,
		[DataMember(Name = "STARTED")] Started,
		[DataMember(Name = "RELOCATING")] Relocating
	}
}
