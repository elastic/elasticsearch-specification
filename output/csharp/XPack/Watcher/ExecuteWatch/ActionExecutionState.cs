
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ActionExecutionState {
  
		[DataMember(Name = "awaits_execution")] AwaitsExecution,
		[DataMember(Name = "checking")] Checking,
		[DataMember(Name = "execution_not_needed")] ExecutionNotNeeded,
		[DataMember(Name = "throttled")] Throttled,
		[DataMember(Name = "executed")] Executed,
		[DataMember(Name = "failed")] Failed,
		[DataMember(Name = "deleted_while_queued")] DeletedWhileQueued,
		[DataMember(Name = "not_executed_already_queued")] NotExecutedAlreadyQueued
	}
}
