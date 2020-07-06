using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecutionResultAction  {
		
		[DataMember(Name="email")]
		public EmailActionResult Email { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="index")]
		public IndexActionResult Index { get; set; }


		[DataMember(Name="logging")]
		public LoggingActionResult Logging { get; set; }


		[DataMember(Name="pagerduty")]
		public PagerDutyActionResult Pagerduty { get; set; }


		[DataMember(Name="reason")]
		public string Reason { get; set; }


		[DataMember(Name="slack")]
		public SlackActionResult Slack { get; set; }


		[DataMember(Name="status")]
		public Status Status { get; set; }


		[DataMember(Name="type")]
		public ActionType Type { get; set; }


		[DataMember(Name="webhook")]
		public WebhookActionResult Webhook { get; set; }

	}
}
