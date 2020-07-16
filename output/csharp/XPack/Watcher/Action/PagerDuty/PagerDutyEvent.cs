using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PagerDutyEvent  {
		
		[DataMember(Name="account")]
		public string Account { get; set; }


		[DataMember(Name="attach_payload")]
		public bool AttachPayload { get; set; }


		[DataMember(Name="client")]
		public string Client { get; set; }


		[DataMember(Name="client_url")]
		public string ClientUrl { get; set; }


		[DataMember(Name="context")]
		public List<PagerDutyContext> Context { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="event_type")]
		public PagerDutyEventType EventType { get; set; }


		[DataMember(Name="incident_key")]
		public string IncidentKey { get; set; }

	}
}
