using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class CharFilterDetail  {
		
		[DataMember(Name="filtered_text")]
		public List<string> FilteredText { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
