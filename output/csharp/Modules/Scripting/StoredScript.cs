using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class StoredScript  {
		
		[DataMember(Name="lang")]
		public string Lang { get; set; }


		[DataMember(Name="source")]
		public string Source { get; set; }

	}
}
