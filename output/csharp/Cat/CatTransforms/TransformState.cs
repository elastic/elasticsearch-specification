
using System.Runtime.Serialization;

namespace Nest.Cat {

	public enum TransformState {
  
		[DataMember(Name = "STARTED")] Started,
		[DataMember(Name = "INDEXING")] Indexing,
		[DataMember(Name = "ABORTING")] Aborting,
		[DataMember(Name = "STOPPING")] Stopping,
		[DataMember(Name = "STOPPED")] Stopped,
		[DataMember(Name = "FAILED")] Failed
	}
}
