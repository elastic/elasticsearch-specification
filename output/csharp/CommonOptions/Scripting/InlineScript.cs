using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class InlineScript  {
		
		[DataMember(Name="source")]
		public string Source { get; set; }

	}
}
