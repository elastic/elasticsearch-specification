
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum AcknowledgementState {
  
		[DataMember(Name = "awaits_successful_execution")] AwaitsSuccessfulExecution,
		[DataMember(Name = "ackable")] Ackable,
		[DataMember(Name = "acked")] Acked
	}
}
