using Nest.QueryDsl;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class IntervalsAllOf  {
		
		[DataMember(Name="intervals")]
		public List<IntervalsContainer> Intervals { get; set; }


		[DataMember(Name="max_gaps")]
		public int MaxGaps { get; set; }


		[DataMember(Name="ordered")]
		public bool Ordered { get; set; }

	}
}
