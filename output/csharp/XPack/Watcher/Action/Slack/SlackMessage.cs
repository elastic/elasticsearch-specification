using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SlackMessage  {
		
		[DataMember(Name="attachments")]
		public List<SlackAttachment> Attachments { get; set; }


		[DataMember(Name="dynamic_attachments")]
		public SlackDynamicAttachment DynamicAttachments { get; set; }


		[DataMember(Name="from")]
		public string From { get; set; }


		[DataMember(Name="icon")]
		public string Icon { get; set; }


		[DataMember(Name="text")]
		public string Text { get; set; }


		[DataMember(Name="to")]
		public List<string> To { get; set; }

	}
}
