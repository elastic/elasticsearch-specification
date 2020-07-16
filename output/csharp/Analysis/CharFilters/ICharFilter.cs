using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class ICharFilter  {
		
		[DataMember(Name="type")]
		public string Type { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
