using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SlackActionResult  {
		
		[DataMember(Name="account")]
		public string Account { get; set; }


		[DataMember(Name="sent_messages")]
		public List<SlackActionMessageResult> SentMessages { get; set; }

	}
}
