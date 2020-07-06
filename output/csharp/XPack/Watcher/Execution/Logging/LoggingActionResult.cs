using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class LoggingActionResult  {
		
		[DataMember(Name="logged_text")]
		public string LoggedText { get; set; }

	}
}
