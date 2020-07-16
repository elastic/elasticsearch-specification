
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ExecutionPhase {
  
		[DataMember(Name = "awaits_execution")] AwaitsExecution,
		[DataMember(Name = "started")] Started,
		[DataMember(Name = "input")] Input,
		[DataMember(Name = "condition")] Condition,
		[DataMember(Name = "actions")] Actions,
		[DataMember(Name = "watch_transform")] WatchTransform,
		[DataMember(Name = "aborted")] Aborted,
		[DataMember(Name = "finished")] Finished
	}
}
