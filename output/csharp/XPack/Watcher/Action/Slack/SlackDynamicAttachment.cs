using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SlackDynamicAttachment  {
		
		[DataMember(Name="attachment_template")]
		public SlackAttachment AttachmentTemplate { get; set; }


		[DataMember(Name="list_path")]
		public string ListPath { get; set; }

	}
}
