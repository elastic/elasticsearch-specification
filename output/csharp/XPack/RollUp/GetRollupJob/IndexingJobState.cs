
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum IndexingJobState {
  
		[DataMember(Name = "started")] Started,
		[DataMember(Name = "indexing")] Indexing,
		[DataMember(Name = "stopping")] Stopping,
		[DataMember(Name = "stopped")] Stopped,
		[DataMember(Name = "aborting")] Aborting
	}
}
