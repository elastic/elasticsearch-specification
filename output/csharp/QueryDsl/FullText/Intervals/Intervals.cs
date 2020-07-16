using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class Intervals  {
		
		[DataMember(Name="filter")]
		public IntervalsFilter Filter { get; set; }

	}
}
