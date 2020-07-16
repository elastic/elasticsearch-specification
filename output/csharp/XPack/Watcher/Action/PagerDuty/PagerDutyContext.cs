using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PagerDutyContext  {
		
		[DataMember(Name="href")]
		public string Href { get; set; }


		[DataMember(Name="src")]
		public string Src { get; set; }


		[DataMember(Name="type")]
		public PagerDutyContextType Type { get; set; }

	}
}
