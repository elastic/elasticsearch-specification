
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum PagerDutyEventType {
  
		[DataMember(Name = "trigger")] Trigger,
		[DataMember(Name = "resolve")] Resolve,
		[DataMember(Name = "acknowledge")] Acknowledge
	}
}
