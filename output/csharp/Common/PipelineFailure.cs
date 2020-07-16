
using System.Runtime.Serialization;

namespace Nest.Common {

	public enum PipelineFailure {
  
		[DataMember(Name = "BadAuthentication")] BadAuthentication,
		[DataMember(Name = "BadResponse")] BadResponse,
		[DataMember(Name = "PingFailure")] PingFailure,
		[DataMember(Name = "SniffFailure")] SniffFailure,
		[DataMember(Name = "CouldNotStartSniffOnStartup")] CouldNotStartSniffOnStartup,
		[DataMember(Name = "MaxTimeoutReached")] MaxTimeoutReached,
		[DataMember(Name = "MaxRetriesReached")] MaxRetriesReached,
		[DataMember(Name = "Unexpected")] Unexpected,
		[DataMember(Name = "BadRequest")] BadRequest,
		[DataMember(Name = "NoNodesAttempted")] NoNodesAttempted
	}
}
