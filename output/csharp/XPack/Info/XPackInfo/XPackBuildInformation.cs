using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackBuildInformation  {
		
		[DataMember(Name="date")]
		public DateTimeOffset Date { get; set; }


		[DataMember(Name="hash")]
		public string Hash { get; set; }

	}
}
