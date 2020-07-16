using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class IntervalsAnyOf  {
		
		[DataMember(Name="intervals")]
		public List<IntervalsContainer> Intervals { get; set; }

	}
}
