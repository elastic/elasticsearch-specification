using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class HistogramProperty : PropertyBase {
		
		[DataMember(Name="ignore_malformed")]
		public bool IgnoreMalformed { get; set; }

	}
}
