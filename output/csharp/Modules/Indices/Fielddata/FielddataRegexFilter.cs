using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class FielddataRegexFilter  {
		
		[DataMember(Name="pattern")]
		public string Pattern { get; set; }

	}
}
