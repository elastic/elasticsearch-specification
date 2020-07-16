using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TimeOfYear  {
		
		[DataMember(Name="at")]
		public List<string> At { get; set; }


		[DataMember(Name="int")]
		public List<Month> Int { get; set; }


		[DataMember(Name="on")]
		public List<int> On { get; set; }

	}
}
