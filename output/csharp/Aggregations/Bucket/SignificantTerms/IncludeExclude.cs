using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class IncludeExclude  {
		
		[DataMember(Name="pattern")]
		public string Pattern { get; set; }


		[DataMember(Name="values")]
		public List<string> Values { get; set; }

	}
}
