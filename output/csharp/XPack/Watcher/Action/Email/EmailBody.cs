using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class EmailBody  {
		
		[DataMember(Name="html")]
		public string Html { get; set; }


		[DataMember(Name="text")]
		public string Text { get; set; }

	}
}
