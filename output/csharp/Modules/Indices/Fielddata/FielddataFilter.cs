using Nest.Modules;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class FielddataFilter  {
		
		[DataMember(Name="frequency")]
		public FielddataFrequencyFilter Frequency { get; set; }


		[DataMember(Name="regex")]
		public FielddataRegexFilter Regex { get; set; }

	}
}
