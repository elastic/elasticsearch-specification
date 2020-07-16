using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SlackAttachmentField  {
		
		[DataMember(Name="short")]
		public bool Short { get; set; }


		[DataMember(Name="title")]
		public string Title { get; set; }


		[DataMember(Name="value")]
		public string Value { get; set; }

	}
}
