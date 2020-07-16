
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum Status {
  
		[DataMember(Name = "success")] Success,
		[DataMember(Name = "failure")] Failure,
		[DataMember(Name = "simulated")] Simulated,
		[DataMember(Name = "throttled")] Throttled
	}
}
