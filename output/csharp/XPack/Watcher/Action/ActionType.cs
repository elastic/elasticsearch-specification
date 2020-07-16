
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ActionType {
  
		[DataMember(Name = "email")] Email,
		[DataMember(Name = "webhook")] Webhook,
		[DataMember(Name = "index")] Index,
		[DataMember(Name = "logging")] Logging,
		[DataMember(Name = "slack")] Slack,
		[DataMember(Name = "pagerduty")] Pagerduty
	}
}
