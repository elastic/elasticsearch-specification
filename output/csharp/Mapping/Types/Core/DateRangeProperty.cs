using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class DateRangeProperty : RangePropertyBase {
		
		[DataMember(Name="format")]
		public string Format { get; set; }

	}
}
