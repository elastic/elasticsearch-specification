using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PagerDutyActionEventResult  {
		
		[DataMember(Name="event")]
		public PagerDutyEvent Event { get; set; }


		[DataMember(Name="reason")]
		public string Reason { get; set; }


		[DataMember(Name="request")]
		public HttpInputRequestResult Request { get; set; }


		[DataMember(Name="response")]
		public HttpInputResponseResult Response { get; set; }

	}
}
