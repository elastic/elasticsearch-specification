
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum JobState {
  
		[DataMember(Name = "closing")] Closing,
		[DataMember(Name = "closed")] Closed,
		[DataMember(Name = "opened")] Opened,
		[DataMember(Name = "failed")] Failed,
		[DataMember(Name = "opening")] Opening
	}
}
