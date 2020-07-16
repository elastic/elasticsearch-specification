using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class WebhookActionResult  {
		
		[DataMember(Name="request")]
		public HttpInputRequestResult Request { get; set; }


		[DataMember(Name="response")]
		public HttpInputResponseResult Response { get; set; }

	}
}
